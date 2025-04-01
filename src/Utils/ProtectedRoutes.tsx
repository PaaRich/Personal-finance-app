import { PropsWithChildren } from "react";
import AuthConsumer from "../context/AuthProvider";
import { Navigate,useLocation} from "react-router-dom";

const ProtectedRoutes = ({children}:PropsWithChildren) => {
    const { user } = AuthConsumer();
    const location = useLocation();
    return user ? children : <Navigate to="/" replace state={{ path: location.pathname }} />;
}

export default ProtectedRoutes