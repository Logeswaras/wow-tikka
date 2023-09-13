import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import BaseButton from "../controls/BaseButton";
import BaseInput from "../controls/BaseInput";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center">
      <BaseInput
        name="search"
        type="text"
        placeholder="Please select your location"
        size="col-md-4"
        inputIcon={faLocationDot}
      />

      <BaseButton defaultClass="ms-4 col-md-1 btn-success" name="Search" />
    </div>
  );
};

export default SearchBar;
