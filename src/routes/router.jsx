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
import UpdateCampaign from "../pages/UpdateCampaign";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch("http://localhost:5000/campaigns"),
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
        element: (
          <PrivetRoute>
            <MyCampaign></MyCampaign>
          </PrivetRoute>
        ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivetRoute>
            <MyDonation></MyDonation>
          </PrivetRoute>
        ),
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
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivetRoute>
            <UpdateCampaign></UpdateCampaign>
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
    element: <Error></Error>,
  },
]);

export default router;
