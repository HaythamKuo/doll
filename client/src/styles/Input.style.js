import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 3rem;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.basic.fontColor};
  font-size: 2rem;
  font-weight: bold;
`;

export const InputModule = styled.input`
  padding: 1.5rem;
  margin: 1.5rem 0;
`;

export const InputSpan = styled.span`
  color: red;
`;
