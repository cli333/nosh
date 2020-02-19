import React, { useContext } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Header,
  Grid,
  GridColumn,
  GridRow,
  Segment,
  Container
} from "semantic-ui-react";

import { nutritionContext } from "../../context/NutritionProvider";
import SubmitFood from "./SubmitFood";

const Overview = () => {
  const {
    currentQuery,
    nutritionObject: { calories }
  } = useContext(nutritionContext);

  const averageDailyCalories = 2000;
  const caloriesConsumed = calories;
  const percentage = Number(
    (caloriesConsumed / averageDailyCalories) * 100
  ).toFixed(2);

  return (
    <Container>
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={5}
        styles={buildStyles({
          textSize: "10px",

          strokeLinecap: "butt",
          textColor: `${
            percentage > 60 ? "red" : percentage > 40 ? "yellow" : "green"
          }`,
          pathColor: `${
            percentage > 60 ? "red" : percentage > 40 ? "yellow" : "green"
          }`
        })}
      >
        <React.Fragment>
          <Grid>
            <GridColumn width={16}>
              <GridRow>
                <Segment>
                  <Header as="h2">{`${
                    currentQuery ? currentQuery : "Enter a food item!"
                  }`}</Header>
                </Segment>
              </GridRow>
              <GridRow>
                <Segment>
                  <SubmitFood />
                </Segment>
              </GridRow>
            </GridColumn>
          </Grid>
        </React.Fragment>
      </CircularProgressbarWithChildren>
    </Container>
  );
};

export default Overview;
