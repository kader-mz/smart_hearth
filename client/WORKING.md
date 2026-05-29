Full Claude Code Prompt
Here is the complete, copy-paste-ready prompt:

text
You are building a production-ready Next.js full-stack application.
Use the following architecture, conventions, and best practices STRICTLY.
Do NOT use any separate backend server. Next.js only (App Router) + Prisma + PostgreSQL.

---

## 📁 PROJECT STRUCTURE — Colocation + Feature-Sliced Design

Use the Next.js App Router colocation pattern.
Each route owns its private files using the `_` prefix convention (not treated as routes by Next.js).
src/
├── app/
│ ├── layout.tsx ← Root layout (global fonts, providers)
│ ├── page.tsx ← Home page
│ │
│ ├── (auth)/ ← Route group (no URL segment)
│ │ ├── login/
│ │ │ ├── page.tsx ← Login page (Server Component)
│ │ │ ├── _components/
│ │ │ │ └── LoginForm.tsx ← Client component specific to login
│ │ │ └── _actions/
│ │ │ └── login.action.ts ← Server Action for login
│ │ ├── register/
│ │ │ ├── page.tsx
│ │ │ ├── _components/
│ │ │ │ └── RegisterForm.tsx
│ │ │ └── _actions/
│ │ │ └── register.action.ts
│ │ └── layout.tsx ← Shared auth layout (centered card, etc.)
│ │
│ ├── dashboard/
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ ├── _components/
│ │ │ ├── DashboardHeader.tsx
│ │ │ └── StatsCard.tsx
│ │ └── _actions/
│ │ └── dashboard.action.ts
│ │
│ ├── [feature]/ ← Repeat this pattern for every feature
│ │ ├── page.tsx
│ │ ├── _components/
│ │ └── _actions/
│ │
│ └── api/ ← API routes ONLY when needed (webhooks, etc.)
│
├── components/ ← GLOBAL reusable components
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ ├── Modal.tsx
│ │ ├── Spinner.tsx
│ │ └── index.ts ← Barrel export
│ ├── forms/
│ │ └── FormField.tsx ← Reusable labeled input wrapper
│ └── layout/
│ ├── Navbar.tsx
│ ├── Sidebar.tsx
│ └── Footer.tsx
│
├── lib/
│ ├── prisma.ts ← Prisma client singleton
│ ├── auth.ts ← Auth helpers (session, cookies)
│ └── utils.ts ← cn(), formatDate(), etc.
│
├── schemas/ ← Zod schemas (shared between client & server)
│ ├── auth.schema.ts
│ ├── user.schema.ts
│ └── index.ts
│
├── types/
│ └── index.ts ← Global TypeScript types
│
└── prisma/
├── schema.prisma
└── seed.ts

text

---

## ⚙️ TECH STACK — Exact packages to use

- **Framework**: Next.js 15 App Router (no pages directory)
- **Database ORM**: Prisma with PostgreSQL
- **Validation**: Zod (schemas in `/schemas/`)
- **Forms**: react-hook-form + @hookform/resolvers/zod
- **Server Mutations**: Next.js Server Actions (`"use server"`)
- **Data Fetching**: Native fetch() / Prisma in Server Components (no useEffect for data)
- **Auth**: next-auth v5 (Auth.js) OR custom session with iron-session
- **Styling**: Tailwind CSS v4
- **Type Safety**: TypeScript strict mode throughout

---

## 🗄️ PRISMA — Setup & Rules

```ts
// lib/prisma.ts — Singleton pattern (REQUIRED to avoid dev hot-reload issues)
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Rules:
- NEVER import `new PrismaClient()` directly in components or actions — always use this singleton
- All database calls happen ONLY in Server Actions or Server Components
- Use `prisma.$transaction([...])` for multi-step writes
- Handle Prisma errors explicitly (catch `PrismaClientKnownRequestError` for unique constraint violations, etc.)

---

## ✅ VALIDATION — Zod Schema Rules

```ts
// schemas/auth.schema.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password too long"),
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Export inferred types
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
```

Rules:
- All Zod schemas live in `/schemas/` — shared between client-side form validation AND server-side action validation
- ALWAYS validate BOTH on client (react-hook-form resolver) AND server (inside the action) — never trust client alone
- Use `.refine()` and `.superRefine()` for cross-field validation
- Export inferred TypeScript types from every schema

---

## 📋 FORMS — react-hook-form + Zod + Server Actions

```tsx
// app/(auth)/login/_components/LoginForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState, useTransition } from "react";
import { loginSchema, type LoginInput } from "@/schemas/auth.schema";
import { loginAction } from "../_actions/login.action";

export function LoginForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),   // ← Client-side Zod validation
    mode: "onBlur",                       // ← Validate on blur for better UX
  });

  const onSubmit = (data: LoginInput) => {
    setServerError(null);
    startTransition(async () => {
      const result = await loginAction(data);
      if (result?.error) setServerError(result.error);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p role="alert" className="text-red-500 text-sm">
            {errors.password.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-red-600 text-sm">{serverError}</p>
      )}

      <button type="submit" disabled={isPending}>
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
```

---

## 🔁 SERVER ACTIONS — Pattern & Rules

```ts
// app/(auth)/login/_actions/login.action.ts
"use server";

import { loginSchema } from "@/schemas/auth.schema";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

// Return type: always return { error: string } on failure OR redirect on success
// NEVER throw unhandled errors — always return structured error objects
export async function loginAction(input: unknown) {
  // 1. SERVER-SIDE validation (even if client already validated)
  const parsed = loginSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.errors.message };
  }

  const { email, password } = parsed.data;

  try {
    // 2. Database query
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return { error: "Invalid email or password" };

    // 3. Business logic
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return { error: "Invalid email or password" };

    // 4. Set session (example with iron-session or next-auth)
    await createSession(user.id);

  } catch (error) {
    console.error("[loginAction]", error);
    return { error: "Something went wrong. Please try again." };
  }

  // 5. Redirect AFTER try/catch (redirect() throws internally in Next.js)
  redirect("/dashboard");
}
```

Action Rules:
- Mark with `"use server"` at the top of file
- ALWAYS re-validate with Zod inside the action (do not trust client input)
- Accept `input: unknown`, then parse with `schema.safeParse(input)` 
- Return `{ error: string }` for failures — never throw to the client
- Call `redirect()` OUTSIDE try/catch blocks (it throws internally)
- Name files as `[feature].action.ts` — one action file per route/feature
- Handle Prisma-specific errors (P2002 = unique constraint, P2025 = not found)

---

## 📡 DATA FETCHING — Server Components

```tsx
// app/dashboard/page.tsx — Server Component (no "use client")
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { DashboardHeader } from "./_components/DashboardHeader";

// Fetch data directly in Server Components — no useEffect, no API routes needed
export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  // Direct Prisma call — runs on the server
  const stats = await prisma.project.findMany({
    where: { userId: session.userId },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return (
    <main>
      <DashboardHeader />
      {/* Pass fetched data as props to Client Components if needed */}
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </main>
  );
}
```

Data Fetching Rules:
- Fetch in Server Components directly — no API routes, no useEffect, no useState for server data
- Use `async/await` at the page/layout level
- Pass data down as props to Client Components
- Use `Suspense` boundaries for streaming: `<Suspense fallback={<Skeleton />}>`
- Cache with Next.js `cache()` for repeated calls in the same request tree
- Use `revalidatePath("/path")` or `revalidateTag("tag")` in actions after mutations

---

## 🌍 GLOBAL COMPONENTS — Rules

Files in `/components/` must be:
- **Truly reusable** — no business logic, no direct Prisma calls
- **Composable** — accept children and className props
- **Typed** — all props typed with TypeScript interfaces
- Exported from `/components/ui/index.ts` barrel file

```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", isLoading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          {
            primary: "bg-blue-600 text-white hover:bg-blue-700",
            secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
            ghost: "hover:bg-gray-100 text-gray-700",
            danger: "bg-red-600 text-white hover:bg-red-700",
          }[variant],
          { sm: "text-sm px-3 py-1.5", md: "px-4 py-2", lg: "px-6 py-3 text-lg" }[size],
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner className="mr-2 h-4 w-4" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
```

---

## 🔒 ADDITIONAL BEST PRACTICES

### TypeScript
- `strict: true` in tsconfig.json
- No `any` types — use `unknown` and narrow
- Use `satisfies` operator for config objects

### Error Handling
- Use a global `error.tsx` boundary per route segment
- Use `not-found.tsx` for 404 states
- Every server action returns `{ data, error }` discriminated union

### Security
- Validate and sanitize ALL inputs on the server — never trust the client
- Hash passwords with bcryptjs (never store plaintext)
- Use `httpOnly` cookies for session tokens
- Protect server actions with session checks at the TOP of every action

### Environment Variables
- Database URL in `.env` (never committed)
- All env vars typed via `@t3-oss/env-nextjs` or manual `process.env` validation with Zod at startup

### Performance
- Mark components as `"use client"` ONLY when needed (interactivity, hooks)
- Keep Client Component trees as small as possible — push `"use client"` to leaf nodes
- Use `<Suspense>` with meaningful skeleton fallbacks for async Server Components

---

## ✅ SUMMARY OF RULES

| Rule | Detail |
|---|---|
| No separate backend | Next.js Server Actions + Prisma only |
| Validation | Zod on BOTH client (react-hook-form) and server (action) |
| Data fetching | Server Components + Prisma directly, no useEffect for server data |
| Colocation | Each route has its own `_components/` and `_actions/` |
| Global components | `/components/ui/`, `/components/layout/` — no business logic |
| Actions return | Always `{ error: string }` on failure, `redirect()` on success |
| Prisma | Singleton in `lib/prisma.ts`, never instantiate directly |
| TypeScript | Strict mode, infer types from Zod schemas |
Now for the name of the pattern: it's the Next.js App Router Colocation Pattern (sometimes called Feature-Based Colocation or FSD — Feature-Sliced Design). The core idea is that each route "owns" its private files — the _components folder and _actions folder are route-private (the _ prefix tells Next.js to exclude them from routing), while /components at the root holds only globally shared UI. The next-safe-action package is also worth considering as it adds type-safe wrappers around Server Actions and has a built-in react-hook-form adapter.