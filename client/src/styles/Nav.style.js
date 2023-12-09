import styled from "styled-components";
import { FaRegSun, FaMoon, FaBars } from "react-icons/fa";

//專屬Nav的container
export const NavContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.basic.bgColor};

  box-shadow: 0 2rem 6rem ${({ theme }) => theme.basic.boxShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5rem;

  //to fix
  //position: fixed;

  //RWD
  //for 平板
  @media (max-width: ${({ theme }) => theme.rwd.pad}) {
    width: 100%;
    height: 5%;
  }

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
    height: 8%;
    justify-content: space-between;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;

  //margin-left: 3rem;
`;
export const LogoStyle = styled.img`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  border-radius: 50%;
`;

export const NavCenter = styled.div`
  flex: 2;
  display: flex;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    order: 2;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    display: none;
  }
`;
export const NavLi = styled.li`
  color: ${({ theme }) => theme.basic.fontColor};
  font-size: ${({ theme }) => theme.basic.lisize};
  font-weight: bold;
  cursor: pointer;
  margin-right: 3rem;
  &:hover {
    //todo
    color: #98c1d9;
  }
`;
//手機限定選單icon
export const MobileBar = styled(FaBars)`
  display: none;
  cursor: pointer;
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    order: 2;
    display: block;
    height: 5rem;
    width: 2.5rem;
  }
`;

export const NavRight = styled(NavLeft)`
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    order: 1;
  }
`;

export const MoonIcon = styled(FaMoon)`
  font-size: 2.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.basic.icon};
`;
export const SunIcon = styled(FaRegSun)`
  font-size: 2.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.basic.icon};
`;
