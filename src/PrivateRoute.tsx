import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./Store/auth";
import SideBar from "./Components/Layout/SideBar";

import StaffHeader from "./Components/Layout/Header";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return (
      <div>
        <StaffHeader />
        <div className="flex h-screen  ">
          <SideBar />

          <div className=" flex-grow">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
