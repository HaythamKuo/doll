import { Outlet } from "react-router-dom";
import { ContainerStyle } from "../styles/Container.style";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Root() {
  return (
    <>
      <ContainerStyle>
        <NavBar />
        <Outlet />
        <Footer />
      </ContainerStyle>
    </>
  );
}
export default Root;
