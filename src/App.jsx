import {DashboardPage,EditNotePage,ForgotPasswordPage , LoginPage , RegisterPage} from "./pages"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Loader from "./components/Loader.jsx"
function App() {
  return (
    <Router>
       {/* <Loader/> */}
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>    
        <Route  path="/register" element={<RegisterPage/>}/>    
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/edit-note/:id" element={<EditNotePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />  {/* Nueva ruta */}
      </Routes>
    </Router>
  )
}

export default App;