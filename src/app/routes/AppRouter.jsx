import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "../../components/layout/MainLayout";
import { HomePage } from "../../pages/HomePage";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { DashboardPage } from "../../features/parkings/pages/DashboardPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { ExplorePage } from "../../features/parkings/pages/ExplorePage";
import { ParkingDetailPage } from "../../features/parkings/pages/ParkingDetailPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Rutas dentro del Layout Principal (tienen Navbar) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />{" "}
            </ProtectedRoute>
          }
        />
        {/* Agrega esta ruta temporal para ver el listado público */}
        <Route path="/parkings" element={<ExplorePage />} />
        <Route path="/parkings/:id" element={<ParkingDetailPage />} />
      </Route>

      {/* Rutas "Standalone" (sin Navbar, pantalla completa) */}
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
