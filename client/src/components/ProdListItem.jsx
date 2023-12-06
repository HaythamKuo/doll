import { List, ListItem } from "../styles/ProdList.style";

function ProdListItem(prop) {
  const { creature } = prop;
  return (
    <List>
      <ListItem>{creature.a}</ListItem>
      <ListItem>{creature.b}</ListItem>
      <ListItem>{creature.c}</ListItem>
      <ListItem>{creature.d}</ListItem>
    </List>
  );
}
export default ProdListItem;
