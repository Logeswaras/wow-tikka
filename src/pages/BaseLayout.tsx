import { Outlet } from "react-router-dom";
import NavBar from "../common/components/layout/NavBar";
import StickyHeader from "../common/components/layout/StickyHeader";

const BaseLayout = () => {
  return (
    <>
      <div className="">
        <StickyHeader />
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default BaseLayout;
