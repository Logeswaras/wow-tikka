import { Outlet, useLocation } from "react-router-dom";

//components
import NavBar from "../common/components/layout/NavBar";
import StickyHeader from "../common/components/layout/StickyHeader";
import SearchBar from "../common/components/layout/SearchBar";

const BaseLayout: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="">
        <StickyHeader />
        <NavBar />
        {(location.pathname === "/" ||
          location.pathname === "/menu-description/:menu") && <SearchBar />}
      </div>
      <Outlet />
    </>
  );
};

export default BaseLayout;
