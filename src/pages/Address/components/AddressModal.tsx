//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import { Image, Modal, Row, Col } from "react-bootstrap";
import BaseInput from "../../../common/components/controls/BaseInput";

interface Props {
  show: boolean;
  handleModal: () => void;
  handleSelected: (value: string) => void;
}

const AddressModal: React.FC<Props> = ({
  show,
  handleModal,
  handleSelected,
}) => {
  return (
    <Modal
      className="modal-lg"
      show={show}
      onHide={() => {
        handleSelected("");
        handleModal();
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
              <h6 className="m-0 d-flex align-self-center">Add Your Address</h6>
              <Modal.Header className="p-0" closeButton closeLabel="Close" />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Name"
                type="text"
                placeholder="Enter your name"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="MobileNumber"
                type="number"
                placeholder="Enter mobile number"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Address"
                type="text"
                placeholder="Enter full address"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Pincode"
                type="number"
                placeholder="Enter zip code"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="Landmark"
                type="text"
                placeholder="Enter landmark if any"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
              />
            </div>
            <div>
              <BaseButton
                defaultClass="w-100 button-bg border-0"
                types="button"
                name="Save"
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
