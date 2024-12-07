import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import MainLayout from "../layouts/MainLayout";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivetRoute from "./PrivetRoute";
import { auth } from "../firebase/firebase.init";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("http://localhost:5000/runningCampaign"),
      },
      {
        path: "/addCampaign",
        element: (
          <PrivetRoute>
            <AddCampaign></AddCampaign>
          </PrivetRoute>
        ),
      },
      {
        path: "/campaigns",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/myDonation",
        element: <MyDonation></MyDonation>,
        loader: () =>
          fetch(`http://localhost:5000/myDonate/${auth?.currentUser?.email}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "*",
    element: <h2>Wrong Road!</h2>,
  },
]);

export default router;
