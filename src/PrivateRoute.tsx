import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./Store/auth";
import SideBar from "./Components/Layout/SideBar";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return (
      <div className="flex h-screen">
        <SideBar />
        <div className=" flex-grow">
          {" "}
          <Outlet />
        </div>
      </div>
    );
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
