import { Outlet } from "react-router-dom";

import NavBar from "../../common/components/layout/NavBar";
import SearchBar from "../../common/components/layout/SearchBar";
import StickyHeader from "../../common/components/layout/StickyHeader";

const Home = () => {
  return (
    <div className="mb-5">
      <StickyHeader />
      <NavBar />
      <SearchBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
