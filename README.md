# CoPark Web 🚗

> **Modern Frontend for CoPark Parking Management Platform**

**CoPark Web** is the client-side application designed to offer a premium, seamless user experience. It consumes the CoPark API to allow users to find parking spots, manage their vehicles, and book reservations in real-time.

---

## ✨ Key Features

*   **Premium UI/UX**: Built with **Tailwind CSS** using a modern, minimalist design system.
*   **Feature-Based**: Modular architecture mirroring the API for consistent development.
*   **Real-Time Feedback**: Instant loading states (Skeletons) and error handling via **TanStack Query**.
*   **Responsive Design**: Fully optimized mobile-first navigation and layout.
*   **Smart Auth**: persistent session management with automatic redirects.

## 🛠️ Tech Stack

*   **Core**: React 19 + Vite
*   **State Management**: TanStack Query (React Query)
*   **Routing**: React Router v7
*   **Styling**: Tailwind CSS v4 + Lucide React Icons
*   **HTTP Client**: Axios with Interceptors

## ⚡ Getting Started

### Prerequisites
*   Node.js v18+
*   npm or yarn
*   Running instance of CoPark API (on port 3000 recommended)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/copark.git
    cd copark/copark-web
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    # Points to your local or production API
    VITE_API_URL=http://localhost:3000
    ```

4.  **Run the Application**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:5173`.

## 📂 Project Structure

The project is organized by **Features** to facilitate scalability:

```
src/
├── components/    # Reusable UI Components (Buttons, Navbar)
├── features/      # Logic and Views by Feature
│   ├── auth/      # Login/Register Pages & Context
│   ├── bookings/  # Booking Hooks & History
│   ├── parkings/  # Parking Discovery & Details
│   └── vehicles/  # Vehicle Hooks
├── styles/        # Global CSS & Theme Tokens
└── lib/           # API Configuration (Axios)
```

## 📜 Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Compiles the application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run lint`: Runs ESLint to verify code quality.

---
*Developed by Daniel for CoPark Platform.*
