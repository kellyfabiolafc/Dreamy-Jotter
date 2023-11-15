import {DashboardPage,EditNotePage,ForgotPasswordPage , LoginPage , RegisterPage} from "../pages"
import { Route, Routes, BrowserRouter as Router, Navigate, BrowserRouter } from "react-router-dom";
import ProtectRoute from "../components/ProtectRoute";
// import Loader from "./components/Loader.jsx"
import { UserAuth  } from "../context/AuthContext"
function MyRoutes() {
    const {user}=UserAuth();
    const RequireAuth = ({children}) =>{
        return user?children:<Navigate to={"/"}/>;
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>    
        <Route  path="/register" element={<RegisterPage/>}/>    
        <Route path="/dashboard" element={ <ProtectRoute><DashboardPage /></ProtectRoute>} />
        <Route path="/edit-note/:id" element={<EditNotePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />  {/* Nueva ruta */}
        <Route
          path="*"
          element={
            user ? (
              // Si el usuario está autenticado, redirige al dashboard
              <Navigate to="/dashboard" />
            ) : (
              // Si el usuario no está autenticado, redirige al login
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;