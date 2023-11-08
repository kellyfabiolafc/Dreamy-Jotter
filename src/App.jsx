
import  LoginPage  from "./pages/LoginPage.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<LoginPage/>}/>    
      </Routes>
    </Router>
  )
}

export default App;