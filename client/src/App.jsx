import { ResetStyle, GlobalStyle } from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
