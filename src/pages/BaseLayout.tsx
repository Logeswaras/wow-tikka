import { Outlet } from "react-router-dom";
import NavBar from "../common/components/layout/NavBar";

const BaseLayout = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default BaseLayout;
