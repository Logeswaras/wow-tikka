import { NavLink } from "react-router-dom";

//react-bootstrap components
import Carousel from "react-bootstrap/Carousel";

const OrderOnline = () => {
  const chips = [
    {
      name: "Build your own",
      path: "/",
    },
    {
      name: "Street food",
      path: "/",
    },
    {
      name: "Sides",
      path: "/",
    },
    {
      name: "Desserts",
      path: "/",
    },
  ];
  return (
    <>
      <div className="mt-5 mobile-chip">
        <h4>Order Online</h4>
        <Carousel
          indicators={false}
          data-bs-theme="dark"
          interval={null}
          className="mt-4 w-100"
        >
          {chips.map((chip, index) => (
            <Carousel.Item key={index}>
              <div className="text-center">
                <NavLink
                  to={chip.path}
                  className="nav-link border rounded-3 d-inline-block px-3"
                >
                  {chip.name}
                </NavLink>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="mt-4 tablet-chip">
        <h4>Order Online</h4>
        <div className="mt-3">
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 me-md-0 me-2"
          >
            Build your own
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-md-4 me-md-0 me-2 mt-md-0 mt-1"
          >
            Street food
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-md-4 mt-md-0 mt-1 me-md-0 me-2"
          >
            Sides
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-md-4 mt-md-0 mt-1 me-md-0 me-2"
          >
            Desserts
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
