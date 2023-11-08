
import  LoginPage  from "./pages/LoginPage.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Loader from "./components/Loader.jsx"
function App() {
  return (
    <Router>
       <Loader/> {/* Añade el componente de carga aquí */}
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>    
      </Routes>
    </Router>
  )
}

export default App;