import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

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
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
