import React from "react";

//componetns
const Home = React.lazy(() => import("../pages/Home/index"));
const MenuDescription = React.lazy(() => import("../pages/Home/components/MenuDescription"));
const HomePage = React.lazy(() => import("../pages/Home/components/HomePage"));

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "menu-description",
        element: <MenuDescription />,
      }
    ]
  },
];

export default routes;
