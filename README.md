# CoPark Web 🚗

> **Modern Frontend for CoPark Parking Management Platform**

A React-based single-page application built with Vite, providing an intuitive interface for users to discover parking spots, manage reservations, and interact with the CoPark platform.

---

## ✨ Features

- **Modern UI/UX** - Clean, minimalist design with Tailwind CSS
- **Feature-Based Architecture** - Modular structure matching the API
- **Real-Time State Management** - TanStack Query for server state
- **Responsive Design** - Mobile-first, fully responsive layout
- **Form Validation** - Client-side validation with error feedback
- **Protected Routes** - Authentication-based route protection

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Icons**: Lucide React

## ⚡ Quick Start

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Running CoPark API instance

### Installation

1. **Clone and navigate**
   ```bash
   git clone https://github.com/your-username/copark.git
   cd copark/copark-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── app/             # App configuration and routes
│   └── routes/      # Route definitions
├── components/      # Reusable UI components
│   ├── layout/      # Layout components (Navbar, MainLayout)
│   └── ui/          # UI primitives (Button, etc.)
├── features/        # Feature modules
│   ├── auth/        # Authentication (login, register, context)
│   ├── bookings/    # Booking management
│   ├── parkings/    # Parking discovery and details
│   └── vehicles/    # Vehicle management
├── lib/             # Utilities and configurations
│   ├── api.js       # Axios instance and interceptors
│   └── utils.js     # Helper functions
├── pages/           # Page components
├── styles/          # Global styles and theme
├── App.jsx          # Root component
└── main.jsx         # Application entry point
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Pages

- `/` - Home page
- `/login` - User login
- `/register` - User registration
- `/parkings` - Browse parking listings
- `/parkings/:id` - Parking details and booking
- `/dashboard` - User dashboard (protected)

## 🔐 Authentication

The app uses JWT tokens stored in localStorage. The authentication state is managed through React Context (`AuthContext`).

Protected routes automatically redirect unauthenticated users to the login page.

## 🎯 Key Features

### State Management
- **Server State**: TanStack Query handles API calls, caching, and loading states
- **Client State**: React Context for authentication state
- **Form State**: Local component state with validation

### API Integration
- Centralized Axios instance with interceptors
- Automatic token injection in requests
- Automatic logout on 401 responses

### Form Validation
- Client-side validation for login and registration
- Real-time error feedback
- Visual error indicators

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL | Yes |

## 🚀 Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

---

*Built with ❤️ for CoPark Platform*
