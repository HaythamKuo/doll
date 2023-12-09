import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ContainerStyle } from "../styles/Container.style";
import NavBar from "../components/home/NavBar";
import Footer from "../components/home/Footer";
import theme, { darkTheme } from "../styles/Theme.style";

function Root() {
  const [themes, setThemes] = useState("light");
  const isDarkTheme = themes === "light";

  function toggleTheme() {
    setThemes(isDarkTheme ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={isDarkTheme ? theme : darkTheme}>
      <ContainerStyle>
        <NavBar toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </ContainerStyle>
    </ThemeProvider>
  );
}
export default Root;
