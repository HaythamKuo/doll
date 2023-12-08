import styled from "styled-components";
import { FlexLayout } from "./Theme.style";

export const Container = styled.div`
  padding: 1rem 2rem;
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 140px 0 140px;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    margin: 0;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 3.5rem;
  color: #094d92;
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const SubTitle = styled.div`
  color: #ff9505;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.basic.lisize};
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    text-align: center;
  }
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.basic.fontColor};
  font-size: ${({ theme }) => theme.basic.lisize};
  margin-top: ${({ theme }) => theme.rwd.mt};
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    font-weight: bold;
    text-align: center;
  }
`;

export const Left = styled.div`
  width: 50%;
  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    margin-top: ${({ theme }) => theme.rwd.mt};
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
`;

export const List = styled(FlexLayout)`
  width: 100%;
  list-style: none;
  flex-wrap: wrap;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    margin-top: ${({ theme }) => theme.rwd.mt};
  }
`;
export const ListItem = styled.li`
  color: #3d5a80;
  border: 2px solid white;
  border-left: 5px solid ${({ theme }) => theme.basic.primaryColor};
  padding: 2rem 2rem;
  margin: 1.5rem;
  min-width: 20rem;
  text-align: left;
  //-webkit-box-shadow: 0px -1px 15px -5px;
  font-size: ${({ theme }) => theme.basic.lisize};
  box-shadow: 0 -1px 15px -5px ${({ theme }) => theme.basic.boxShadow};

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    margin: 2px;
    padding: 1rem 1rem;
    min-width: 15rem;
  }
`;
