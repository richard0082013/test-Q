import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
const NaviBar = styled(Menu)`
  font-size: 18px !important;
  margin-bottom: 0 !important;
`;
const LogoImage = styled.img`
  height: auto;
  width: 190px !important;
`;
const Header = () => (
  <NaviBar stackable>
    <Menu.Item>
      <LogoImage src={logo} />
    </Menu.Item>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>

    <Menu.Item>
      <Link to="/faqs">Faqs</Link>
    </Menu.Item>
  </NaviBar>
);

export default Header;
