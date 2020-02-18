import React from "react";
import { Header, Table } from "semantic-ui-react";
import NutritionFactsItem from "./NutritionFactsItem";

const NutritionFacts = () => {
  return (
    <React.Fragment>
      <Header as="h1">Nutrition Facts</Header>
      <Table basic="very" celled collapsing>
        <Table.Body>
          <Table.Cell>
            <Header as="h5" image>
              <Header.Content>Calories</Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>{0}</Table.Cell>
          <NutritionFactsItem item="Carbs" />
          <NutritionFactsItem item="Protein" />
          <NutritionFactsItem item="Fat" />
          <NutritionFactsItem item="Iron" />
          <NutritionFactsItem item="Sodium" />
          <NutritionFactsItem item="Calcium" />
          <NutritionFactsItem item="Fiber" />
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default NutritionFacts;
