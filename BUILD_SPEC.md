# Prova — Build Specification

## What is Prova?
Operations software for high-end car storage facilities. A Bloomberg Terminal × Porsche Design Center × RM Sotheby's aesthetic. B2B SaaS.

## Brand Tokens

### Colors (CSS Variables for globals.css)
- Background: `#0a0e1a` (deep navy)
- Surface/Card: `#0f1626`
- Surface Elevated: `#162036`
- Accent/Primary: `#c9a84c` (warm gold)
- Accent Hover: `#d4b85c`
- Text Primary: `#f0ebe0` (warm white)
- Text Secondary: `#a0a8b8`
- Text Muted: `#5c6478`
- Border: `#1e2d45`
- Border Gold: `#c9a84c`
- Destructive: `#ef4444`
- Success: `#22c55e`
- Warning: `#eab308`

### Typography
- Display/Headlines: `Cormorant Garamond` (serif) — Google Fonts
- Body/UI: `DM Sans` — Google Fonts
- Mono (VINs, data): `JetBrains Mono` — Google Fonts

### Design Details
- Border radius: 8-12px for cards, pill shape for buttons
- Cards: bg-surface with 1px border-border, hover gets subtle gold border glow
- Buttons Primary: bg-accent text-background, pill shape
- Buttons Ghost: border-border text-foreground
- Sidebar nav: Fixed left on desktop, bottom tabs on mobile
- Everything dark theme — NO light mode

## Pages to Build

### 1. Landing Page `/` — 10 sections
Build ALL sections from the mockup:

1. **Navbar** (sticky): PROVA logo left (serif gold), nav links center (Features, How It Works, Pricing, About), CTA "Start Free Trial" right (gold pill button). Mobile: hamburger menu.

2. **Hero**: Two columns. Left: headline "Your clients store icons. Manage them like it." in Cormorant Garamond ~48-56px white with gold underline on "it." Subtext in DM Sans gray. Two buttons: "Get Started" (gold) + "Watch Demo" (ghost). Right: Dashboard preview image (use `/images/hero-illustration.png`).

3. **Pain Points**: 3 cards in a row. Each has a gold icon, white serif title, gray sans description. Cards: "Scattered Data & Spreadsheets", "Blind Owners, Zero Transparency", "Zero Provenance Documentation". Use dark card bg with subtle border.

4. **Solution/Elevate**: Large card with gold border showing product screenshot and "Elevate Your Operations" title.

5. **Features**: 2×3 bento grid. 6 feature cards with gold icons: Vehicle Profiles, Climate Logs, Service History, Owner Directory, Scheduling Calendar, Stripe Billing. Each has title + description.

6. **How It Works**: 3 steps with gold numbered circles connected by a gold line. Step 1: "Onboard Your Facility", Step 2: "Centralize Vehicle Data", Step 3: "Optimize & Manage".

7. **Pricing Preview**: 3 tier cards linking to /pricing. Starter $500/mo, Professional $1,000/mo (highlighted), Enterprise $1,500/mo.

8. **Social Proof**: Stats row (50+ Facilities, $2B+ Assets Under Management, 99.9% Uptime, <2hr Response Time) + 3 testimonial cards.

9. **FAQ**: 6-item accordion. Questions about compatibility, data security, custom features, implementation timeline, IoT integration, training.

10. **CTA Banner**: Full-width dark card with gold accents. "Ready to transform your luxury car storage business?" + CTA button.

11. **Footer**: 4-column layout (Product, Company, Resources, Contact) + bottom bar with logo, Privacy/Terms links, social icons, copyright 2026.

### 2. Auth Pages `/signup` and `/login`
- Split layout: Left panel with PROVA branding + feature checklist. Right panel with form.
- Signup: Google button + Full Name, Email, Password, Company Name fields + "Create Account" gold button
- Login: Google button + Email, Password + "Sign In" gold button
- Use NextAuth with credentials provider (email/password with bcrypt) + Google OAuth placeholder
- SOC 2 compliant badge at bottom

### 3. Dashboard `/dashboard`
- Left sidebar: PROVA logo, nav items (Dashboard, Vehicles, Schedule, Owners, Settings) with gold active state
- Main area: 4 stat cards (Total Vehicles, Active Owners, Climate Alerts, Pending Services) with gold borders
- Vehicle table below: columns for Vehicle (image+name), VIN (mono font), Owner, Bay, Status badge, Climate status
- Seed with realistic luxury car data (Ferraris, Porsches, McLarens, etc.)
- Mobile: sidebar collapses to bottom tab bar

### 4. Vehicles Pages
- `/dashboard/vehicles` — Full vehicle list with search/filter
- `/dashboard/vehicles/new` — Add vehicle form (make, model, year, VIN, owner, bay, color, notes, image upload placeholder)
- `/dashboard/vehicles/[id]` — Vehicle detail: large hero image area, title "2019 Ferrari 488 Pista — Bay 14A" in gold italic serif. Three column grid: Vehicle Details card, Climate History card (with chart placeholder), Service History card. Action buttons: Schedule Service, Generate Report, Contact Owner.

### 5. Schedule `/dashboard/schedule`
- Monthly calendar view with vehicle events
- Simple grid calendar, events shown as colored dots/pills

### 6. Owners `/dashboard/owners`
- Owner directory: card grid showing owner name, vehicle count, contact info
- Click to see owner detail with their vehicles

### 7. Settings `/dashboard/settings`
- Facility settings: name, address, contact
- Subscription/billing info placeholder
- Team members list placeholder

### 8. About `/about`
- Hero: Full-width facility image (`/images/about-visual.png`) with dark overlay, gold quote text
- Mission: "Storeganise is for self-storage. Prova is for car collections."
- 4 values cards: Precision, Provenance, Premium, Privacy — each with gold icon, serif title, description
- Market gap section + CTA card with gold gradient

### 9. Pricing `/pricing`
- 3 tier cards with gold borders:
  - Starter: $500/mo — up to 30 vehicles, basic climate logging, email support
  - Professional: $1,000/mo — up to 100 vehicles, advanced climate, priority support, owner portal (MOST POPULAR badge)
  - Enterprise: $1,500/mo — unlimited, dedicated manager, custom integrations, multi-facility
- Monthly/Annual toggle (annual = 2 months free)
- FAQ section below

### 10. Contact `/contact`
- Contact form: name, email, subject, message
- Sidebar with address, email, phone placeholders

### 11. Privacy `/privacy` & Terms `/terms`
- Full legal pages with real generated content for a B2B SaaS car storage platform

### 12. Deck `/deck` — Pitch deck shell
- Full-screen slide navigation with Framer Motion
- Shell slides: Title, Problem, Solution, Product, Market, Business Model, Traction, Team, Ask
- Arrow key navigation, slide counter

### 13. Docs `/docs` — Document hub shell
- Sidebar with 5 sections: Research, GTM, Marketing, Brand, Pitch
- Main area: Section cards with title, summary, placeholder content
- Mobile: hamburger drawer

### 14. Health `/api/health`
- Returns JSON `{ "status": "ok", "timestamp": "..." }`

## Database Schema (Prisma + PostgreSQL)

Use shared Postgres: `postgresql://postgres:PASSWORD@k80c0s08c84kgcs44kckcos0:5432/prova`

Models needed:
- User (id, name, email, password hash, company, role, timestamps)
- Account + Session (NextAuth)
- Vehicle (id, make, model, year, vin, color, owner relation, bay, status, imageUrl, notes, userId, timestamps)
- Owner (id, name, email, phone, address, notes, userId, timestamps)
- ClimateLog (id, vehicleId, temperature, humidity, recordedAt, notes)
- ServiceRecord (id, vehicleId, type, description, provider, cost, date, notes)
- ScheduleEvent (id, title, description, vehicleId, date, type, userId, timestamps)

Seed with realistic luxury car data.

## Auth Implementation
- NextAuth v5 (beta) with Prisma adapter
- Credentials provider: email + bcrypt password
- Google OAuth placeholder (env vars needed)
- Protected routes: all /dashboard/* pages require auth
- Middleware to redirect unauthenticated users

## Key Build Rules
1. Use Cormorant Garamond for ALL headlines/display text, DM Sans for body, JetBrains Mono for data
2. Gold accent (#c9a84c) everywhere — borders, icons, active states, CTAs
3. Deep navy background (#0a0e1a) — this is a DARK ONLY app
4. Use images from `/images/` — hero-illustration.png, about-visual.png, feature-icons.png, problem-illustration.png, logo-placeholder.png, bg-pattern.png
5. Responsive: test at 375px. Navbar → hamburger. Sidebar → bottom tabs. Grid → stack.
6. No lorem ipsum — write real content for a luxury car storage SaaS
7. Framer Motion for subtle animations (fade in on scroll, hover effects)
8. Every page has navbar (marketing pages) or sidebar (dashboard pages) + footer
