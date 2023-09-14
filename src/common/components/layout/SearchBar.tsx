import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../controls/BaseButton";
import BaseInput from "../controls/BaseInput";
import { Col, Container, Row } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row noGutters>
        <Col md={10} sm={12}>
          <div className="search-input">
            <BaseInput
              name="search"
              type="text"
              placeholder="Please select your location"
              inputIcon={faLocationDot}
              size="d-sm-block"
            />
          </div>
        </Col>
        <Col md={2} sm={12}>
          <div className="search-button">
            <BaseButton
              defaultClass="btn-success"
              name="Search"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
