import { Link } from "react-router-dom";
import {
  NavContainer,
  NavLeft,
  NavUl,
  NavLi,
  NavCenter,
  NavRight,
  LogoStyle,
  MoonIcon,
  SunIcon,
  MobileBar,
} from "../styles/Nav.style";

import logo from "../assets/Humaaans - Buy Online.png";
//import { FaRegSun, FaMoon } from "react-icons/fa";

function NavBar() {
  return (
    <NavContainer>
      <NavLeft>
        <Link to="/">
          <LogoStyle src={logo} alt="logo" />
        </Link>
      </NavLeft>

      <NavCenter>
        <NavUl>
          <NavLi>暗黑模式</NavLi>
          <NavLi>關於我們</NavLi>
          <NavLi>商品列表</NavLi>
          <NavLi>購物車</NavLi>
          <NavLi>登入</NavLi>
        </NavUl>
        <MobileBar />
      </NavCenter>
      <NavRight>
        <MoonIcon />
      </NavRight>
    </NavContainer>
  );
}
export default NavBar;
