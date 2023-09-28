import { NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Image } from "react-bootstrap";

import BaseIcon from "../ui/BaseIcon";
import { faBagShopping } from "../../icons/Icons";

const NavBar = () => {
  const logo = "logo";

  const links = [
    {
      name: "MENU",
      path: "my-details",
    },
    {
      name: "ABOUT US",
      path: "restaurant-profile",
    },
    {
      name: "CATERING",
      path: "password",
    },
    {
      name: "GIFT CARDS",
      path: "notifications",
    },
    {
      name: "ONLINE ORDER",
      path: "notifications",
    },
    {
      name: (
        <BaseIcon
          icon={faBagShopping}
          classes="fs-5 text-warning lg-card-icon"
        />
      ),
      path: "cart",
    },
    {
      name: (
        <Image
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          width={30}
          height={30}
          className="rounded-circle"
        />
      ),
      path: "profile",
    },
  ];

  return (
    <div className="px-3">
      <Navbar collapseOnSelect expand="xl">
        <Container>
          <Col md="2" sm="6" className="logo">
            <Image src={require(`../../../assets/Home/${logo}.svg`)} fluid />
          </Col>
          <NavLink to="cart" className="nav-link ms-auto me-3 me-md-5">
            <BaseIcon
              icon={faBagShopping}
              classes="fs-5 text-warning sm-card-icon"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              {links.map((link, index) => (
                <NavLink
                  to={link.path}
                  key={index}
                  className="nav-link mx-3 pt-2"
                >
                  {link.name}
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
