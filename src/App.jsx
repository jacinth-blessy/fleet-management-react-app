import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path = "/admin" element = {<ProtectedRoute isAuthenticated={isAuthenticated}><AdminDashboard />
      </ProtectedRoute>} />
      <Route path = "*" element = {<Navigate to = "/login" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;