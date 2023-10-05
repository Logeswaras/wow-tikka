import { Image, Col, Row, Container } from "react-bootstrap";

//custom components
import BaseButton from "../../../common/components/controls/BaseButton";

const Banner:React.FC = () => {
  const banner = "banner-img";
  return (
    <>
      <Container className="background-image" fluid>
        <Row className="justify-content-center">
          <Col md={8} lg={8} xl={11} xxl={12} className="text-center mt-4">
            <Image
              src={require(`../../../assets/Home/${banner}.svg`)}
              fluid
              className="banner-img"
            />
          </Col>
          <div className="text-center my-4">
            <BaseButton
              types="button"
              defaultClass="px-4 rounded-1"
              variant="outline-light"
              name="Order Online"
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
