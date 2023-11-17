import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

// Define un componente llamado ProtectRoute que verifica si el usuario está autenticado
function ProtectRoute({ children }) {
  // Obtiene la información de autenticación del contexto
  const { user } = UserAuth();

  // Verifica si el usuario está autenticado
  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de inicio ("/")
    return <Navigate to={"/"} />;
  }

  // Si el usuario está autenticado, permite que los componentes hijos se rendericen
  return children;
}

export default ProtectRoute;
