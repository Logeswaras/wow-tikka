import React from "react";

//componetns
const BaseLayout = React.lazy(() => import("../pages/BaseLayout"));
const Home = React.lazy(() => import("../pages/Home/index"));
const MenuDescription = React.lazy(() => import("../pages/Menu/MenuDescription"));
const Cart = React.lazy(() => import("../pages/Cart/Index"));

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu-description/:menu",
        element: <MenuDescription />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
