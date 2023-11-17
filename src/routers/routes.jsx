import {
  DashboardPage,
  EditNotePage,
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
} from "../pages";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
import Loader from "../components/Loader";
import { useState,useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
function MyRoutes() {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true); // Estado local para controlar el Loader

  useEffect(() => {
    // Simulamos una breve demora para propósitos de demostración sin load 
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  if (loading) {
    // mostrar el loader mientras que el estado sea verdadero , 
    return <Loader />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <DashboardPage />
            </ProtectRoute>
          }
        />
        <Route path="/edit-note/:id" element={<EditNotePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{" "}
        {/* Nueva ruta */}
        <Route
          path="*"
          element={
            user ? (
              // Si el usuario está autenticado, redirige al dashboard
              <Navigate to="/dashboard" />
            ) : (
              // Si el usuario no está autenticado, redirige al login
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
