import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
    ],
  },
  {
    path: "/allCampaigns",
    element: <AllCampaign></AllCampaign>,
  },
  {
    path: "/addCampaign",
    element: <AddCampaign></AddCampaign>,
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
    path: "*",
    element: <h2>Wrong Road!</h2>,
  },
]);

export default router;
