import styled from "styled-components";
import { FlexLayout } from "../Theme.style";
import { BtnStyle } from "../Button.style";

export const Container = styled(FlexLayout)`
  background-color: ${({ theme }) => theme.basic.bgColor};
  border: 1px red solid;
`;
export const FormDiv = styled(FlexLayout)`
  border-radius: 50px;
  height: 65vh;
  background-color: ${({ theme }) => theme.basic.bgColor};
  margin: 5rem;
  padding: 0 5rem;
  box-shadow: 0 2rem 3rem ${({ theme }) => theme.basic.boxShadow};
`;

export const LoginBtn = styled(BtnStyle)`
  width: 100%;
  margin-left: 0;
  font-size: 1.5rem;
  cursor: ${({ cursor }) => cursor || "pointer"};
`;
