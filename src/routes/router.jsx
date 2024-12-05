import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/campaign",
    element: <h2>Campaign page</h2>,
  },
  {
    path: "/auth",
    element: <h2>Login here</h2>,
  },
  {
    path: "*",
    element: <h2>Wrong Road!</h2>,
  },
]);

export default router;
