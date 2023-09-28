import { useState } from "react";
import { Badge, Card, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BaseButton from "../../common/components/controls/BaseButton";
import MenuCustomization from "./components/MenuCustomization";
import SearchBar from "../../common/components/layout/SearchBar";

const MenuDescription = () => {
  const { menu } = useParams();
  const [showCustomize, setShowCustomize] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const menuImage = "menu1";

  const ingredients = ["Rice", "Corn", "Onion", "Chicken Balls"];

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const handleCloseToast = () => setShowToast(false);
  const handleShow = () => setShowCustomize(true);
  const handleClose = () => setShowCustomize(false);

  return (
    <>
      <SearchBar />
      <h4 className="d-sm-none text-capitalize title">{menu}</h4>
      <Card className="menu-card">
        <Card.Body>
          <Row>
            <Col md={4} className="custom-image">
              <Card.Img
                src={require(`../../assets/Home/Menu/${menuImage}.svg`)}
              />
            </Col>
            <Col md={1}>
              <div className="vertical-line"></div>
            </Col>
            <Col md={7} className="my-3">
              <Card.Title className="text-capitalize">{menu}</Card.Title>
              <Card.Text>
                Indian salad bowl? Wow! It’s actually amazing and it actually
                works. Relish your salad with Indian Flavour’s and tell everyone
                you know how awesome It is. All the goodness of a salad with
                explosion of desi flavours.
              </Card.Text>
              <Row>
                <Col className="mt-2">
                  <h5>$ 45.00</h5>
                </Col>
                <Col className="mt-2">
                  <h6>150cal</h6>
                </Col>
                <Col>
                  <BaseButton
                    defaultClass="customize-button border-0"
                    name="Customize"
                    handleClick={handleShow}
                  />
                </Col>
              </Row>
              <h6 className="mt-3">Customised</h6>
              {ingredients.map((item, index) => (
                <Badge bg="light" text="dark" key={index} className="me-2">
                  {item}
                </Badge>
              ))}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row className="menu-details">
        <Col md={{ span: 4, offset: 2 }}>
          <h5 className="text-capitalize">{menu}</h5>
          <p>Ricebase with carrot mid & onion toppings</p>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <div className="d-flex mt-3">
            <h5 className="mt-2">$ 45.00</h5>

            <BaseButton
              defaultClass="cart-button border-0"
              name="Add to cart"
              handleClick={handleShowToast}
            />
          </div>
        </Col>
      </Row>
      <ToastContainer position="bottom-center">
        <Toast show={showToast} onClose={handleCloseToast}>
          <Toast.Header>
            <strong className="m-auto py-3 fs-6 text-green">
              Item is added to cart!
            </strong>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      {showCustomize && <MenuCustomization onClose={handleClose} />}
    </>
  );
};

export default MenuDescription;
