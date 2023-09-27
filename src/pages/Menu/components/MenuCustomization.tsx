import React, { useState } from "react";
import { Card, Col, Offcanvas, Row } from "react-bootstrap";

interface IProps {
  onClose: any;
}

const MenuCustomization: React.FC<IProps> = ({ onClose }) => {
  const [show, setShow] = useState(true);

  const baseLayer = [
    { name: "Rice", price: "$20", image: "menu1" },
    { name: "Rice", price: "$20", image: "menu1" },
    { name: "Rice", price: "$20", image: "menu1" },
    { name: "Rice", price: "$20", image: "menu1" },
  ];

  const fillingLayer = [
    { name: "Lamba", price: "$20", image: "menu1" },
    { name: "MeatBalls", price: "$20", image: "menu1" },
    { name: "Chicken", price: "$20", image: "menu1" },
    { name: "Paneer", price: "$20", image: "menu1" },
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
              <Col key={index}>
                <Card>
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
                </Card>
              </Col>
            ))}
          </Row>

          <h5 className="my-3">First Filling</h5>
          <Row xs={1} md={2} className="g-4">
            {fillingLayer.map((base, index) => (
              <Col key={index}>
                <Card>
                  <Row className="d-flex align-items-center">
                    <Col>
                      <Card.Img
                        src={require(`../../../assets/Home/Menu/${base.image}.svg`)}
                      />
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Text>
                          <h5>{base.name}</h5>
                          <h6>{base.price}</h6>
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
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
