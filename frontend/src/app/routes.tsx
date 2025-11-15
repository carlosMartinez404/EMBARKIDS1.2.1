
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../feactures/auth/pages/LoginPage"
import { ProtectedRoute } from "../shared/components/ProtectedRoute"
import { DashboardPage } from "../feactures/dashboard/pages/dashboard.page"
// import { DashboardPage } from "./feactures/dashboard/pages/DashboardPage"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta raíz redirige a login */}
                <Route path="/" element={<Navigate to="/login" replace />} />
                
                {/* Rutas públicas */}
                <Route path="/login" element={<LoginPage />} />
                
                {/* Rutas protegidas */}
                <Route 
                    path="/dashboard"  
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                    />
      

        

                {/* 404 */}
                <Route path="*" element={<div>404 - Página no encontrada</div>} />
            </Routes>
        </BrowserRouter>
    )
}