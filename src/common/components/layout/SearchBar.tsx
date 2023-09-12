import BaseButton from "../controls/BaseButton";
import BaseInput from "../controls/BaseInput";

const SearchBar = () => {
  return (
    <div className="d-flex justify-content-center">
      <BaseInput
        name="search"
        type="text"
        placeholder="Please select your location"
        size="col-md-3"
      />
      <BaseButton defaultClass="ms-4 btn btn-success" name="Search" />
    </div>
  );
};

export default SearchBar;
