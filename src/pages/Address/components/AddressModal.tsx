//custom components
import BaseButton from "../../../common/components/controls/BaseButton";
import BaseInput from "../../../common/components/controls/BaseInput";
import { Card, Image, Modal, Container, Row, Col } from "react-bootstrap";

interface Props {
  show: boolean;
  handleModal: () => void;
}

const AddressModal: React.FC<Props> = ({ show, handleModal }) => {
  const newAddress = "addnewaddress";

  return (
    // <Modal className="modal-lg" show={show} onHide={handleModal}>
    //   <Modal.Header className="border-0" closeButton>
    //     <Card.Title className="ps-3 pt-1">Add Your Address</Card.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <div className="d-flex m-3 mt-0 mb-2">
    //       <div className="p-3 d-flex justify-content-center align-items-center image-bg">
    //         <div className="m-3 p-3 d-flex">
    //           <Image
    //             className="m-3 img-dim"
    //             src={require(`../../../assets/Address/${newAddress}.svg`)}
    //           />
    //         </div>
    //       </div>
    //       <div className="w-100 ps-3 form-box">
    //         <div className="ps-3">
    //           <BaseInput
    //             name="Name"
    //             type="text"
    //             placeholder="Enter your name"
    //             inputBgColor="bg-light"
    //           />
    //         </div>
    //         <div className="ps-3">
    //           <BaseInput
    //             name="MobileNumber"
    //             type="number"
    //             placeholder="Enter mobile number"
    //             inputBgColor="bg-light"
    //           />
    //         </div>
    //         <div className="ps-3">
    //           <BaseInput
    //             name="Address"
    //             type="text"
    //             placeholder="Enter full address"
    //             inputBgColor="bg-light"
    //           />
    //         </div>
    //         <div className="ps-3">
    //           <BaseInput
    //             name="Pincode"
    //             type="number"
    //             placeholder="Enter zip code"
    //             inputBgColor="bg-light"
    //           />
    //         </div>
    //         <div className="ps-3">
    //           <BaseInput
    //             name="Landmark"
    //             type="text"
    //             placeholder="Enter landmark if any"
    //             inputBgColor="bg-light"
    //           />
    //         </div>
    //         <div className="ps-3">
    //           <BaseButton
    //             defaultClass="w-100 bg-warning border-0"
    //             types="button"
    //             name="Save"
    //             // handleSubmit={}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </Modal.Body>
    // </Modal>
    <Modal className="modal-lg" show={show} onHide={handleModal}>
      <Modal.Header className="border-0" closeButton>
        <Card.Title className="ps-3 pt-1">Add Your Address</Card.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="pb-3">
          <Row>
            {window.innerWidth > 600 && (
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="p-3 d-flex justify-content-center align-items-center image-bg">
                  <div className="m-3 p-3 d-flex">
                    <Image
                      className="m-3 img-dim"
                      src={require(`../../../assets/Address/${newAddress}.svg`)}
                    />
                  </div>
                </div>
              </Col>
            )}
            <Col xs={12} md={6} className="form-box">
              <div className="ps-3">
                <BaseInput
                  name="Name"
                  type="text"
                  placeholder="Enter your name"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="ps-3">
                <BaseInput
                  name="MobileNumber"
                  type="number"
                  placeholder="Enter mobile number"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="ps-3">
                <BaseInput
                  name="Address"
                  type="text"
                  placeholder="Enter full address"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="ps-3">
                <BaseInput
                  name="Pincode"
                  type="number"
                  placeholder="Enter zip code"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="ps-3">
                <BaseInput
                  name="Landmark"
                  type="text"
                  placeholder="Enter landmark if any"
                  inputBgColor="bg-light"
                />
              </div>
              <div className="ps-3">
                <BaseButton
                  defaultClass="w-100 bg-warning border-0"
                  types="button"
                  name="Save"
                  // handleSubmit={}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
