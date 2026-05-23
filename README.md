# ExpenseTracker - Svelte 5 + Firebase

A sleek, modern expense tracking application built with **Svelte 5**, **SvelteKit**, and **Firebase Firestore**. This app helps you manage your daily spending with ease, providing a clean dashboard and a detailed history of your transactions.

## 🚀 Features

- **Dashboard:** Overview of your total balance and today's spending.
- **Add Expense:** Quickly log new expenses with categories and descriptions.
- **History:** View all your past transactions grouped by date, sorted from newest to oldest.
- **Responsive Design:** Optimized for both mobile and desktop viewing.
- **Real-time Data:** Powered by Firebase Firestore for seamless data management.

## 🛠️ Tech Stack

- **Framework:** [Svelte 5](https://svelte.dev/) (using the latest Runes API)
- **Meta-framework:** [SvelteKit](https://kit.svelte.dev/)
- **Backend:** [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Styling:** Vanilla CSS (Modern and clean UI)
- **Language:** TypeScript

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js installed on your machine.
- A Firebase project created in the [Firebase Console](https://console.firebase.google.com/).

### 2. Environment Variables
Create a `.env` file in the root directory and add your Firebase configuration:

```env
PUBLIC_FIREBASE_API_KEY=your_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=your_project_id
PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Firestore Security Rules
To ensure the application can read and write data, you need to apply the following rules in your Firebase Console (or deploy using `firestore.rules` file):

```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /expenses/{date} {
      allow read, write: if true;
    }
  }
}
```

### 4. Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📂 Project Structure

- `src/lib/components`: Reusable Svelte components (BalanceCard, TopBar, etc.)
- `src/lib/services`: Firebase service logic for handling data.
- `src/lib/configs`: Firebase initialization and configuration.
- `src/routes`: SvelteKit pages and layouts.

## 📄 License
MIT
