import { useState } from "react";
import { Modal } from "react-bootstrap";

import BaseInput from "../../common/components/controls/BaseInput";
import BaseButton from "../../common/components/controls/BaseButton";

interface IProps {
  onClose?: any;
}

const SignUp: React.FC<IProps> = ({ onClose }) => {
  const [show, setShow] = useState(true);
  const signup = "signup";
  const handleClose = () => {
    setShow(false);
    onClose("close");
  };

  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="pt-3 px-5 text-center">
          <Modal.Title>
            <img
              src={require(`../../assets/Signup/${signup}.svg`)}
              alt="signup"
            />
            <p className="fw-medium fs-5">Need signup to complete order</p>
          </Modal.Title>
          <Modal.Body>
            <BaseInput
              name="Phone"
              type="text"
              label="Enter Mobile Number"
              inputText="+91"
              inputClass="rounded-0"
            />
            <div className="d-flex align-items-center justify-content-center">
              <hr className="horizontal-line" />
              <p className="mt-2 mx-2">or</p>
              <hr className="horizontal-line" />
            </div>
            <BaseButton
              defaultClass="mt-3 w-100 rounded-0"
              name="Signup"
              variant="warning"
            />
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
