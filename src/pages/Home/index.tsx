import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import BaseButton from "../../common/components/controls/BaseButton";
import BaseIcon from "../../common/components/ui/BaseIcon";
import { faCirclePlus } from "../../common/icons/Icons";
import MenuCustomization from "../Menu/components/MenuCustomization";
// import Card from "../../common/ui/BaseCard";

interface ProductData {
  image: string;
  title: string;
  price: string;
  calories: string;
  persons: string;
}

const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Array<ProductData>>([]);
  const navigate = useNavigate();

  const [showCustomize, setShowCustomize] = useState(false);

  const handleShow = () => setShowCustomize(true);
  const handleClose = () => setShowCustomize(false);

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
          <Row xs={1} md={2} className="g-4">
            {cardData &&
              cardData.map((card, index) => (
                <Col key={index} md={6} lg={4} xl={4} xxl={3}>
                  <Card
                    className="bg-light border-0 rounded-4 card-style"
                    onClick={() => handleMenuPage(card.title)}
                  >
                    <Row className="d-flex align-items-center">
                      <Col>
                        <Card.Body>
                          <Card.Text>
                            <p className="fw-bold">{card.title}</p>
                            <p className="text-secondary">
                              {card.calories} Calories
                            </p>
                            <p className="text-secondary">
                              {card.persons} Persons
                            </p>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col md={7}>
                        <Card.Img
                          src={require(`../../assets/Home/${card.image}.svg`)}
                          alt="item-1"
                          className="p-2 card-img"
                          height={150}
                        />
                      </Col>
                      <div className="ms-3 d-flex align-items-center">
                        <p className="price fw-semibold mt-3">{card.price}</p>
                        <BaseIcon
                          icon={faCirclePlus}
                          classes="ms-3 text-warning"
                        />
                        <BaseButton
                          defaultClass="ms-3  btn-sm customize-button border-0"
                          name="Customize"
                          handleClick={handleShow}
                        />
                      </div>
                    </Row>
                  </Card>
                </Col>
              ))}
          </Row>
          {/* <div className="row">
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
<<<<<<< HEAD
                    defaultClass="bg-light border-0 rounded-4 mt-3 mt-lg-0"
=======
                    defaultClass="bg-light border-0 rounded-4 card-style"
>>>>>>> a0cec7043aeadd6f4864293c62f6e5d9a070179d
                  />
                </div>
              ))}
          </div> */}
        </div>
      </div>

      {showCustomize && <MenuCustomization onClose={handleClose} />}
    </>
  );
};

export default Home;
