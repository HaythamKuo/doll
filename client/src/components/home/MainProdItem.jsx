import { TextWrapper, ProdList, Title } from "../../styles/HomeProd.style";

function MainProdItem(prop) {
  const { title, image } = prop;
  return (
    <TextWrapper>
      <ProdList image={image}>
        <Title>{title}</Title>
        {/* <Desc>
            這裡是描述 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus et optio, quam, tenetur asperiores numquam quibusdam
            voluptate error quae dolores suscipit aut aliquam nostrum inventore
            dolor voluptatem commodi magni iste?
          </Desc> */}
      </ProdList>
    </TextWrapper>
  );
}

export default MainProdItem;
