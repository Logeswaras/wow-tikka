//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import BaseInput from "../../../common/components/controls/BaseInput";
import { Card, Image, Modal } from "react-bootstrap";

const AddressModal = () => {
  const newAddress = "addnewaddress";

  return (
    <div>
      <Modal>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="d-flex p-3">
            <div className="">
              <Image
                className=""
                src={require(`../../../assets/Address/${newAddress}.svg`)}
              />
            </div>
            <div className="d-flex flex-column h-100">
              <Card.Title className="input-title">Add Your Address</Card.Title>
              <div className="mt-3">
                <BaseInput
                  // inputClass="input-box"
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="mt-3">
                <BaseInput
                  // inputClass="input-box"
                  name="MobileNumber"
                  type="number"
                  placeholder="Enter mobile number"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="mt-3">
                <BaseInput
                  // inputClass="input-box"
                  name="Address"
                  type="text"
                  placeholder="Enter full address"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="mt-3">
                <BaseInput
                  // inputClass="input-box"
                  name="Pincode"
                  type="number"
                  placeholder="Enter zip code"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="mt-3">
                <BaseInput
                  // inputClass="input-box"
                  name="Landmark"
                  type="text"
                  placeholder="Enter landmark if any"
                  inputBgColor="bg-light"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="mt-auto">
            <BaseButton
              defaultClass=""
              types="button"
              name="Save"
              // handleSubmit={}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressModal;
