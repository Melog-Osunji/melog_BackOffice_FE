import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AccountPage from "../pages/AccountPage";
import HarmonyRoomPage from "../pages/HarmonyRoomPage";
import KeywordPage from "../pages/KeywordPage";
import QnA from "../pages/QnAPage";
import HarmonyRoomDetailPage from "../pages/HarmonyRoomDetailPage";
import CalendarPage from "../pages/CalendarPage";
import LeaveStatisticsPage from "../pages/leaveStatisticsPage";


export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <AccountPage /> },
      { path: "keywords", element: <KeywordPage /> },
      { path: "harmonyrooms", element: <HarmonyRoomPage /> },
      { path: "harmonyrooms/:roomId", element: <HarmonyRoomDetailPage /> },
      { path: "calender", element: <CalendarPage/>},
      { path: "QnA", element: <QnA /> },
      { path: "notice", element: <HarmonyRoomPage /> },
      { path: "userstatistics", element: <HarmonyRoomPage /> },
      { path: "leavestatistics", element: <LeaveStatisticsPage /> },
      { path: "server", element: <HarmonyRoomPage /> },
    ],
  },
]);
