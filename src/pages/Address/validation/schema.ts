import * as Yup from "yup";

export const AddressDetailsValidations = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Name is too short")
    .required("Name is required"),
  mobileNumber: Yup
    .string()
    .matches(/^\d+$/, 'Mobile number must contain only digits')
    .length(10, 'Mobile number must be exactly 10 digits long')
    .required("Mobile Number is required"),
  address: Yup
    .string()
    .min(10, "Address is too short")
    .required("Address is required"),
  pincode: Yup
    .string()
    .matches(/^\d+$/, 'Pincode must contain only digits')
    .length(6, 'Pincode must be exactly 6 digits long')
    .required("Pincode is required"),
  landmark: Yup
    .string()
    .min(3, "Landmark is too short")
    .required("Landmark is required"),
});