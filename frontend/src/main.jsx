import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Dashboard from "./Dashboard/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute.jsx";
import ProtectedLogin from "./ProtectedRoutes/protectedLogin.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedLogin>
                  <Login />
                </ProtectedLogin>
                } 
                />

            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
              }
              />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
