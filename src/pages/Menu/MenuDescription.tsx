import { useState } from "react";
import { Badge, Card, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BaseButton from "../../common/components/controls/BaseButton";
import MenuCustomization from "./components/MenuCustomization";
import SearchBar from "../../common/components/layout/SearchBar";
import { useAppDispatch, useAppSelector } from "../../store";
import { addToCart } from "../../store/features/orderingSyatemSlice";
import { ProductDataModel } from "../../common/models";

const MenuDescription = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { menu } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const menuData = useAppSelector(
    (store) => store.orederSystem.menuDescription
  );

  const handleShowToast = (item: ProductDataModel) => {
    dispatch(addToCart(item));
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
      <h4 className="d-sm-none text-capitalize title">{menuData.title}</h4>
      <Card className="menu-card">
        <Card.Body>
          <Row>
            <Col md={4} className="custom-image">
              <Card.Img src={menuData.image} height={300} />
            </Col>
            <Col md={1}>
              <div className="vertical-line"></div>
            </Col>
            <Col md={7} className="my-3">
              <Card.Title className="text-capitalize">
                {menuData.title}
              </Card.Title>
              <Card.Text>{menuData.description}</Card.Text>
              <Row>
                <Col className="mt-2">
                  <h5>$ {menuData.price}</h5>
                </Col>
                <Col className="mt-2">
                  <h6>{menuData.calories}cal</h6>
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
              {menuData.ingredients.map((item, index) => (
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
          <h5 className="text-capitalize">{menuData.title}</h5>
          <p>Ricebase with carrot mid & onion toppings</p>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <div className="d-flex mt-3">
            <h5 className="mt-2">$ {menuData.price}</h5>

            <BaseButton
              defaultClass="cart-button border-0"
              name="Add to cart"
              handleClick={() => handleShowToast(menuData)}
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
