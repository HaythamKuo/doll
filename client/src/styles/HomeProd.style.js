import styled from "styled-components";
import { show, FlexLayout } from "./Theme.style";

//svg文字特效
export const HomeProd = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.basic.bgColor};
  svg {
    width: 100%;
    height: 200;
  }
  text {
    font-weight: bold;
    font-size: 6rem;
    stroke: #2a2d34;
    stroke-width: 1;
    animation: ${show} 5s ease-in-out;
  }
`;

export const TextWrapper = styled(FlexLayout)`
  flex-direction: column;
  width: 100%;
`;

export const ProdList = styled(FlexLayout).withConfig({
  shouldForwardProp: (prop) => !prop.startsWith("$"),
})`
  flex-wrap: wrap;
  flex-direction: column;
  background-image: url(${({ image }) => image});
  height: 20rem;
  width: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const Title = styled.div`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  padding: 2rem;
`;
// export const Desc = styled.p`
//   color: black;
//   width: 40%;
//   font-weight: lighter;
//   font-size: ${({ theme }) => theme.basic.lisize};
// `;
