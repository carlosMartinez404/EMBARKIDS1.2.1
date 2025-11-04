import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "../feactures/auth/pages/LoginPage"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}/> 
            </Routes>
        </BrowserRouter>
    )
}