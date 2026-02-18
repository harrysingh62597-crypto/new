import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const isAuth = localStorage.getItem("auth");
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
