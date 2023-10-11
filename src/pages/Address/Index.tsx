import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Image,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

//custom components
import BaseInput from "../../common/components/controls/BaseInput";
import BaseIcon from "../../common/components/ui/BaseIcon";
import BaseButton from "../../common/components/controls/BaseButton";
import AddressModal from "./components/AddressModal";
import { AddressDetailsModel } from "./models";

//icons
import { faCheck, faEdit, faTrash } from "../../common/icons/Icons";

const Address: React.FC = () => {
  const [modalShow, setmodalShow] = useState<boolean>(false); // To show/hide the modal
  const [action, setAction] = useState<string>(""); // To apply styles for the selected address
  const [isAddress, setIsAddress] = useState<boolean>(false); // To check whether any address is available at all
  const [addressType, setAddressType] = useState<string>(""); // To id the selected address
  const [selectedAddress, setSelectedAddress] = useState<boolean>(false); // To know if an address is selected or not
  const [userInfo, setUserInfo] = useState<AddressDetailsModel>(); // To store and manage the data from the modal
  const [showUserInfoCard, setShowUserInfoCard] = useState<boolean>(false); // To show the new card with new data
  const [onClickPay, setOnClickPay] = useState<boolean>(false); // To track clicks on the 'Continue to payment button'

  useEffect(() => {
    console.log("userInfo", userInfo);
    console.log("addressType", addressType);
    console.log("isAddress", isAddress);
    console.log("selectedAddress", selectedAddress);
    console.log("showUserInfoCard", showUserInfoCard);
    console.log("onClickPay", onClickPay);

    if (addressType === "Edit") {
      setSelectedAddress(true);
    } else {
      setSelectedAddress(false);
    }

    if (showUserInfoCard === true) {
      setIsAddress(true);
    } else {
      setSelectedAddress(false);
      setIsAddress(false);
    }
  }, [
    userInfo,
    selectedAddress,
    isAddress,
    showUserInfoCard,
    addressType,
    onClickPay,
    modalShow,
    action,
  ]);

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

  const updateUserInfo = (newUserInfo: AddressDetailsModel) => {
    setUserInfo(newUserInfo);
    setShowUserInfoCard(true);
    setIsAddress(true);
    setAddressType("Edit");
    console.log(isAddress);
  };

  const handleContinueToPayment = () => {
    setOnClickPay(true);
    // if (addressType === "Edit") {
    //   setSelectedAddress(true);
    // }
    // Add any other logic for continuing to payment
  };

<<<<<<< HEAD
=======
  const Ex = ({ isAddress, onClickPay, addressType }: ExProps) => {
    if (onClickPay) {
      if (isAddress === false) {
        // Display this message when the "Continue to payment" button is clicked and no address is provided
        return (
          <p className="m-0 text-danger">
            Address not provided. Please provide your address details.
          </p>
        );
      }
    } else {
      if (isAddress === true && addressType !== "Edit") {
        // Display this message when there is an address but it's not selected
        return (
          <p className="m-0 text-danger">
            Select your default address or add a new address.
          </p>
        );
      }
    }
    return <p></p>;
  };

  const ref = useRef();
>>>>>>> 4380e2737b64ccb0187106b271a5333c9fb52b9e
  return (
    <>
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
                    <p className="mb-2 text-justify">{userInfo?.name}</p>
                    <p className="m-0 text-justify">
                      {userInfo?.address + " - " + userInfo?.zipcode}
                    </p>
                    <p className="mb-2 text-justify">
                      {"(opp " + userInfo?.landmark + ")."}
                    </p>
                    <p className="mb-2 text-justify">
                      {"Mobile No.: " + userInfo?.mobileNumber}
                    </p>
                    <div className="d-flex justify-content-end">
                      {/* <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Edit</Tooltip>}
                      > */}
                        <BaseButton
                          types="button"
                          defaultClass="btn-icon"
                          variant="outline"
                          icon={faEdit}
                          handleClick={() => {
                            handleSelected("Edit");
                            handleModal("Edit");
                          }}
                        />
                      {/* </OverlayTrigger> */}

                      <BaseButton
                        types="button"
                        defaultClass="btn-icon"
                        variant="outline"
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
                handleSelected("");
                handleModal("Add");
              }}
              role="button"
            >
              <div>
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
              {onClickPay ? (
                isAddress === false ? (
                  <p className="m-0 text-danger">
                    Address not provided. Please provide your address details.
                  </p>
                ) : selectedAddress === false ? (
                  <p className="m-0 text-danger">
                    Select your default address or add a new address.
                  </p>
                ) : (
                  <p></p>
                )
              ) : (
                <p></p>
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
