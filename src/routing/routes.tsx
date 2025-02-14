import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default router;
