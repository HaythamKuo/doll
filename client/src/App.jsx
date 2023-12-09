import { RouterProvider } from "react-router-dom";

import { ResetStyle, GlobalStyle } from "./styles/GlobalStyle";
import { router } from "./routes/Router";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
