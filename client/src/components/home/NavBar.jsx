import { Link } from "react-router-dom";
import { useState } from "react";
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
} from "../../styles/Nav.style";

import logo from "../../assets/Humaaans - Buy Online.png";

function NavBar(prop) {
  const [icon, setIcon] = useState(false);
  const { toggleTheme } = prop;

  /**
   * 切換日/夜模式方法
   */
  function onToggle() {
    setIcon((preIcon) => !preIcon);
    toggleTheme();
  }
  const toggleIcon = icon ? (
    <SunIcon onClick={onToggle} />
  ) : (
    <MoonIcon onClick={onToggle} />
  );

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
      <NavRight>{toggleIcon}</NavRight>
    </NavContainer>
  );
}
export default NavBar;
