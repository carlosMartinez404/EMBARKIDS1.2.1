
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../feactures/auth/pages/LoginPage"
import { ProtectedRoute } from "../shared/components/ProtectedRoute"
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
                            <div style={{ padding: '20px' }}>
                                <h1>Dashboard</h1>
                                <p>¡Bienvenido! Has iniciado sesión correctamente.</p>
                            </div>
                        </ProtectedRoute>
                    }
                />

                {/* 404 */}
                <Route path="*" element={<div>404 - Página no encontrada</div>} />
            </Routes>
        </BrowserRouter>
    )
}