//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import { Image, Modal, Row, Col } from "react-bootstrap";
import BaseInput from "../../../common/components/controls/BaseInput";
import { useState } from "react";

interface Props {
  modalShow: boolean;
  action: string;
  handleModal: (action: string) => void;
  handleSelected: (value: string) => void;
  updateUserInfo: (newUserInfo: any) => void;
}

const AddressModal: React.FC<Props> = ({
  modalShow,
  action,
  handleModal,
  handleSelected,
  updateUserInfo,
}) => {
  const [name, setName] = useState<string>();
  const [mobileNumber, setMobileNumber] = useState<number>();
  const [address, setAddress] = useState<string>();
  const [pincode, setPincode] = useState<number>();
  const [landmark, setLandmark] = useState<string>();

  const handleSave = () => {
    // Get user info from input fields
    const newUserInfo = {
      name: name,
      mobileNumber: mobileNumber,
      address: address,
      pincode: pincode,
      landmark: landmark,
      // Add more fields as needed
    };

    // Call the updateUserInfo function to send user info to Address component
    updateUserInfo(newUserInfo);

    // Close the modal
    handleModal("");
  };

  return (
    <Modal
      className="modal-lg"
      show={modalShow}
      onHide={() => {
        handleModal("");
        action !== "Edit" && handleSelected("");
      }}
    >
      <Modal.Body className="m-2">
        <Row className="d-flex justify-content-evenly py-3">
          <Col
            lg="5"
            className="ms-2 me-2 d-flex justify-content-center align-items-center image-bg border-0 rounded-1"
          >
            <Image
              className="tablet img-dim"
              src={require(`../../../assets/Address/image 78.png`)}
            />
          </Col>
          <Col xs={12} lg={6} className="justify-self-center">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h6 className="m-0 d-flex align-self-center">
                {action} Your Address
              </h6>
              <Modal.Header
                className="p-0 border-0"
                closeButton
                closeLabel="Close"
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Name"
                type="text"
                placeholder="Enter your name"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={name}
                handleChange={(e: any) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="MobileNumber"
                type="number"
                placeholder="Enter mobile number"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={mobileNumber}
                handleChange={(e: any) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Address"
                type="text"
                placeholder="Enter full address"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={address}
                handleChange={(e: any) => setAddress(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Pincode"
                type="number"
                placeholder="Enter zip code"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={pincode}
                handleChange={(e: any) => setPincode(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Landmark"
                type="text"
                placeholder="Enter landmark if any"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={landmark}
                handleChange={(e: any) => setLandmark(e.target.value)}
              />
            </div>
            <div>
              <BaseButton
                defaultClass="w-100 button-bg border-0"
                types="button"
                name="Save"
                handleClick={handleSave}
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
