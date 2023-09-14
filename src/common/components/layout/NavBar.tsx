import { NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row, Image } from "react-bootstrap";

import BaseIcon from "../ui/BaseIcon";
import { faBars } from "../../icons/Icons";

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
  ];

  return (
    <div className="px-3">
      <Row>
        <Col md="2" sm="6">
          <Image
            src={require(`../../../assets/Home/${logo}.svg`)}
            fluid
            className="logo"
          />
        </Col>

        <Col md={10} sm={6} className="nav-icon">
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <BaseIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="ms-auto">
                {links.map((link, index) => (
                  <Nav.Link
                    href={link.path}
                    key={index}
                    className="nav-link dashboard-nav mx-3 pt-5"
                  >
                    {link.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
