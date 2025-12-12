# CoPark Web - Technical Overview 💻

## 1. Architecture: Feature-Based
We structure the app by **domain features** rather than technical layers.

```
src/features/
├── auth/       # Login, Register, AuthContext
├── bookings/   # Booking logic, hooks, service
└── parkings/   # Dashboard, Explore, Details
```

This ensures that if we remove a feature (e.g., "Bookings"), we just delete one folder.

## 2. State Management Strategy
*   **Server State**: Managed by **TanStack Query (React Query)**.
    *   *Why?* It handles caching, loading states, and deduplication of API requests automatically.
*   **Client State**: Managed by **Context API** (`AuthContext`) for global session data (User, Token).
*   **Form State**: Local `useState` for simple forms.

## 3. Design System
*   **Engine**: Tailwind CSS v4.
*   **Theming**: CSS Variables defined in `global.css` (`--color-primary`, `--font-sans`).
*   **Typography**: Uses **Outfit** (Headings) and **Inter** (Body) via Google Fonts.

## 4. Key Integration Points
*   **`lib/api.js`**: Central Axios instance with Interceptors.
    *   *Request Interceptor*: Injects `Authorization: Bearer <token>` automatically.
    *   *Response Interceptor*: Detects `401 Unauthorized` responses.
*   **Services**: Each feature has a `service` file (e.g., `booking.service.js`) that wraps API calls. **Mocks have been removed** in favor of real endpoints.
