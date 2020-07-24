import React from "react";
import { ListContainer, ListItem, Empty } from "./_styles";

const List: React.StatelessComponent<{
  items: string[];
}> = ({ items }) => {
  if (items.length === 0) {
    return <Empty>Nothing found</Empty>;
  }
  return (
    <ListContainer>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ListContainer>
  );
};

export default List;
