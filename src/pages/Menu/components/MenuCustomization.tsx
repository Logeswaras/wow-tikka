import React, { useState } from "react";
import { Card, Col, Offcanvas, Row } from "react-bootstrap";
import { useAppDispatch } from "../../../store";
import { addCustomised } from "../../../store/features/orderingSyatemSlice";
import { AddCustomised } from "../../../store/features/models";
import { AddCustomisedModel } from "../models";

interface IProps {
  onClose: any;
}

const MenuCustomization: React.FC<IProps> = ({ onClose }) => {
  const [show, setShow] = useState(true);

  const dispatch = useAppDispatch();

  const baseLayer = [
    { name: "Rice 1", price: 20, image: "menu1" },
    { name: "Rice 2", price: 25, image: "menu1" },
    { name: "Rice 3", price: 30, image: "menu1" },
    { name: "Rice 4", price: 35, image: "menu1" },
  ];

  const fillingLayer = [
    { name: "Lamba", price: 20, image: "menu1" },
    { name: "MeatBalls", price: 25, image: "menu1" },
    { name: "Chicken", price: 30, image: "menu1" },
    { name: "Paneer", price: 35, image: "menu1" },
  ];

  const handleClose = () => {
    setShow(false);
    onClose("close");
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offcanvas.Title className="mb-2">Base Layer</Offcanvas.Title>
          <Row xs={1} md={2} className="g-4">
            {baseLayer.map((base, index) => (
              <Col key={index} onClick={() => dispatch(addCustomised(base))}>
                <Card>
                  <div className="d-flex align-items-center">
                    <div>
                      <Card.Img
                        src={require(`../../../assets/Home/Menu/${base.image}.svg`)}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Text className="mb-0">{base.name}</Card.Text>
                        <Card.Text className="fw-semibold">
                          $ {base.price}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
                {/* <Card>
                  <Row className="d-flex align-items-center">
                    <Col>
                      <Card.Img
                        src={require(`../../../assets/Home/Menu/${base.image}.svg`)}
                      />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Text>
                          <p>{base.name}</p>
                          <p>{base.price}</p>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card> */}
              </Col>
            ))}
          </Row>

          <h5 className="my-3">First Filling</h5>
          <Row xs={1} md={2} className="g-4">
            {fillingLayer.map((base: AddCustomisedModel, index) => (
              <Col key={index} onClick={() => dispatch(addCustomised(base))}>
                <Card>
                  <div className="d-flex align-items-center">
                    <div>
                      <Card.Img
                        src={require(`../../../assets/Home/Menu/${base.image}.svg`)}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Text className="mb-0">{base.name}</Card.Text>
                        <Card.Text className="fw-semibold">
                          $ {base.price}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuCustomization;
