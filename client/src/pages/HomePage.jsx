import {
  HomeStyle,
  Left,
  Right,
  Title,
  Description,
  RightImg,
} from "../styles/Home.style";
import { BtnContainer, BtnStyle } from "../styles/Button.style";
import Img from "../assets/touchDog.svg";
import MainProd from "../components/MainProd";
import ProdList from "../components/ProdList";
import MainProdItem from "../components/MainProdItem";
import snowMoutain from "../assets/snowmoutain.jpg";
import toChange from "../assets/touchDog.svg";
import { golden, husky } from "/public/hashtag";

function HomePage() {
  return (
    <>
      <HomeStyle>
        <Left>
          <Title>選擇顧傭兵 讓你好放心！！</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
            et, aperiam labore veritatis sunt, officia necessitatibus
            consequatur neque nobis iste repellat fugiat eaque aliquid dolore,
            assumenda laboriosam fuga eius! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio quo blanditiis expedita, dolore
            aut
          </Description>
          <BtnContainer>
            <BtnStyle>聯絡我們</BtnStyle>
            <BtnStyle>關於我們</BtnStyle>
          </BtnContainer>
        </Left>
        <Right>
          <RightImg src={Img} alt="imgage" />
        </Right>
      </HomeStyle>

      <MainProd />

      <ProdList
        index={1}
        title={"黃金獵犬"}
        image={toChange}
        creature={golden}
      />
      <MainProdItem image={snowMoutain} title={"Siberian Husky"} />
      <ProdList index={2} title={"哈士奇"} image={toChange} creature={husky} />
    </>
  );
}
export default HomePage;
