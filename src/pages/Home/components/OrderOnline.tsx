import { NavLink } from "react-router-dom";

const OrderOnline = () => {
  return (
    <>
      <div className="mt-4">
        <h4>Order Online</h4>
        <div className="mt-3">
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3"
          >
            Build your own
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-4"
          >
            Street food
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-4"
          >
            Sides
          </NavLink>
          <NavLink
            to={"/"}
            className="nav-link border rounded-3 d-inline-block px-3 ms-4"
          >
            Desserts
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
