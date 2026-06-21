import { useRoutes, createBrowserRouter } from "react-router-dom";

import { MainLayout, AdminLayout, AuthLayout } from "../layout";

import ProtectedRoute from "../components/protected/ProtectedRoute";

import {
  Home,
  About,
  AllNotes,
  SingleNote,
  PrivacyPolicy,
  Terms,
  NotFound,
  Login,
  Dashboard,
  ManageNotes,
  CreateNote,
  EditNote,
} from "../pages"
import App from "./App";

const routes = [
  {
    element: <App/>,
    children:[
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notes",
        element: <AllNotes />,
      },
      {
        path: "/notes/:slug",
        element: <SingleNote />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },


  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <Dashboard />,
          },
          {
            path: "/admin/notes",
            element: <AllNotes />,
          },
          {
            path: "/admin/create",
            element: <CreateNote />,
          },
          {
            path: "/admin/edit/:slug",
            element: <EditNote />,
          },
        ],
      },
    ],
  },
]
}
];

export const router = createBrowserRouter(routes);

function AppRoutes() {
  const routing = useRoutes(routes);
  return routing;
}

export default AppRoutes;