//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import BaseInput from "../../../common/components/controls/BaseInput";
// import Image from "react-bootstrap/Image";
import { Card, Image, Modal } from "react-bootstrap";

// interface Props{
//   show: boolean;
// }

const AddressModal = () => {
  return (
    <Modal>
      <div>
        <div>
          {/* <Image src={require(`../../../assets/Address/${newAddress}.svg`)} /> */}
          <Image src={require(`../../../assets/Address/addnewaddress.svg`)} />
        </div>
        <div>
          <Card.Title>Add Your Address</Card.Title>
          <BaseInput
            name="Name"
            type="text"
            placeholder="Enter your name"
            inputBgColor="bg-light"
          />
          <BaseInput
            name="MobileNumber"
            type="tel"
            placeholder="Enter mobile number"
            inputBgColor="bg-light"
          />
          <BaseInput
            name="Address"
            type="text"
            placeholder="Enter full address"
            inputBgColor="bg-light"
          />
          <BaseInput
            name="Pincode"
            type="number"
            placeholder="Enter zip code"
            inputBgColor="bg-light"
          />
          <BaseInput
            name="Landmark"
            type="text"
            placeholder="Enter landmark if any"
            inputBgColor="bg-light"
          />
          <BaseButton
            defaultClass="btn-success border-0 w-100"
            types="button"
            name="Save"
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddressModal;
