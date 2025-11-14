import { AppRoutes } from './routes'
import { AuthProvider } from '../feactures/auth/hooks/use.Auth'

export function App(){ 
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}