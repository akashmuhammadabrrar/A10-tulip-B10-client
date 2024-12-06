import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import MainLayout from "../layouts/MainLayout";
import Details from "../pages/Details";

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
        element: <AddCampaign></AddCampaign>,
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
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },

  {
    path: "*",
    element: <h2>Wrong Road!</h2>,
  },
]);

export default router;
