import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import EntrancePage from "../pages/EntrancePage";
import Register from "../components/form/Register";
import Login from "../components/form/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "entrance/*",
        element: <EntrancePage />,
        children: [
          {
            index: true,
            path: "login",
            element: <Login />,
          },

          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);

export { router };
