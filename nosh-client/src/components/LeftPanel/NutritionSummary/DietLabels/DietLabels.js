import React from "react";
import { Header, Grid, List } from "semantic-ui-react";
import DietLabelsItem from "./DietLabelsItem";

const DietLabels = () => {
  return (
    <React.Fragment>
      <Header as="h1">Diet Labels</Header>
      <Grid>
        <Grid.Column>
          <List bulleted>
            {/*  limit list to 3 items, TEMP ITEMS */}
            <DietLabelsItem item="HIGH PROTEIN" />
            <DietLabelsItem item="LOW FAT" />
            <DietLabelsItem item="LOW CARB" />
          </List>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default DietLabels;
