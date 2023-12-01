import {
  HomeStyle,
  Left,
  Right,
  Title,
  Description,
  RightImg,
} from "../styles/Home.style";
import Img from "../assets/touchDog.svg";
function HomePage() {
  return (
    <HomeStyle>
      <Left>
        <Title>選擇顧傭兵 讓你好放心！！</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui et,
          aperiam labore veritatis sunt, officia necessitatibus consequatur
          neque nobis iste repellat fugiat eaque aliquid dolore, assumenda
          laboriosam fuga eius! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio quo blanditiis expedita, dolore aut
        </Description>
      </Left>
      <Right>
        <RightImg src={Img} alt="img" />
      </Right>
    </HomeStyle>
  );
}
export default HomePage;
