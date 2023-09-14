import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import Card from "../../common/ui/Card";
import axios from "axios";

import NavBar from "../../common/components/layout/NavBar";
import SearchBar from "../../common/components/layout/SearchBar";

const index = () => {
  axios.get("");
  return (
    <div className="mb-5">
      <div>
        <NavBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Banner />
      </div>
      <div className="px-5">
        <div>
          <OrderOnline />
        </div>

        <div className="mt-5">
          <div className="row">
            <div className="col-md-4 col-xxl-3">
              <Card image="item-1" title="sauces" />
            </div>
            <div className="col-md-4 col-xxl-3">
              <Card image="item-2" title="sauces" />
            </div>
            <div className="col-md-4 col-xxl-3">
              <Card image="item-3" title="sauces" />
            </div>
            <div className="col-md-4 col-xxl-3">
              <Card image="item-4" title="sauces" />
            </div>
            <div className="col-md-4 col-xxl-3">
              <Card image="item-5" title="sauces" />
            </div>
            <div className="col-md-4 col-xxl-3">
              <Card image="item-6" title="sauces" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
