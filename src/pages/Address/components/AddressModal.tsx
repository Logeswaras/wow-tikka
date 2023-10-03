//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import { Image, Modal, Row, Col } from "react-bootstrap";

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
            md="5"
            className="ms-2 me-2 d-flex justify-content-center align-items-center image-bg border-0 rounded"
          >
            <Image
              className="tablet img-dim tablet-img-dim"
              src={require(`../../../assets/Address/image 78.png`)}
            />
          </Col>
          <Col xs={12} md={6} className="justify-self-center">
            <div className="mb-4 d-flex justify-content-between align-items-center">
              <h6 className="m-0 d-flex align-self-center">Add Your Address</h6>
              <Modal.Header className="p-0" closeButton closeLabel="Close" />
            </div>
            <div>
              <input
                name="Name"
                type="text"
                placeholder="Enter your name"
                className="px-3 py-3 border-0 rounded w-100 input-bg"
              />
            </div>
            <div>
              <input
                name="MobileNumber"
                type="number"
                placeholder="Enter mobile number"
                className="px-3 py-3 border-0 rounded w-100 input-bg"
              />
            </div>
            <div>
              <input
                name="Address"
                type="text"
                placeholder="Enter full address"
                className="px-3 py-3 border-0 rounded w-100 input-bg"
              />
            </div>
            <div>
              <input
                name="Pincode"
                type="number"
                placeholder="Enter zip code"
                className="px-3 py-3 border-0 rounded w-100 input-bg"
              />
            </div>
            <div>
              <input
                name="Landmark"
                type="text"
                placeholder="Enter landmark if any"
                className="px-3 py-3 border-0 rounded w-100 input-bg"
              />
            </div>
            <div>
              <BaseButton
                defaultClass="px-4 py-3 w-100 button-bg border-0 d-flex justify-content-center align-items-center"
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
