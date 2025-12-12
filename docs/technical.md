# Technical Documentation - CoPark Web

## Overview
CoPark Web is the user interface for the "CoPark" parking reservation platform. It is built as a modern Single Page Application (SPA), focused on speed, usability, and a premium visual design.

## Core Technologies

*   **Core:** React 19 (Hooks, Functional Components)
*   **Build System:** Vite 7 (Hot Module Replacement, Fast Builds)
*   **Styling:** Tailwind CSS v4 (Utility-first CSS)
*   **Routing:** React Router v7
*   **State Management (Server State):** TanStack Query v5
*   **HTTP Client:** Axios
*   **Form Management:** React Hook Form (if applicable) / Local State
*   **Icons:** Lucide React

## Project Structure

The project follows a **Feature-based** architecture, allowing the code to scale while keeping it organized.

```
src/
├── app/                 # Global app configuration
│   └── routes/          # Route definitions and protections (AppRouter, ProtectedRoute)
├── components/          # Shared reusable components
│   ├── layout/          # Main layouts (MainLayout, AuthLayout)
│   └── ui/              # Atomic UI components (Button, Input, Card)
├── features/            # Main business modules
│   ├── auth/            # Authentication (Login, Register, Context)
│   ├── bookings/        # Booking management
│   └── parkings/        # Parking exploration and management
├── lib/                 # External library configurations (axios, etc.)
├── pages/               # High-level pages (HomePage, NotFound)
└── styles/              # Global styles (index.css, theme)
```

## Main Modules (Features)

### 1. Auth (`features/auth`)
Handles everything related to user identity.
*   **Context:** `AuthContext` provides the current user and `login`/`logout` methods to the entire app.
*   **Storage:** The JWT token is stored in `localStorage` for basic persistence.
*   **Security:** Axios interceptors automatically inject the token into every request.

### 2. Parkings (`features/parkings`)
The core of the user experience.
*   **Dashboard:** Main view for the logged-in user.
*   **Explore:** Map or list to search for available parking spots.
*   **Detail:** Individual view of a parking spot.

### 3. Bookings (`features/bookings`)
Management of the booking lifecycle.
*   **Services:** Communication layer with the API to create and list bookings.
*   **Hooks:** Custom hooks (e.g., `useBookings`) that encapsulate React Query for handling loading and error states.

## Configuration and Environment Variables

The project uses `.env` for configuration. Variables must start with `VITE_` to be exposed to the client.

| Variable | Description |
| :--- | :--- |
| `VITE_API_URL` | Base URL of the backend API (e.g., `http://localhost:3001` or production URL). |

## Style Guide and Theme

The design uses a system of native CSS variables combined with Tailwind to support themes (Dark/Light) and maintain consistency.

*   **Color Palette:** Defined in `src/index.css` under `:root`.
*   **Typography:** Modern sans-serif fonts for a clean look.
*   **UI Components:** The components in `src/components/ui` are the source of truth for buttons, inputs, etc., ensuring the entire app looks coherent.

## State and Data Fetching

**TanStack Query** is used for asynchronous state management (server data). This offers advantages such as:
*   Automatic caching.
*   Background revalidation.
*   Simplified handling of `isLoading` and `isError` states.

## Deployment

The project is static after the build, so it can be deployed on any static hosting service (Vercel, Netlify, Render Static Site).

Build command:
```bash
npm run build
```
This generates the `dist/` folder optimized for production.
