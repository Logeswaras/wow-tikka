import { NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Image, Badge } from "react-bootstrap";

import BaseIcon from "../ui/BaseIcon";
import { faBagShopping } from "../../icons/Icons";
import BaseBage from "../../ui/BaseBadge";
import BaseBadge from "../../ui/BaseBadge";
import { useAppSelector } from "../../../store";

const NavBar = () => {
  const selecter = useAppSelector((store) => store.orederSystem.cart);
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
      name: <BaseBadge count={selecter.length} defaultClass="lg-card-icon" />,
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
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Col md="2" sm="6" className="logo">
            <Image src={require(`../../../assets/Home/${logo}.svg`)} fluid />
          </Col>
          <NavLink to="cart" className="nav-link ms-auto me-3 me-md-5">
            <BaseBadge count={selecter.length} defaultClass="sm-card-icon" />
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
