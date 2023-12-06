import styled from "styled-components";
import { FlexLayout } from "./Theme.style";
import { NavLi } from "./Nav.style";

export const Container = styled(FlexLayout)`
  flex-wrap: wrap;
  color: ${({ theme }) => theme.basic.bgColor};
  background-color: black;
  width: 100%;
  justify-content: space-around;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.basic.bgColor};
  font-weight: bold;
  font-size: 3rem;
  padding: 2%;
`;
export const Desc = styled.div`
  margin-top: 3rem;
  color: ${({ theme }) => theme.basic.bgColor};
  font-size: ${({ theme }) => theme.basic.lisize};
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  width: 30%;
`;

export const UlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -4rem;
  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.basic.primaryColor};
  }
`;

export const LiStyle = styled(NavLi)`
  color: ${({ theme }) => theme.basic.bgColor};
  margin-top: 1rem;
`;
