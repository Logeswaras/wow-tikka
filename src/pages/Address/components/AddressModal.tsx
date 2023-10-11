//custom components
import { useRef, useState } from "react";
import { useFormik } from "formik";

import BaseButton from "../../../common/components/controls/BaseButton";
import { Image, Modal, Row, Col } from "react-bootstrap";
import BaseInput from "../../../common/components/controls/BaseInput";
import { AddressDetailsModel } from "../models";
import { AddressDetailsValidations } from "../validation/schema";

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
  const initialValues: AddressDetailsModel = {
    name: "",
    mobileNumber: "",
    address: "",
    pincode: "",
    landmark: "",
  };

  const onSubmit = () => {
    if (Object.keys(formik.errors).length === 0) {
      const newUserInfo: AddressDetailsModel = {
        name: formik.values.name,
        mobileNumber: formik.values.mobileNumber,
        address: formik.values.address,
        pincode: formik.values.pincode,
        landmark: formik.values.landmark,
      };

      // Call the updateUserInfo function to send user info to Address component
      updateUserInfo(newUserInfo);

      // Close the modal
      handleModal("");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AddressDetailsValidations,
    onSubmit,
  });

  // console.log(formik.errors);

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
                name="name"
                type="text"
                placeholder="Enter your name"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={formik.values.name}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="mobileNumber"
                type="number"
                placeholder="Enter mobile number"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={formik.values.mobileNumber}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="address"
                type="text"
                placeholder="Enter full address"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={formik.values.address}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="pincode"
                type="number"
                placeholder="Enter zip code"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={formik.values.pincode}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </div>
            <div className="mb-4">
              <BaseInput
                name="landmark"
                type="text"
                placeholder="Enter landmark if any"
                inputClass="px-3 border-0 rounded-1 w-100 input-bg"
                value={formik.values.landmark}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                formik={formik}
              />
            </div>
            <div>
              <BaseButton
                defaultClass="w-100 button-bg border-0"
                types="button"
                name="Save"
                handleClick={onSubmit}
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
