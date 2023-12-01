import styled from "styled-components";

//專屬Nav的container
export const NavContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.basic.bgColor};

  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5rem;
`;

export const NavLeft = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;

  //margin-left: 3rem;
`;
export const NavCenter = styled.div`
  flex: 2;
  display: flex;
`;
export const NavRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const NavUl = styled.ul`
  display: flex;
`;
export const NavLi = styled.li`
  color: black;
  font-size: ${({ theme }) => theme.basic.lisize};
  font-weight: bold;
  cursor: pointer;
  margin-right: 3rem;
  &:hover {
    //todo
    color: lightblue;
  }
`;

export const LogoStyle = styled.img`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  border-radius: 50%;
`;
