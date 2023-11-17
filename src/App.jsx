import MyRoutes from "./routers/routes";
import { AuthContextProvider } from "/src/context/AuthContext.jsx";

function App() {
  // const {user,logOut}= UserAuth
  
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
