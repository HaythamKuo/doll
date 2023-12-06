import styled from "styled-components";
import { FlexLayout } from "./Theme.style";

export const HomeStyle = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 90%;
`;

export const Left = styled(FlexLayout)`
  width: 60%;
  background-color: ${({ theme }) => theme.basic.bgColor};
  flex-direction: column;
`;
export const Right = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.basic.bgColor};
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  width: 65%;
  font-size: 4rem;
  font-weight: bold;
  color: #ee6c4d;
  margin-bottom: 3rem;
  //text-align: center;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.basic.lisize};
  color: ${({ theme }) => theme.basic.fontColor};
  width: 65%;
`;
export const RightImg = styled.img`
  width: 100%;
  height: 50rem;
`;
