import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import Card from "../../common/ui/BaseCard";
import SearchBar from "../../common/components/layout/SearchBar";

interface ProductData {
  image: string;
  title: string;
}

const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Array<ProductData>>([]);

  const getProducts = async () => {
    await axios
      .get("http://localhost:9000/products")
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div>
        {/* <SearchBar /> */}
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
                  className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                  key={i}
                >
                  <Card image={card.image} title={card.title} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
