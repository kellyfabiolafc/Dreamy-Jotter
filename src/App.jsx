
import  LoginPage  from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Loader from "./components/Loader.jsx"
function App() {
  return (
    <Router>
       {/* <Loader/> */}
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>    
        <Route  path="/register" element={<RegisterPage/>}/>    
      </Routes>
    </Router>
  )
}

export default App;