import styled from "styled-components";
import { FlexLayout } from "./Theme.style";

export const HomeStyle = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 90%;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    height: 60%;
    flex-direction: column-reverse;
  }
`;

export const Left = styled(FlexLayout)`
  width: 60%;
  background-color: ${({ theme }) => theme.basic.bgColor};
  flex-direction: column;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    height: 50%;
    width: 100%;
    padding-top: ${({ theme }) => theme.rwd.mt};
  }
`;
export const Title = styled.div`
  width: 65%;
  font-size: 4rem;
  font-weight: bold;
  color: #ee6c4d;
  margin-bottom: 3rem;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
    font-size: 2.5rem;
    text-align: center;
  }
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.basic.lisize};
  color: ${({ theme }) => theme.basic.fontColor};
  width: 65%;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 80%;
    text-align: center;
  }
`;

export const Right = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.basic.bgColor};
  display: flex;
  align-items: center;

  //for 手機
  @media (max-width: ${({ theme }) => theme.rwd.mobile}) {
    width: 100%;
    height: 50%;
  }
`;

export const RightImg = styled.img`
  width: 100%;
  height: 45rem;
`;
