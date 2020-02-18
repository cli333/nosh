import React from "react";
import { Grid, GridColumn, GridRow, Segment, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import NutritionSummary from "./components/LeftPanel/NutritionSummary/NutritionSummary";
import Overview from "./components/RightPanel/Overview";

function App() {
  return (
    <div
      style={{
        width: "75%",
        margin: "auto",
        padding: "10px"
      }}
    >
      <Grid>
        <GridColumn width={3}>
          <GridRow>
            <NutritionSummary />
          </GridRow>
        </GridColumn>
        <GridColumn width={12}>
          <Segment>
            <Overview />
          </Segment>
        </GridColumn>
      </Grid>
    </div>
  );
}

export default App;
