import { NavLink } from "react-router-dom";

//react-bootstrap components
import Row from "react-bootstrap/Row";

const OrderOnline = () => {
  return (
    <>
      <div className="mt-4">
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
