import React, { useEffect } from "react";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import axios from "axios";
import SubmitFood from "./components/LeftPanel/SubmitFood";
import NutritionSummary from "./components/LeftPanel/NutritionSummary/NutritionSummary";
import Overview from "./components/RightPanel/Overview";

import { isValidNutrition } from "./utils/utils";

function App() {
  let food = "1%20can%20of%20tuna";

  useEffect(() => {
    (async () => {
      let response = await axios.get(`http://localhost:5000/${food}`);
      let nutritionObject = response.data;
      // let foodRef = await firebase
      //   .firestore()
      //   .collection("noshes")
      //   .doc(food);

      // foodRef.get().then(res => console.log(res.data()));
      if (isValidNutrition(nutritionObject)) {
        console.log(nutritionObject);
      } else {
        console.log("not a valid request");
      }
    })();
  }, [food]);

  return (
    <Grid>
      <GridColumn width={3}>
        <GridRow>
          <Segment>
            <SubmitFood />
          </Segment>
        </GridRow>

        <GridRow>
          <Segment>
            <NutritionSummary />
          </Segment>
        </GridRow>
      </GridColumn>
      <GridColumn width={9}>
        <Segment>
          <Overview />
        </Segment>
      </GridColumn>
    </Grid>
  );
}

export default App;
