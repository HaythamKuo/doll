import styled from "styled-components";

export const HomeStyle = styled.div`
  margin-top: 1rem;
  display: flex;
  height: 90%;
`;

export const Left = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.basic.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.basic.bgColor};
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  width: 60%;
  font-size: 4rem;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.basic.lisize};
  color: gray;
  width: 70%;
  background-color: red;
`;
export const RightImg = styled.img`
  width: auto;
  height: 50rem;
`;
