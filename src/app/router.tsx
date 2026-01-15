import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AccountPage from "../pages/AccountPage";
import HarmonyRoomPage from "../pages/HarmonyRoomPage";
import KeywordPage from "../pages/KeywordPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AccountPage /> },
      { path: "keywords", element: <KeywordPage /> },
      { path: "harmonyrooms", element: <HarmonyRoomPage /> },
      { path: "calender", element: <HarmonyRoomPage /> },
      { path: "QnA", element: <HarmonyRoomPage /> },
      { path: "notice", element: <HarmonyRoomPage /> },
      { path: "userstatistics", element: <HarmonyRoomPage /> },
      { path: "leavestatistics", element: <HarmonyRoomPage /> },
      { path: "server", element: <HarmonyRoomPage /> },
    ],
  },
]);
