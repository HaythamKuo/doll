import styled, { keyframes } from "styled-components";

//字幕特效
export const show = keyframes`
0%,10%{
    fill:transparent;
    stroke-dasharray:0% 100%;

}
70%{
    stroke-dasharray:100% 0%;
    stroke-opacity:1;
    fill:transparent
}
80%,100%{
    stroke-opacity:0;
    fill:#3d5a80
}
`;

//layoyt
export const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
////////////////////////

const theme = {
  basic: {
    lisize: "2rem",
    bgColor: "white",
    primaryColor: "#ee6c4d", //偏橘
    fontColor: "#788DA5", //鐵灰
    boxShadow: "rgba(0, 0, 0, 0.3)",
    icon: "black",
    header: "#094d92",
    liColor: "#3d5a80", //偏藍
  },
  rwd: {
    pad: "768px",
    mobile: "600px",
    mt: "2rem",
  },
};
//黑暗模式
export const darkTheme = {
  basic: {
    lisize: "2rem",
    bgColor: "#1c1c1c",
    primaryColor: "#ee6c4d", //偏橘
    fontColor: "#fff", //白色
    boxShadow: "rgba(0, 0, 0, 0.3)",
    icon: "#fff",
    header: "#e0fbfc", //淡藍白
    liColor: "#e0fbfc", //淡藍白
  },
  rwd: {
    pad: "768px",
    mobile: "600px",
    mt: "2rem",
  },
};
export default theme;
