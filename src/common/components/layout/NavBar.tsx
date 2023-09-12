import { NavLink } from "react-router-dom";

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
    <div className="row px-5">
      <div className="col-md-2">
        <img
          src={require(`../../../assets/Home/${logo}.svg`)}
          alt="item-1"
          className="p-2"
          width={200}
          height={200}
        />
      </div>
      <div className="col-md d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-nav">
            {links.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className="nav-link dashboard-nav mx-3"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
