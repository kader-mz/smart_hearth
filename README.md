# 🫀 SmartHeart — Intelligent Nutritional Guidance Platform

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Web%20Application-01696F?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Stack-React%20%7C%20Firebase-FF6B6B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Region-Annaba%2C%20Algeria-437A22?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-In%20Development-f0a500?style=for-the-badge" />
</p>

> **"Eat Smart. Live Well."**  
> SmartHeart is an AI-powered web platform that guides users with specific health conditions — diabetes, celiac disease, and healthy lifestyle goals — toward safe, affordable, and locally available food alternatives in the Annaba region, Algeria.

---

## 📖 Table of Contents

- [Overview](#overview)
- [The Problem We Solve](#the-problem-we-solve)
- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Firebase Setup](#firebase-setup)
- [Database Schema](#database-schema)
- [User Roles](#user-roles)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## Overview

SmartHeart is born from a simple but critical observation: **many Algerians living with diabetes or celiac disease lack access to clear, localized, and actionable nutritional information**. A diabetic patient during Ramadan does not need to be told "don't eat Zlabia" — they need to know *what they can eat instead*, *where to find it*, and *whether it fits their budget*.

SmartHeart solves this by combining:
- A **smart product recommender** that suggests safe alternatives based on the user's health profile
- A **real-time local store inventory** showing product availability in nearby Annaba shops
- A **nutrition education hub** that builds dietary literacy through bite-sized articles
- A **partner store dashboard** for local grocery owners to manage and expose their stock

---

## The Problem We Solve

| Challenge | SmartHeart's Response |
|---|---|
| No nutritional labeling in local markets | Structured product database with Nutri-Score + GI per product |
| Diabetic patients unaware of safe alternatives | AI recommendation engine that *redirects* cravings, not just blocks them |
| Celiac patients unable to verify gluten presence | "Sans Gluten" label filter with verified product catalog |
| Stock info scattered across informal stores | Partner store dashboard for manual + semi-automated stock updates |
| Nutritional education inaccessible in Arabic/French | Bilingual article hub with progressive learning path |

---

## Features

### 👤 For End Users
- **Health Profile Wizard** — 3-step onboarding capturing age, weight, conditions (diabetes / celiac / healthy), goals, and dietary preferences
- **Smart Product Search** — filter by Nutri-Score, Glycemic Index, labels (Sans Gluten / Bio / Diabétique ✓), price range, and real-time local availability
- **Product Detail Pages** — full nutrition facts table, GI gauge, personalized compatibility badge, and a store availability table with distance and hours
- **AI Recipe Recommender** — generates recipe suggestions matching the user's health profile, available ingredients, and budget in DA
- **Local Store Map** — embedded map with colored markers showing product availability per store, with address, hours, and directions
- **Nutrition Education Hub** — categorized articles on GI, label reading, celiac disease, diabetes nutrition, and local Algerian food alternatives
- **Learning Progress** — track articles read, unlock badges, progressive dietary literacy gamification

### 🏪 For Store Partners
- **Partner Dashboard** — weekly KPIs: store views, matching searches, products in stock
- **Inventory Management** — table with inline editable price, quantity, and availability toggle
- **Analytics Charts** — top searched products in their area, store view trends (30-day line chart)
- **CSV Import** — bulk product upload for stores with larger inventories

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                        │
│         React.js Web App (Desktop-first, 1440px)        │
│   Pages: Auth │ Dashboard │ Search │ Map │ Recipes │    │
│           Articles │ Product Detail │ Store Dashboard   │
└─────────────────────┬───────────────────────────────────┘
                      │ REST / Firestore SDK
┌─────────────────────▼───────────────────────────────────┐
│                    BACKEND LAYER                        │
│              Firebase (BaaS)                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Firestore   │  │    Auth      │  │   Storage    │  │
│  │  (Database)  │  │  (Users)     │  │  (Images)    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────────────────────────────────────────┐   │
│  │         Cloud Functions (Node.js)                │   │
│  │  • Recommendation engine                         │   │
│  │  • GI / Nutri-Score computation                  │   │
│  │  • Stock staleness alerts                        │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js 18 | UI framework |
| **Routing** | React Router v6 | Client-side navigation |
| **State** | Zustand | Global state management |
| **Styling** | Tailwind CSS v4 | Utility-first styling |
| **Icons** | Lucide React | Outlined icon set |
| **Charts** | Recharts | Analytics dashboards |
| **Maps** | Google Maps JS API | Store locator |
| **Database** | Firebase Firestore | NoSQL document DB |
| **Auth** | Firebase Authentication | Email + Google login |
| **Storage** | Firebase Storage | Product & recipe images |
| **Functions** | Firebase Cloud Functions | Serverless backend logic |
| **Hosting** | Firebase Hosting | Web deployment |

---

## Project Structure

```
smartheart/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/               # Logos, illustrations
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # Buttons, inputs, badges, modals
│   │   ├── cards/            # ProductCard, RecipeCard, StoreCard
│   │   ├── layout/           # Sidebar, Header, PageWrapper
│   │   └── charts/           # BarChart, LineChart wrappers
│   ├── pages/
│   │   ├── Auth/             # Login, Register, ProfileSetup
│   │   ├── Dashboard/        # Home dashboard
│   │   ├── Search/           # Product catalog & search
│   │   ├── ProductDetail/    # Single product page
│   │   ├── Map/              # Store locator map
│   │   ├── Recipes/          # Recipe recommender
│   │   ├── Learn/            # Education hub
│   │   └── StoreAdmin/       # Partner store dashboard
│   ├── hooks/                # Custom React hooks
│   ├── services/
│   │   ├── firebase.js       # Firebase config + init
│   │   ├── firestoreService.js
│   │   ├── authService.js
│   │   └── recommendationService.js
│   ├── store/                # Zustand stores
│   │   ├── userStore.js
│   │   ├── productStore.js
│   │   └── inventoryStore.js
│   ├── utils/
│   │   ├── giUtils.js        # Glycemic Index helpers
│   │   ├── nutriScore.js     # Nutri-Score computation
│   │   └── formatters.js
│   ├── styles/
│   │   ├── tokens.css        # Design tokens (colors, spacing, type)
│   │   └── base.css          # Reset + base styles
│   └── main.jsx
├── functions/                # Firebase Cloud Functions
│   ├── index.js
│   ├── recommendations.js
│   └── stockAlerts.js
├── firestore.rules
├── firebase.json
├── .env.example
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- A Firebase project (see [Firebase Setup](#firebase-setup))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/smartheart.git
cd smartheart

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Fill in your Firebase credentials in .env.local

# 5. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

---

## Environment Variables

Create a `.env.local` file at the root of the project based on `.env.example`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> ⚠️ Never commit `.env.local` to version control. It is already listed in `.gitignore`.

---

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project named `smartheart-annaba`
3. Enable **Firestore**, **Authentication** (Email/Password + Google), **Storage**, and **Hosting**

### 2. Seed the Database

Use the provided seed file to populate Firestore with the initial dataset (120 stores across Annaba wilaya, 648+ products, inventory data):

```bash
# Install firebase-admin
npm install firebase-admin

# Run the import script
node scripts/import-smartheart_annaba_firestore.js \
  path/to/serviceAccountKey.json \
  path/to/smartheart_annaba_120_stores_firebase_ready.json
```

> Download the seed files from the [Releases](https://github.com/your-username/smartheart/releases) section.

### 3. Firestore Security Rules

Deploy the included security rules:

```bash
firebase deploy --only firestore:rules
```

---

## Database Schema

### Collections Overview

```
firestore/
├── users/{userId}           # User profiles + health conditions
├── products/{productId}     # Product catalog with nutrition data
├── stores/{storeId}         # Partner store profiles
├── inventory/{storeId}/
│   └── products/{productId} # Per-store stock, price, availability
├── recipes/{recipeId}       # Recipes with ingredients + steps
├── articles/{articleId}     # Education hub articles
├── storeOwners/{ownerId}    # Store partner accounts
└── appConfig/main           # Global config (GI ranges, Nutri-Score rules)
```

### Key Document Structures

**User Profile:**
```json
{
  "uid": "abc123",
  "displayName": "Yacine B.",
  "email": "yacine@example.com",
  "healthProfile": {
    "conditions": ["diabetic"],
    "goals": ["manage_diabetes", "lose_weight"],
    "age": 42,
    "weightKg": 82,
    "heightCm": 175,
    "activityLevel": "moderate"
  },
  "preferences": {
    "diet": ["gluten_free"],
    "budget": "medium",
    "preferOrganic": false
  },
  "createdAt": "2025-10-01T00:00:00Z"
}
```

**Product:**
```json
{
  "name": "Flocons d'Avoine Complets",
  "brand": "El Mordjane",
  "category": "Céréales",
  "glycemicIndex": 40,
  "nutriScore": "A",
  "labels": ["diabetic_friendly", "high_fiber"],
  "nutrition": {
    "calories": 367,
    "carbs": 66,
    "sugars": 1,
    "fiber": 10,
    "proteins": 13,
    "fats": 7
  },
  "imageUrl": "",
  "barcode": "6191234567890"
}
```

---

## User Roles

| Role | Access |
|---|---|
| **User (Patient)** | Full access to search, map, recipes, education hub, and personal dashboard |
| **Store Partner** | Access to store admin dashboard: inventory management, analytics, and stock updates |
| **Admin** | Full platform access including product catalog management and partner validation |

Roles are stored in Firestore under `users/{uid}.role` and enforced via Firestore Security Rules and Firebase Custom Claims.

---

## Screenshots

> *(Coming soon — UI in active development)*

| Page | Preview |
|---|---|
| Login | `screenshots/login.png` |
| Home Dashboard | `screenshots/dashboard.png` |
| Product Search | `screenshots/search.png` |
| Product Detail | `screenshots/product-detail.png` |
| Store Map | `screenshots/map.png` |
| Recipe Recommender | `screenshots/recipes.png` |
| Store Partner Dashboard | `screenshots/store-admin.png` |

---

## Roadmap

### Phase 1 — MVP (Current)
- [x] Firebase project setup & database seeding
- [x] Product catalog (648 products, Annaba region)
- [x] Store inventory seed (120 stores)
- [ ] Authentication (login + registration + profile wizard)
- [ ] Home dashboard with KPIs
- [ ] Product search + catalog page
- [ ] Product detail page

### Phase 2 — Core Features
- [ ] Store locator map (Google Maps integration)
- [ ] Recipe recommender
- [ ] Nutrition education hub
- [ ] Store partner dashboard (inventory management)

### Phase 3 — Intelligence Layer
- [ ] AI recommendation engine (Cloud Functions)
- [ ] Personalized "Compatible avec votre profil" scoring
- [ ] Stock staleness alerts for store partners
- [ ] CSV bulk import for inventory

### Phase 4 — Scale
- [ ] Expand coverage to other Algerian wilayas
- [ ] Mobile-responsive optimizations
- [ ] Arabic language support (RTL layout)
- [ ] Barcode scanner integration (product lookup)
- [ ] Push notifications for stock updates

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature description"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request** with a clear description

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Formatting (no logic change)
refactor: Code restructuring
test:     Adding or updating tests
chore:    Build process or tooling changes
```

---

## Team

This project is developed by a multidisciplinary university team from the **Université Badji Mokhtar — Annaba** as part of a startup incubation program, combining expertise from Computer Science, Electronics, and Automation Engineering.

| Role | Contribution |
|---|---|
| **Data Science & AI** | Recommendation engine, GI scoring, health profile logic |
| **Frontend Development** | React UI, design system, user experience |
| **Backend & Database** | Firebase architecture, Firestore schema, security rules |
| **Nutrition Domain Expert** | Product labeling, health condition validation, article content |
| **Business & UX** | User research, store partner onboarding, market validation |

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ in Annaba, Algeria — <em>Eat Smart. Live Well.</em>
</p>
