import styled from "styled-components";
import { FlexLayout } from "./Theme.style";
import { NavLi, NavUl } from "./Nav.style";

export const Container = styled(FlexLayout)`
  flex-wrap: wrap;
  color: ${({ theme }) => theme.basic.bgColor};
  background-color: black;
  width: 100%;
  justify-content: space-around;
`;

export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 3rem;
  padding: 2%;

  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
  }
`;
export const Desc = styled.div`
  margin-top: 3rem;
  color: white;
  font-size: ${({ theme }) => theme.basic.lisize};
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  width: 30%;
  p {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
    text-align: center;
    margin-top: 1px;
    padding: 2rem;
  }
`;

export const UlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -2rem;

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.basic.primaryColor};
  }
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    text-align: center;
    margin-top: 1px;
  }
`;

export const FooterUl = styled(NavUl)`
  margin-top: 1rem;
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    display: flex;
    margin: 1rem auto;
    text-align: center;
  }
`;

export const LiStyle = styled(NavLi)`
  color: white;

  margin: 0 12px;

  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    margin: 0 10px;
  }
`;
