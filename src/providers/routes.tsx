import React from "react";

//componetns
const BaseLayout = React.lazy(() => import("../pages/BaseLayout"));
const Home = React.lazy(() => import("../pages/Home/index"));
const MenuDescription = React.lazy(
  () => import("../pages/Menu/MenuDescription")
);
const Cart = React.lazy(() => import("../pages/Cart/Index"));
const Delivery = React.lazy(() => import("../pages/Delivery/Index"));
const Address = React.lazy(() => import("../pages/Address/Index"));
const Payment = React.lazy(() => import("../pages/Payment/Index"));


//route config
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
        element: <MenuDescription />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/address",
        element: <Address />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
];

export default routes;
