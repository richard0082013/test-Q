import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Header = () => (
  <Menu inverted>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>

    <Menu.Item>
      <Link to="/faqs">Faqs</Link>
    </Menu.Item>
  </Menu>
);

export default Header;
