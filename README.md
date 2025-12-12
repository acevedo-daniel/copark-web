# CoPark Web 🚗

> **Modern Parking Management Platform** - Frontend Application.

CoPark Web is the client interface for the CoPark platform. Designed to offer a fluid, fast, and visually appealing user experience, allowing users to find, reserve, and manage parking spots with ease.

---

## ✨ Key Features

*   **Premium UI/UX:** Clean and modern interface built with Tailwind CSS, focused on usability.
*   **Real-time Booking:** Optimized booking flow with instant validation.
*   **Session Management:** Secure JWT authentication with automatic session handling.
*   **Personal Dashboard:** Control panel for users to view detailed history of active and past bookings.
*   **Responsive:** Fully adapted for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

This project uses the most modern technologies in the React ecosystem:

*   **React 19** - UI Library.
*   **Vite** - Blazing fast development environment.
*   **Tailwind CSS 4** - Utility-first CSS framework.
*   **TanStack Query** - Asynchronous state management and data caching.
*   **React Router v7** - Dynamic routing.
*   **Axios** - Robust HTTP client.

## 🚀 Getting Started

Follow these steps to run the project in your local environment.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/copark.git
    cd copark/copark-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root of `copark-web` based on the example:
    ```env
    VITE_API_URL=http://localhost:3001
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📦 Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Compiles the application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run lint`: Runs the linter to find code errors.

## 📁 Project Structure

The code is organized by **Features** to facilitate scalability:

*   `src/features/auth`: Login, Registration, and Session Logic.
*   `src/features/parkings`: Parking search and visualization.
*   `src/features/bookings`: Booking creation and listing.
*   `src/components/ui`: Reusable base components (Buttons, Inputs).

---
*Developed by Daniel. Open for collaboration and improvements.*
