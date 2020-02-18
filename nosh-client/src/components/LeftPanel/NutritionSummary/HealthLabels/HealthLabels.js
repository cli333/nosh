import React, { useContext } from "react";
import { Header, Grid, List, Card } from "semantic-ui-react";
import HealthLabelsItem from "./HealthLabelsItem";
import { nutritionContext } from "../../../../context/NutritionProvider";

const HealthLabels = () => {
  const {
    nutritionObject: { healthLabels }
  } = useContext(nutritionContext);

  const displayHealthLabels = () => {
    return healthLabels
      .slice(0, 5)
      .map(item => <HealthLabelsItem key={item} item={item} />);
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>Health Labels</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Column>
              <List bulleted>
                {healthLabels.length > 0 ? (
                  displayHealthLabels()
                ) : (
                  <React.Fragment>
                    <HealthLabelsItem item="Vegan" />
                    <HealthLabelsItem item="Vegetarian" />
                    <HealthLabelsItem item="Low Sugar" />
                    <HealthLabelsItem item="Dairy Free" />
                    <HealthLabelsItem item="Gluten Free" />
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

export default HealthLabels;
