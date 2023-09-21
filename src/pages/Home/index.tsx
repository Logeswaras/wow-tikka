import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import Card from "../../common/ui/Card";
import axios from "axios";

import SearchBar from "../../common/components/layout/SearchBar";
interface ProductData {
  image: string;
  title: string;
}

const Home = () => {
  const [cardData, setCardData] = useState<Array<ProductData>>([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/products")
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="mb-5">
      <SearchBar />
      <div>
        <Banner />
      </div>
      <div className="px-5">
        <OrderOnline />
      </div>
      <div className="px-5">
        <div className="mt-5">
          <div className="row">
            {cardData &&
              cardData.map((card, i) => (
                <div
                  className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  key={i}
                >
                  <Card image={card.image} title={card.title} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
