import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Qr } from "../components/pages/Qr";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "/qr",
    exact: false,
    children: <Qr />
  },
  {
    path: "*",
    children: <Page404 />
  },
]