import BaseButton from "../../../common/components/controls/BaseButton";

const Banner = () => {
  const banner = "banner-img";
  return (
    <>
      <div className="background-image">
        <div className="">
          <div className="d-flex justify-content-center">
            <img
              src={require(`../../../assets/Home/${banner}.svg`)}
              alt="banner"
              className="mt-5"
              height={300}
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <BaseButton
              types="button"
              defaultClass="px-4"
              variant="outline-light"
              name="Order Online"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
