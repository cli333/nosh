import React, { useContext } from "react";
import { Grid, List, Card } from "semantic-ui-react";
import DietLabelsItem from "./DietLabelsItem";
import { nutritionContext } from "../../../../context/NutritionProvider";

const DietLabels = () => {
  const {
    nutritionObject: { dietLabels }
  } = useContext(nutritionContext);

  const displayLables = () => {
    return dietLabels
      .slice(0, 3)
      .map(item => <DietLabelsItem key={item} item={item} />);
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>Diet Labels</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Column>
              <List bulleted>
                {dietLabels.length > 0 ? (
                  displayLables()
                ) : (
                  <React.Fragment>
                    <DietLabelsItem item="HIGH PROTEIN" />
                    <DietLabelsItem item="LOW FAT" />
                    <DietLabelsItem item="LOW CARB" />
                  </React.Fragment>
                )}
              </List>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default DietLabels;
