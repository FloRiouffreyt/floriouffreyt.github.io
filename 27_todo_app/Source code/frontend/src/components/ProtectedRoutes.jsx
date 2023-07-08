import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({LoggedIn, children}) => {
    if (!LoggedIn) {
        return <Navigate to='/user/login' replace />
    }
    return children
}

export default ProtectedRoutes