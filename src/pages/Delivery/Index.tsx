import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseIcon from "../../common/components/ui/BaseIcon";
import BaseButton from "../../common/components/controls/BaseButton";

//icons
import { faCheck, faTruck, faTruckPickup } from "../../common/icons/Icons";

const Delivery: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState<string>("");

  const navigate = useNavigate();

  const handleSelected = (value: string) => {
    console.log("first");
    setDeliveryType(value);
    console.log(deliveryType);
  };

  const selectedDeliveryType = (
    <div className="d-flex justify-content-end">
      <span className="delivery"></span>
      <div>
        <BaseIcon
          icon={faCheck}
          classes="position-absolute top-0 end-0 text-white mx-2 mt-1"
        />
      </div>
    </div>
  );
  return (
    <>
      <Row className="px-5 mt-3 mb-2 g-0">
        <Col lg="8">
          <div className="row g-0 justify-content-center justify-content-lg-start">
            <div
              className="col-12 col-md-4 me-0 me-md-3 p-0 position-relative"
              onClick={() => handleSelected("delivery")}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  deliveryType === "delivery" &&
                  "border-success bg-success-light"
                }`}
              >
                {deliveryType === "delivery" ? (
                  selectedDeliveryType
                ) : (
                  <div className="pt-5"></div>
                )}
                <div className="ps-5 pe-5 pb-3 text-muted">
                  <BaseIcon icon={faTruck} classes="fs-1" />
                  <h6 className="mt-2 text-dark">Delivery</h6>
                  <p>8:45 pm GMT</p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 me-0 me-md-3 mt-3 mt-md-0 p-0 position-relative"
              onClick={() => handleSelected("pickup")}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  deliveryType === "pickup" && "border-success bg-success-light"
                }`}
              >
                {deliveryType === "pickup" ? (
                  selectedDeliveryType
                ) : (
                  <div className="pt-5"></div>
                )}
                <div className="ps-5 pe-5 pb-3 text-muted">
                  <BaseIcon icon={faTruckPickup} classes="fs-1" />
                  <h6 className="mt-2 text-dark">Pickup</h6>
                  <p>8:45 pm GMT</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="4" className="mt-3 mt-lg-0">
          <Card className="m-0">
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tr>
                  <td>
                    <div className="d-md-flex align-items-center justify-content-between text-center text-md-start">
                      <div className="d-md-flex">
                        <img
                          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                          alt="img"
                          className="rounded-2"
                          width={50}
                        />
                        <div className="ms-0 ms-md-2">
                          <h6 className="mb-0">Rice bowls</h6>
                          <span>*1</span>
                        </div>
                      </div>
                      <div className="fw-semibold">$ 45.00</div>
                    </div>
                  </td>
                </tr>
              </Table>
              <div className="border border-1"></div>
              <Card.Text className="mt-2 mb-1 fs-6 text-muted">
                Your order
              </Card.Text>
              <div className="d-md-flex justify-content-between">
                <div className="me-md-2 ">
                  <BaseInput
                    type="text"
                    name="Coupen"
                    placeholder="Apply Coupen"
                    inputBgColor="bg-light"
                  />
                </div>
                <div className="">
                  <Button
                    variant="light"
                    className="cart-apply-btn border mt-2 mt-md-0 w-100"
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Subtotal</h6>
                  <p>$ 45.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Discount</h6>
                  <p>$ 0</p>
                </div>
                <div className="border border-1 my-2"></div>
                <div className="d-flex justify-content-between">
                  <h6 className="text-muted">Grand Total</h6>
                  <p>$ 45.00</p>
                </div>
              </div>
              <BaseButton
                types="button"
                defaultClass="btn-success border-0 w-100"
                name="Continue to payment"
                handleClick={() => navigate("/address")}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Delivery;
