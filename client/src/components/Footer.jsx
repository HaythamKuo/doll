import {
  Container,
  Desc,
  Title,
  LiStyle,
  UlContainer,
} from "../styles/Footer.style";
import { NavUl } from "../styles/Nav.style";
import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialFacebook,
} from "react-icons/sl";

function Footer() {
  return (
    <Container>
      <Desc>
        <Title>About Us</Title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore optio
          possimus magni porro voluptatibus expedita cupiditate itaque voluptas
          perferendis, at natus blanditiis vitae quisquam hic amet est?
          Voluptas, facere pariatur.
        </p>
      </Desc>

      <UlContainer>
        <Title>聯繫作者</Title>
        <NavUl>
          <LiStyle>
            <SlSocialGithub />
          </LiStyle>
          <LiStyle>
            <SlSocialInstagram />
          </LiStyle>
          <LiStyle>
            <SlSocialFacebook />
          </LiStyle>
        </NavUl>
        <p>Copyright © 2024 Haytham. All rights reserved</p>
      </UlContainer>
    </Container>
  );
}
export default Footer;
