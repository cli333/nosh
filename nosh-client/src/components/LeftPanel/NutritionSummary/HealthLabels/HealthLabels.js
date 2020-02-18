import React from "react";
import { Header, Grid, List } from "semantic-ui-react";
import HealthLabelsItem from "./HealthLabelsItem";

const HealthLabels = () => {
  return (
    <React.Fragment>
      <Header as="h1">Health Labels</Header>
      <Grid>
        <Grid.Column>
          <List bulleted>
            {/*  limit list to 5 items, TEMP ITEMS */}
            <HealthLabelsItem item="Vegan" />
            <HealthLabelsItem item="Vegetarian" />
            <HealthLabelsItem item="Low Sugar" />
            <HealthLabelsItem item="Dairy Free" />
            <HealthLabelsItem item="Gluten Free" />
          </List>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default HealthLabels;
