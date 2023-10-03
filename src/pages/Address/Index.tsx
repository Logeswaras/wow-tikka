import React, { useState } from "react";
import { Button, Card, Col, Row, Table, Image } from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseIcon from "../../common/components/ui/BaseIcon";
import BaseButton from "../../common/components/controls/BaseButton";
import AddressModal from "./components/AddressModal";

//icons
import { faCheck, faEdit, faTrash } from "../../common/icons/Icons";

const Address: React.FC = () => {
  const [addressType, setAddressType] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const newAddress = "addnewaddress";

  const handleModal = () => setShow(!show);

  const handleSelected = (value: string) => {
    console.log("first");
    setAddressType(value);
  };

  const selectedAddressType = (
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
          <div className="row g-0 justify-content-center justify-content-lg-start">
            <div
              className="col-12 col-md-4 me-0 me-md-3 p-0 position-relative"
              onClick={() => handleSelected("delivery")}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  addressType === "delivery" &&
                  "border-success bg-success-light"
                }`}
              >
                {addressType === "delivery" ? (
                  selectedAddressType
                ) : (
                  <div className="pt-5"></div>
                )}
                <div className="ps-5 pe-5 pb-3 text-muted">
                  <h6 className="mt-2 text-dark">Address -1</h6>
                  <p>1/234 Movin,palakodu TK, Dharmapuri Dt Pin -636810</p>
                  <div className="d-flex justify-content-between">
                    <BaseButton
                      types="button"
                      defaultClass="btn-light"
                      name="Edit"
                      icon={faEdit}
                    />
                    <BaseButton
                      types="button"
                      defaultClass="btn-light"
                      name="Delete"
                      icon={faTrash}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 me-0 me-md-3 mt-3 mt-md-0 p-0 position-relative"
              onClick={() => {
                handleSelected("pickup");
                handleModal();
              }}
              role="button"
            >
              <div
                className={`border rounded-1 ${
                  addressType === "pickup" && "border-success bg-success-light"
                }`}
              >
                {addressType === "pickup" ? (
                  selectedAddressType
                ) : (
                  <div className="pt-5"></div>
                )}
                <div className="ps-5 pe-5 pb-3 text-muted text-center">
                  <Image
                    src={require(`../../assets/Address/${newAddress}.svg`)}
                  />
                  <p className="mt-2">Add new address</p>
                </div>
              </div>
            </div>
            <AddressModal
              show={show}
              handleModal={handleModal}
              handleSelected={handleSelected}
            />
          </div>
        </Col>
        <Col lg="4" className="mt-3 mt-lg-0">
          <Card className="m-0">
            <Card.Body>
              <Card.Title>Your order</Card.Title>
              <Table responsive borderless className="mb-0">
                <tbody>
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
                </tbody>
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
              <BaseButton
                types="button"
                defaultClass="btn-success border-0 w-100"
                name="continue to payment"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Address;
