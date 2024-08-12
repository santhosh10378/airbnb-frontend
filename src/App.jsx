import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Messages from "./pages/Messages";
import Trips from "./pages/Trips";
import Wishlists from "./pages/Wishlists";
import MyProperties from "./pages/MyProperties";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/properties/:id",
          element: <PropertyDetails />,
        },
        {
          path: "/account/messages",
          element: <ProtectedRoute element={<Messages />} />,
        },
        {
          path: "/account/trips",
          element: <ProtectedRoute element={<Trips />} />,
        },
        {
          path: "/account/wishlists",
          element: <ProtectedRoute element={<Wishlists />} />,
        },
        {
          path: "/account/properties",
          element: <ProtectedRoute element={<MyProperties />} />,
        },
        {
          path: "/account/profile",
          element: <ProtectedRoute element={<Profile />} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
