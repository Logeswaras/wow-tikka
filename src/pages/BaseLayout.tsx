import { Outlet, useLocation, useParams } from "react-router-dom";
import NavBar from "../common/components/layout/NavBar";
import StickyHeader from "../common/components/layout/StickyHeader";
import SearchBar from "../common/components/layout/SearchBar";

const BaseLayout:React.FC = () => {
  const location = useLocation();
  const { menu } = useParams();

  return (
    <>
      <div className="">
        <StickyHeader />
        <NavBar />
        {(location.pathname === "/" || menu === "bowl") && <SearchBar />}
      </div>
      <Outlet />
    </>
  );
};

export default BaseLayout;
