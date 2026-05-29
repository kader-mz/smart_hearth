"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const partnerLoginSchema = z.object({
  store_name: z.string().min(2, "Le nom du magasin doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe trop court"),
});

export async function partnerLoginAction(input: unknown) {
  const parsed = partnerLoginSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) {
    return { error: "Email ou mot de passe incorrect" };
  }

  const {
    data: { user: signedInUser },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", signedInUser!.id)
    .maybeSingle();

  if (!profile || profile.role !== "partner_admin") {
    await supabase.auth.signOut();
    return { error: "Ce compte n'est pas un compte partenaire" };
  }

  const { data: partner } = await supabase
    .from("partners")
    .select("id, name")
    .eq("owner_id", signedInUser!.id)
    .eq("is_active", true)
    .maybeSingle();

  if (!partner) {
    return { error: "Aucun magasin associé à ce compte" };
  }

  redirect("/partners");
}
