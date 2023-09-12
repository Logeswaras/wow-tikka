import React from "react";

//componetns
const Home = React.lazy(() => import("../pages/Home/index"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
