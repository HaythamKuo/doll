import { Outlet } from "react-router-dom";
import { ContainerStyle } from "../styles/Container.style";
import NavBar from "../components/NavBar";

function Root() {
  return (
    <>
      <ContainerStyle>
        <NavBar />
        <Outlet />
      </ContainerStyle>
    </>
  );
}
export default Root;
