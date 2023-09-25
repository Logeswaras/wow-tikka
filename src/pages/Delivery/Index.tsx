import React, { useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseIcon from "../../common/components/ui/BaseIcon";
import { faCheck, faTruck, faTruckPickup } from "../../common/icons/Icons";

const Delivery: React.FC = () => {
  const [deliveryType, setDeliveryType] = useState<string>("");

  const handleSelected = (value: string) => {
    console.log("first");
    setDeliveryType(value);
    console.log(deliveryType);
  };

  const selectedDeliveryType = (
    <div className="d-flex justify-content-end">
      <span className="delivery"></span>
      <div className="">
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
          <div className="row">
            <div
              className="col-4 me-3 p-0 position-relative"
              onClick={() => handleSelected("delivery")}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  deliveryType === "delivery" && "border-success"
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
              className="col-4 me-3 p-0 position-relative"
              onClick={() => handleSelected("pickup")}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  deliveryType === "pickup" && "border-success"
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
        <Col lg="4">
          <Card>
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                        alt="img"
                        className="rounded-2"
                        width={40}
                      />
                      <div className="ms-2">
                        <h6 className="mb-0">Rice bowls</h6>
                        <span>*1</span>
                      </div>
                    </div>
                  </td>
                  <td className="fw-semibold">$ 45.00</td>
                </tr>
              </Table>
              <div className="border border-1"></div>
              <Card.Text className="mt-2 mb-1 fs-6 text-muted">
                Your order
              </Card.Text>
              <div className="d-flex justify-content-between">
                <BaseInput
                  type="text"
                  name="Coupen"
                  placeholder="Apply Coupen"
                  inputBgColor="bg-light"
                />
                <Button variant="light" className="border w-25">
                  Apply
                </Button>
              </div>
              <div className="border border-1 my-3"></div>
              <div>
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
              <Button variant="success" className="w-100 mt-2">
                Continue to Payment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Delivery;
