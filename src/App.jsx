import "./App.css";
import  HomePage  from "./pages/HomePage.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage/>}/>    
      </Routes>
    </Router>
  )
}

export default App;