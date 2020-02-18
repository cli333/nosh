import React from "react";
import { Table, Header } from "semantic-ui-react";

const NutritionFactsItem = ({ item, quantity, unit }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h5" image>
          <Header.Content>{item}</Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        {Math.floor(quantity)} {unit}
      </Table.Cell>
    </Table.Row>
  );
};

export default NutritionFactsItem;
