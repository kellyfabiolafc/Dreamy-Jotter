import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../services/fireBaseConfig";

// Crea un contexto de autenticación
const AuthContext = createContext();

// Define un componente llamado AuthContextProvider que proporcionará el contexto de autenticación a sus hijos
const AuthContextProvider = ({ children }) => {
  // Estado local para almacenar la información del usuario
  const [user, setUser] = useState({});

  // Función para iniciar sesión con Google
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };

  // Función para cerrar sesión
  const logOut = () => {
    return signOut(auth);
  };

  const registerWithGmail = (username,email, password ) => {
    return createUserWithEmailAndPassword(auth, username ,email, password);
  };
  // Efecto de efecto secundario que escucha cambios en la autenticación del usuario
  useEffect(() => {
    // Registra un observador en la autenticación para rastrear cambios en el usuario actual
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Limpia el observador cuando el componente se desmonta o cuando cambia la dependencia
    return () => {
      unsubcribe();
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Renderiza el contexto de autenticación y pasa sus valores y funciones como propiedades a los componentes hijos
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user , registerWithGmail }}>
      {children}
    </AuthContext.Provider>
  );
};

// Función que permite a los componentes hijos acceder al contexto de autenticación
const UserAuth = () => {
  return useContext(AuthContext);
};

export { UserAuth, AuthContextProvider };