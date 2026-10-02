<div align="center">

# 💰 Expense Tracker

**A modern, responsive personal finance and budget management platform built with Svelte 5, SvelteKit, and TypeScript.**

[![Svelte 5](https://img.shields.io/badge/Svelte-5.x-orange.svg?style=flat-square&logo=svelte)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.x-red.svg?style=flat-square&logo=svelte)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-Code_Quality-4B32C3.svg?style=flat-square&logo=eslint)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

[Features](#-features) • [Engineering Highlights](#-engineering-highlights) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture) • [Getting Started](#-getting-started) • [API Contract](#-api-contract)

</div>

---

## 📌 Executive Overview

**Expense Tracker** is a full-featured personal finance application designed for speed, clarity, and ease of use. It empowers users to monitor spending, track daily transactions, visualize savings goals, and manage budgets in real time.

Engineered with the cutting-edge **Svelte 5 Runes API**, this project showcases modern reactive programming patterns, modular component-driven architecture, end-to-end TypeScript type safety, and clean RESTful service integration.

---

## ✨ Features

- **📊 Comprehensive Financial Dashboard:** Instant visibility into total balance, current monthly spending, income breakdowns, and dynamic savings progress indicators.
- **⚡ Full Transaction Lifecycle (CRUD):** Add, view, edit, and delete expense entries with real-time UI updates and confirmation modals.
- **🏷️ Smart Categorization:** Categorize expenses (e.g., Food, Transport, Utilities, Entertainment) with automated icon mapping and contextual tags.
- **📅 Historical Records:** Chronologically grouped spending logs with itemized costs, dates, and detailed notes.
- **🎯 Budget & Savings Planning:** Configurable monthly income and savings targets that calculate real-time surplus and budgetary headroom.
- **🔒 Authentication & Session Guarding:** User login, registration, and logout flows backed by session management and automatic 401 unauthorized redirects.
- **📱 Fully Responsive Design:** Clean mobile-first and desktop layout featuring an adaptive sidebar navigation and accessible card widgets.

---

## 🎯 Engineering Highlights

_Key architectural patterns and engineering decisions relevant for technical recruiters and hiring managers:_

### 1. Modern Svelte 5 Runes Architecture

- Leverages Svelte 5's fine-grained reactivity model using `$state`, `$derived`, and `$props`.
- Replaces legacy store boilerplate with direct signals, resulting in minimal runtime overhead, deterministic change propagation, and zero memory leaks.

### 2. Clean Architecture & Separation of Concerns

- **Domain Layer (`src/lib/types/`):** Strict TypeScript models (`Expense`, `UserSettings`, `UserDetails`) guaranteeing compile-time integrity.
- **Service Layer (`src/lib/services/`):** Dedicated API modules (`expenses.ts`, `auth.ts`, `api.ts`) separating UI state from transport logic.
- **Component Layer (`src/lib/components/`):** Modular breakdown organized by domain (`cards/`, `layout/`, `common/`) exported through centralized barrel patterns.

### 3. Resilient API Abstraction (`apiFetch`)

- Centralized HTTP client built with `fetch` supporting dynamic base URLs via `$env/dynamic/public`.
- Automated JSON payload serialization and header negotiation.
- Integrated credentials support for secure cookie/session tokens (`credentials: 'include'`).
- Global authentication interceptor that seamlessly redirects unauthenticated sessions to `/login`.

### 4. Code Quality & Strict Tooling

- **Type Safety:** 100% TypeScript with strict compile checks and ambient declarations for Svelte components.
- **Diagnostics:** Verified with `svelte-check` (0 errors) and automated Vite build validation.
- **Linting & Formatting:** Standardized code style enforced with ESLint 9+ flat config and Prettier (`prettier-plugin-svelte`).

---

## 🖼️ UI Showcase

|                  Dashboard Overview                   |         Transaction History & Management          |
| :---------------------------------------------------: | :-----------------------------------------------: |
| ![Dashboard](src/lib/assets/screenshot-dashboard.png) | ![History](src/lib/assets/screenshot-history.png) |

|                     Add Expense Form                      |               Mobile & Desktop Layout                |
| :-------------------------------------------------------: | :--------------------------------------------------: |
| ![Add Expense](src/lib/assets/screenshot-add-expense.png) | ![Brand Preview](src/lib/assets/expense-tracker.png) |

---

## 🛠️ Tech Stack

| Domain                   | Technology                                    | Purpose                                                    |
| :----------------------- | :-------------------------------------------- | :--------------------------------------------------------- |
| **Frontend Framework**   | [Svelte 5](https://svelte.dev/)               | High-performance reactive UI using Runes                   |
| **Meta-Framework**       | [SvelteKit 2](https://kit.svelte.dev/)        | File-based routing, SSR/client navigation, env management  |
| **Language**             | [TypeScript](https://www.typescriptlang.org/) | Static type safety and structured domain models            |
| **Bundler & Dev Server** | [Vite 7](https://vitejs.dev/)                 | Instant HMR and optimized production bundling              |
| **Styling**              | Modern CSS3                                   | Custom design system with CSS variables, Flexbox & Grid    |
| **Backend Integration**  | Spring Boot / REST API                        | Enterprise REST service endpoints with session-based auth  |
| **Code Quality**         | ESLint & Prettier                             | Automated linting, code consistency, and syntax validation |

---

## 🏗️ Architecture & Data Flow

```
┌────────────────────────────────────────────────────────┐
│                   Svelte 5 Frontend                    │
│                                                        │
│   ┌──────────────────┐         ┌───────────────────┐   │
│   │  Route Views     │         │  UI Components    │   │
│   │  - / (Dashboard) │ ◄─────► │  - Cards (Budget) │   │
│   │  - /history      │         │  - Modals (CRUD)  │   │
│   │  - /add-expense  │         │  - SideNavBar     │   │
│   │  - /settings     │         └───────────────────┘   │
│   └─────────┬────────┘                   ▲             │
│             │                            │             │
│             ▼                            ▼             │
│   ┌────────────────────────────────────────────────┐   │
│   │             Service & State Layer              │   │
│   │  - auth.ts (login, register, session)          │   │
│   │  - expenses.ts (CRUD, monthly calculations)    │   │
│   │  - store.ts (reactive state caching)           │   │
│   └───────────────────────┬────────────────────────┘   │
│                           │                            │
│                           ▼                            │
│   ┌────────────────────────────────────────────────┐   │
│   │          apiFetch (HTTP Client)                │   │
│   │  - Session credentials, JSON serialize, 401    │   │
│   └───────────────────────┬────────────────────────┘   │
└───────────────────────────┼────────────────────────────┘
                            │ HTTP / REST
                            ▼
┌────────────────────────────────────────────────────────┐
│                   Backend REST API                     │
│         (Spring Boot / Microservices / Node)           │
│   /auth/login • /history • /addExpense • /getDetails   │
└────────────────────────────────────────────────────────┘
```

---

## 📂 Project Directory Structure

```text
ExpenseTracker/
├── src/
│   ├── app.d.ts                     # Ambient module and typing declarations
│   ├── app.html                     # HTML root template with fonts and meta
│   ├── lib/
│   │   ├── assets/                  # Application icons, logos, and screenshots
│   │   ├── components/
│   │   │   ├── cards/               # Dashboard cards (Balance, Income, Savings, Plan)
│   │   │   ├── common/              # Shared modals (EditExpense, DeleteModal, DateHeader)
│   │   │   ├── layout/              # Structural chrome (TopBar, SideNavBar, ProfileDropdown)
│   │   │   └── index.ts             # Centralized component barrel exports
│   │   ├── services/
│   │   │   ├── api.ts               # Resilient fetch client with auth guard
│   │   │   ├── auth.ts              # Authentication & credentials handling
│   │   │   └── expenses.ts          # Expense CRUD & metric retrieval operations
│   │   ├── types/
│   │   │   └── expense.ts           # Domain data models and interfaces
│   │   ├── utils/
│   │   │   ├── categoryIcons.ts     # Category to visual icon resolver
│   │   │   └── clientApi.ts         # Client-side utility functions
│   │   └── store.ts                 # Cross-component reactive state
│   └── routes/
│       ├── +layout.svelte           # Base layout with persistent navigation
│       ├── +page.svelte             # Primary analytics dashboard
│       ├── add-expense/             # New transaction submission page
│       ├── history/                 # Full transaction ledger with Edit/Delete
│       ├── login/                   # User authentication portal
│       ├── signup/                  # New account onboarding
│       └── settings/                # Income & target savings configuration
├── eslint.config.js                 # Modern ESLint flat configuration
├── .prettierrc                      # Prettier formatting standards
├── tsconfig.json                    # Strict TypeScript configuration
└── package.json                     # NPM dependency and script manifest
```

---

## 🚀 Getting Started

Follow these step-by-step instructions to get a local copy running for development and testing.

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm**: `v9.0.0` or higher (bundled with Node.js)
- **Git**: ([Download Git](https://git-scm.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/jagatha-devendran/expense-tracker.git
cd expense-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```bash
cp .env.example .env 2>/dev/null || touch .env
```

Add your backend API endpoint configuration:

```env
# URL of your REST API backend (defaults to http://localhost:8080 if not set)
PUBLIC_API_BASE_URL=http://localhost:8080
```

### 4. Run the Development Server

```bash
npm run dev
```

Navigate to [http://localhost:5173](http://localhost:5173) in your browser. The application includes hot module replacement (HMR) for rapid development.

---

## 📋 Available Scripts

The project includes standardized npm scripts for development, testing, and production builds:

| Command           | Description                                                         |
| :---------------- | :------------------------------------------------------------------ |
| `npm run dev`     | Starts the local development server on port 5173                    |
| `npm run build`   | Builds the production bundle with Vite and `@sveltejs/adapter-auto` |
| `npm run preview` | Locally previews the optimized production build                     |
| `npm run check`   | Synchronizes SvelteKit types and executes strict `svelte-check`     |
| `npm run lint`    | Runs Prettier format verification and ESLint static analysis        |
| `npm run format`  | Automatically formats all source code using Prettier                |

---

## 🔌 API Contract

The frontend connects to a REST backend implementing the following contract:

### Authentication

- `POST /auth/login` - Authenticate with email/password, returning session token/user details.
- `POST /auth/signup` - Register a new user account.
- `POST /auth/logout` - Invalidate active session.

### Transactions & Analytics

- `GET /home` - Retrieve primary dashboard metrics and recent expenses.
- `GET /history` - Fetch all recorded transactions for the authenticated user.
- `POST /addExpense` - Create a new expense record (`{ name, price, category, description, date }`).
- `PUT /updateExpense/{id}` - Update an existing expense by ID.
- `DELETE /deleteExpense/{id}` - Delete an expense record by ID.
- `GET /getSpending` - Retrieve aggregated monthly spending.
- `GET /getDetails` - Retrieve user settings (`income`, `savings`).
- `POST /saveDetails` - Persist updated financial goals and monthly income.

---

## 🗺️ Future Roadmap

- [ ] **Interactive Visual Analytics:** Integrate Chart.js or D3 for weekly, monthly, and category spending distributions.
- [ ] **Export Reports:** Download statements in CSV and PDF formats.
- [ ] **Multi-Currency Support:** Live exchange rates for international currencies (USD, EUR, GBP, INR).
- [ ] **Theme Customization:** Seamless toggle between Light and Dark mode.
- [ ] **Automated CI/CD:** GitHub Actions workflow executing type checking, linting, and automated testing on pull requests.

---

## 👤 Author

**Jagatha Devendran**

- GitHub: [@jagatha-devendran](https://github.com/jagatha-devendran)
- Email: [jagathadevam965@gmail.com](mailto:jagathadevam965@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
