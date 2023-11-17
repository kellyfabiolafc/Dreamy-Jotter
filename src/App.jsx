import MyRoutes from "./routers/routes";
import { AuthContextProvider } from "/src/context/AuthContext.jsx";
import Loader from "./components/Loader";
import { useState,useEffect } from "react";
function App() {
  // const {user,logOut}= UserAuth
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una breve demora para propósitos de demostración
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Puedes ajustar la duración de la simulación según tus necesidades
  }, []);

  if (loading) {
    // Muestra el Loader mientras se carga la página
    return <Loader />;
  }
  return (
    <>
      {" "}
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
