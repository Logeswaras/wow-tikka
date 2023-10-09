export class AddressDetailsModel {
  name: string;
  mobileNumber: string;
  address: string;
  pincode: string;
  landmark: string;
}

export class ExProps {
  isAddress: boolean;
  onClickPay: boolean;
  addressType: string;
}