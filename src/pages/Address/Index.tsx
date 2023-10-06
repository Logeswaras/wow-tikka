import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row, Table, Image } from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseIcon from "../../common/components/ui/BaseIcon";
import BaseButton from "../../common/components/controls/BaseButton";
import AddressModal from "./components/AddressModal";

//icons
import { faCheck, faEdit, faTrash } from "../../common/icons/Icons";

const Address: React.FC = () => {
  const [modalShow, setmodalShow] = useState<boolean>(false);
  const [action, setAction] = useState<string>("");
  const [isAddress, setIsAddress] = useState<boolean>(false);
  const [addressType, setAddressType] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<object>({});
  const [showUserInfoCard, setShowUserInfoCard] = useState<boolean>(false);

  useEffect(() => {
    // This code will execute when the userInfo state is updated
    console.log(userInfo);

    if (addressType === "Edit") {
      setSelectedAddress(true);
    }

    if (showUserInfoCard === true) {
      setIsAddress(true);
    } else {
      setSelectedAddress(false);
      setIsAddress(false);
    }
  }, [userInfo, selectedAddress, isAddress, showUserInfoCard, addressType]);

  const newAddress = "addnewaddress";

  const handleModal = (action: string) => {
    setmodalShow(!modalShow);
    setAction(action);
  };

  const handleSelected = (value: string) => {
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

  // const AddressError = (
  //   selectedAddress === false ? (
  //     <div className="mt-2">
  //       <p className="m-0 text-danger">Address not provided.</p>
  //       {isAddress === false ? (
  //         <p className="m-0 text-danger">
  //           Please provide your address details
  //         </p>
  //       ) : (
  //         <p className="m-0 text-danger">
  //           Select your default address or add a new address
  //         </p>
  //       )}
  //     </div>
  //   ) : (
  //     <div></div>
  //   )}
  // )

  const updateUserInfo = (newUserInfo: object) => {
    setUserInfo(newUserInfo);
    setShowUserInfoCard(true);
    setIsAddress(true);
    console.log(userInfo);
  };

  const handleContinueToPayment = () => {
    if (addressType === "Edit") {
      setSelectedAddress(true);
    }
    // Add any other logic for continuing to payment
  };

  return (
    <>
      {console.log(selectedAddress)}
      <Row className="px-5 mt-3 mb-2 g-0">
        <Col lg="8">
          <div className="row g-0 justify-content-center justify-content-lg-start">
            {showUserInfoCard === true ? (
              <div
                className={`col-12 col-md-4 me-0 me-md-3 p-0 position-relative border rounded-1 ${
                  addressType === "Edit" && "border-success bg-success-light"
                }`}
                onClick={() => {
                  handleSelected("Edit");
                  setSelectedAddress(true);
                  console.log(selectedAddress);
                }}
                role="button"
              >
                <div>
                  {addressType === "Edit" ? (
                    selectedAddressType
                  ) : (
                    <div className="pt-5"></div>
                  )}
                  <div className="ps-5 pe-5 pb-3 text-muted">
                    {/* <h6 className="mt-2 text-dark">Address -1</h6> */}
                    <p>1/234 Movin,palakodu TK, Dharmapuri Dt Pin -636810</p>
                    <div className="d-flex justify-content-between">
                      <BaseButton
                        types="button"
                        defaultClass="btn-light"
                        name="Edit"
                        icon={faEdit}
                        handleClick={() => {
                          handleSelected("Edit");
                          handleModal("Edit");
                        }}
                      />
                      <BaseButton
                        types="button"
                        defaultClass="btn-light"
                        name="Delete"
                        icon={faTrash}
                        handleClick={() => {
                          setShowUserInfoCard(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div
              className={
                "col-12 col-md-4 me-0 me-md-3 mt-3 mt-md-0 p-0 position-relative border rounded-1"
              }
              onClick={() => {
                handleSelected("New");
                handleModal("Add");
              }}
              role="button"
            >
              <div>
                {/* {addressType === "New" ? (selectedAddressType) : ()} */}
                <div className="pt-5"></div>
                <div className="ps-5 pe-5 pb-3 text-muted text-center">
                  <Image
                    src={require(`../../assets/Address/${newAddress}.svg`)}
                  />
                  <p className="mt-2">Add new address</p>
                </div>
              </div>
            </div>
            <AddressModal
              modalShow={modalShow}
              action={action}
              handleModal={handleModal}
              handleSelected={handleSelected}
              updateUserInfo={updateUserInfo}
            />
          </div>
          {selectedAddress === false ? (
            <div className="mt-2">
              {isAddress === false ? (
                <p className="m-0 text-danger">
                  Address not provided. Please provide your address details.
                </p>
              ) : (
                <p className="m-0 text-danger">
                  Select your default address or add a new address.
                </p>
              )}
            </div>
          ) : (
            <div></div>
          )}
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
                handleClick={handleContinueToPayment}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Address;
