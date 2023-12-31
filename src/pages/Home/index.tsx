import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

//components
import Banner from "./components/Banner";
import OrderOnline from "./components/OrderOnline";
import MenuCustomization from "../Menu/components/MenuCustomization";

//custom components
import BaseButton from "../../common/components/controls/BaseButton";

//store
import { useAppDispatch } from "../../store";
import {
  addToCart,
  handleCardDescription,
} from "../../store/features/orderingSyatemSlice";

//model
import { ProductDataModel } from "../../common/models";

const Home: React.FC = () => {
  const [cardData, setCardData] = useState<Array<ProductDataModel>>([]);
  const [scrollTo, setScrollTo] = useState(false);

  const dispatch = useAppDispatch();
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

  const handleMenuPage = (itemData: ProductDataModel) => {
    dispatch(handleCardDescription(itemData));
    navigate(`/menu-description/${itemData.id}`);
  };

  const middleY = window.innerHeight / 2; // Calculate the middle of the viewport
  window.scrollTo({
    top: middleY,
    behavior: "smooth", // Add smooth scrolling animation
  });

  const handleScroll = () => {
    setScrollTo(true);
  }

  return (
    <>
      <div>
        <Banner buttonClick={handleScroll} />
      </div>
      <div className="px-5">
        <OrderOnline scroll={scrollTo} />
      </div>
      <div className="px-5">
        <div className="mt-5">
          <Row xs={1} md={3} className="g-4">
            {cardData &&
              cardData.map((card, index) => (
                <Col key={index} sm={12} md={6} lg={6} xl={4} xxl={3}>
                  <Card className="mb-5 bg-light border-0 item-card">
                    <Card.Img
                      src={card.image}
                      alt="item-1"
                      className="p-2 card-img"
                      height={200}
                      onClick={() => handleMenuPage(card)}
                    />
                    <Card.Body>
                      <div className="d-md-flex justify-content-between mb-2">
                        <Card.Title>{card.title}</Card.Title>
                        <BaseButton
                          defaultClass="home-customize rounded-1"
                          name="Customize"
                          variant="light"
                          handleClick={handleShow}
                        />
                      </div>

                      <Card.Text>{card.description}</Card.Text>

                      <div className="d-md-flex justify-content-between mb-2">
                        <div className="d-flex">
                          <p className="fw-semibold">${card.price} </p>
                          <p className="fw-light">/{card.calories} Calories</p>
                        </div>

                        <BaseButton
                          defaultClass="border-0 rounded-1 add"
                          variant="success"
                          name="Add To Cart"
                          handleClick={() => dispatch(addToCart(card))}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>

      {showCustomize && <MenuCustomization onClose={handleClose} />}
    </>
  );
};

export default Home;
