import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UpdateUser from "../components/UpdateUser/UpdateUser";
import Users from "../components/Users/Users";
import MainLayouts from "../Layouts/MainLayouts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:4545/users"),
      },
      {
        path: "/users/updateUser/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:4545/users/updateUser/${params.id}`),
      },
      {
        path: "/blank",
        element: (
          <div className="w-full h-screen flex justify-center items-center text-4xl font-semibold">
            Coming soon.....
          </div>
        ),
      },
      {
        path: "/login",
        element: (
          <div className="w-full h-screen flex justify-center items-center text-4xl font-semibold">
            Login Functionality coming soon.....
          </div>
        ),
      },
      {
        path: "/register",
        element: (
          <div className="w-full h-screen flex justify-center items-center text-4xl font-semibold">
            Registration Functionality coming soon.....
          </div>
        ),
      },
    ],
  },
]);

export default routes;
