import { useEffect, useState } from "react";
import { Badge, Card, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//custom components
import BaseButton from "../../common/components/controls/BaseButton";

//components
import MenuCustomization from "./components/MenuCustomization";
import SearchBar from "../../common/components/layout/SearchBar";

//store
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addToCart,
  removeCustomised,
} from "../../store/features/orderingSyatemSlice";

//models
import { ProductDataModel } from "../../common/models";
import BaseIcon from "../../common/components/ui/BaseIcon";
import { faXmark } from "../../common/icons/Icons";

const MenuDescription: React.FC = () => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [menuData, setMenuData] = useState<ProductDataModel>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selector = useAppSelector(
    (store) => store.orederSystem.menuDescription
  );

  const handleShowToast = (item: ProductDataModel) => {
    dispatch(addToCart(item));
    setShowToast(true);
    setTimeout(() => {
      navigate("/");
    }, 8000);
  };
  const handleCloseToast = () => setShowToast(false);
  const handleShow = () => setShowCustomize(true);
  const handleClose = () => setShowCustomize(false);

  useEffect(() => {
    setMenuData(selector);
  }, [selector]);

  return (
    <>
      {menuData ? (
        <div>
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
                      <h5>$ {menuData.price.toFixed(2)}</h5>
                    </Col>
                    <Col className="mt-2">
                      <h6>{menuData.calories}cal</h6>
                    </Col>
                    <Col>
                      <BaseButton
                        defaultClass="border-0 rounded-1"
                        variant="warning"
                        name="Customize"
                        handleClick={handleShow}
                      />
                    </Col>
                  </Row>
                  <h6 className="mt-3">Customised</h6>
                  {menuData.ingredients.map((item, index) => (
                    <Badge bg="light" text="dark" key={index} className="me-2">
                      {item}
                      <span
                        role="button"
                        className="ms-2"
                        onClick={() => dispatch(removeCustomised(item))}
                      >
                        <BaseIcon icon={faXmark} />
                      </span>
                    </Badge>
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row className="menu-details g-0">
            <Col md={{ span: 4, offset: 2 }}>
              <h5 className="text-capitalize">{menuData.title}</h5>
              <p>Ricebase with carrot mid & onion toppings</p>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="d-flex mt-3">
                <h5 className="mt-2">$ {menuData.price.toFixed(2)}</h5>

                <BaseButton
                  defaultClass="border-0 rounded-1 ms-2"
                  variant="success"
                  name="Add to cart"
                  handleClick={handleShowToast}
                />
              </div>
            </Col>
          </Row>
          <ToastContainer
            position="bottom-end"
            className="position-fixed mb-2 rounded-2"
          >
            <Toast show={showToast} onClose={handleCloseToast}>
              <Toast.Header>
                <strong className="m-auto py-3 fs-6 text-green">
                  Item is added to cart!
                </strong>
              </Toast.Header>
            </Toast>
          </ToastContainer>
        </div>
      ) : (
        <div>loading</div>
      )}

      {showCustomize && <MenuCustomization onClose={handleClose} />}
    </>
  );
};

export default MenuDescription;
