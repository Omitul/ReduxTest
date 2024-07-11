import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Register } from "../pages/Register";
import Login from "../pages/Login";
import { routeGenerator } from "../utils/routesGenerator";
import { AdminPaths } from "./AdminRoutes";
import { facultyPaths } from "./FacultyRoutes";
import { studentPaths } from "./StudentRoutes";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    // children: [
    //   { path: "about", element: <About></About> },
    //   { path: "contact", element: <Contact></Contact> },
    // ],testing er jnno disilam re bhai
  },
  {
    path: "/superAdmin",
    element: (
      <ProtectedRoute>
        <App></App>
      </ProtectedRoute>
    ),

    children: routeGenerator(AdminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,

    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,

    children: routeGenerator(studentPaths),
  },

  { path: "/register", element: <Register></Register> },
  { path: "/login", element: <Login></Login> },
]);

export default router;
