import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import Card from "../../common/ui/BaseCard";

interface ProductData {
  image: string;
  title: string;
}

const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Array<ProductData>>([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    await axios
      .get("http://localhost:9000/products")
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleMenuPage = (name: string) => {
    navigate(`/menu-description/${name}`);
  };

  return (
    <>
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
              cardData.map((card, index) => (
                <div
                  className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
                  key={index}
                >
                  <Card
                    image={card.image}
                    title={card.title}
                    handleClick={() => handleMenuPage(card.title)}
                    defaultClass="bg-light border-0 rounded-4 mt-3 mt-lg-0"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
