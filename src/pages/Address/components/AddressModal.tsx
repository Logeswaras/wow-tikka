//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import BaseInput from "../../../common/components/controls/BaseInput";
import { Card, Image } from "react-bootstrap";

const AddressModal = () => {
  const newAddress = "addnewaddress";

  return (
    <div className="d-flex position-relative flex-row align-items-center">
      <div className="image-container">
        <Image
          className="image-style"
          src={require(`../../../assets/Address/${newAddress}.svg`)}
        />
      </div>
      <div className="input-container">
        <Card.Title>Add Your Address</Card.Title>
        <BaseInput
          inputClass="d-flex w-410 h-56 border-0 rounded-1 pt-17 pb-17 pe-16 ps-16"
          name="Name"
          type="text"
          placeholder="Enter your name"
          inputBgColor="bg-light"
        />
        <BaseInput
          inputClass="border-0 rounded-1"
          name="MobileNumber"
          type="tel"
          placeholder="Enter mobile number"
          inputBgColor="bg-light"
        />
        <BaseInput
          inputClass="border-0 rounded-1"
          name="Address"
          type="text"
          placeholder="Enter full address"
          inputBgColor="bg-light"
        />
        <BaseInput
          inputClass="border-0 rounded-1"
          name="Pincode"
          type="number"
          placeholder="Enter zip code"
          inputBgColor="bg-light"
        />
        <BaseInput
          inputClass="border-0 rounded-1"
          name="Landmark"
          type="text"
          placeholder="Enter landmark if any"
          inputBgColor="bg-light"
        />
        <BaseButton
          defaultClass="btn-success border-0 w-100"
          types="button"
          name="Save"
          // handleSubmit={}
        />
      </div>
    </div>
  );
};

export default AddressModal;
