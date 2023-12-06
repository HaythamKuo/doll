import {
  Container,
  Wrapper,
  Header,
  SubTitle,
  Desc,
  Image,
  Right,
  Left,
} from "../styles/ProdList.style";

import ProdListItem from "./ProdListItem";

function ProdList(prop) {
  const { index, title, image, creature } = prop;

  return (
    <Container>
      <Wrapper>
        <Left>
          <SubTitle># {index}</SubTitle>
          <Header>{title}</Header>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eos aspernatur nam vero, praesentium corrupti itaque
            autem? Earum vitae praesentium excepturi beatae recusandae sapiente
            distinctio laboriosam maiores, quo laborum iste.
          </Desc>
          <ProdListItem creature={creature} />
        </Left>
        <Right>
          <Image alt="image" src={image} />
        </Right>
      </Wrapper>
    </Container>
  );
}
export default ProdList;
