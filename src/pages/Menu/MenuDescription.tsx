import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MenuDescription = () => {
  const { menu } = useParams();

  const menuImage = "menu1";

  const ingredients = ["Rice", "Corn", "Onion", "Chicken Balls"];

  return (
    <>
      <Card className="ms-5 mt-5 mb-3" style={{ width: "83%" }}>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Card.Img
                src={require(`../../assets/Home/Menu/${menuImage}.svg`)}
              />
            </Col>
            <Col md={1}>
                <div className="vertical-line"></div>
            </Col>
            <Col md={7} className="my-3">
              <Card.Title>Rice Bowls</Card.Title>
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
                  <Button variant="warning" className="text-white">
                    Customize
                  </Button>
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
      <Row className="pb-1 pt-3 menu-details">
        <Col md={{ span: 4, offset: 2 }}>
          <h5>Rice bowls</h5>
          <p>Ricebase with carrot mid & onion toppings</p>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <div className="d-flex mt-3">
            <h5 className="mt-2">$ 45.00</h5>
            <Button variant="success" className="text-white ms-3">
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MenuDescription;
