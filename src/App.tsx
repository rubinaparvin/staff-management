import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Staff from "./Pages/Staff";
import Login from "./Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Pages/DashBoard";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={"/app/staff"} />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "app",
      element: <PrivateRoute />,
      children: [
        {
          path: "staff",
          element: <Staff />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
};

export default App;
