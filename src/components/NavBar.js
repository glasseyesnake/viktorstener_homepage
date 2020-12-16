import React, { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="nav-header">
      <div>
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Hem
          </NavLink>
          <NavLink
            to="/media"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Media
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Om mig
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="nav-link-active"
            className="nav-link"
          >
            Kontakt
          </NavLink>
        </nav>
      </div>
      <div className="social-icon-div">
        <SocialIcon
          url="https://www.facebook.com/viktorstener" bgColor="#eee"
          style={{ width: 35, height: 35 }}
        />
        <SocialIcon
          url="https://www.instagram.com/kvint_stereor/" bgColor="#eee"
          style={{ width: 35, height: 35 }}
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCxaWfNqVz2j2D4H4dTE-EVQ" bgColor="#eee"
          style={{ width: 35, height: 35 }}
        />
      </div>
    </header>
  );
};

export default NavBar;
