import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const BtnStyle = styled.button`
  font-weight: bold;
  background-color: #ee6c4d;
  border: 1px solid black;
  margin-left: 1rem;
  color: #eff2ef;
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  cursor: pointer;
  background: linear-gradient(to right, #e0fbfc 50%, #ee6c4d 50%);
  background-size: 200%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #0e131f;
    border: 1px solid black;
    background-position: left bottom;
  }
`;
