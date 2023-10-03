import { Col, Container, Row } from "react-bootstrap";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../controls/BaseButton";
import BaseInput from "../controls/BaseInput";

const SearchBar = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col md={10} sm={12}>
          <div className="search-input">
            <BaseInput
              name="search"
              type="text"
              placeholder="Please select your location"
              inputIcon={faLocationDot}
              size="d-sm-block"
              inputBgColor="bg-light"
              inputClass="rounded-1"
              iconClass="ms-2"
            />
          </div>
        </Col>
        <Col md={2} sm={12}>
          <div className="search-button">
            <BaseButton defaultClass="btn-success rounded-1" name="Search" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
