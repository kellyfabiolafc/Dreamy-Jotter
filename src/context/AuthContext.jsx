import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../services/fireBaseConfig";

// Crea un contexto de autenticación
const AuthContext = createContext();

// Define un componente llamado AuthContextProvider que proporcionará el contexto de autenticación a sus hijos
const AuthContextProvider = ({ children }) => {
  // Estado local para almacenar la información del usuario
  const [user, setUser] = useState({});
  const userId = user.uid;
  // Función para iniciar sesión con Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Función para cerrar sesión
  const logOut = () => {
    return signOut(auth);
  };

  // Efecto de efecto secundario que escucha cambios en la autenticación del usuario
  // Efecto de efecto secundario que escucha cambios en la autenticación del usuario
  useEffect(() => {
    // Registra un observador en la autenticación para rastrear cambios en el usuario actual
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Si hay un usuario autenticado, establece el estado del usuario incluyendo su ID
        setUser({
          ...currentUser,
          uid: currentUser.uid // Añadir el UID directamente al objeto del usuario
        });
      } else {
        // Si no hay usuario autenticado, establece el usuario como vacío
        setUser({});
      }
    });

    // Limpia el observador cuando el componente se desmonta o cuando cambia la dependencia
    return () => {
      unsubscribe();
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Renderiza el contexto de autenticación y pasa sus valores y funciones como propiedades a los componentes hijos
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Función que permite a los componentes hijos acceder al contexto de autenticación
const UserAuth = () => {
  return useContext(AuthContext);
};

export { UserAuth, AuthContextProvider };
