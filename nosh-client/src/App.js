import React, { useEffect } from "react";
import firebase from "./firebase/firebase";
import { Grid, GridColumn, GridRow, Divider, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import axios from "axios";
import SubmitFood from "./components/LeftPanel/SubmitFood";
import NutritionSummary from "./components/LeftPanel/NutritionSummary";
import Overview from "./components/RightPanel/Overview";

function App() {
  let food = "1_large_banana";

  useEffect(() => {
    // (async () => {
    //   await axios.get(`http://localhost:5000/${food}`);
    //   let foodRef = await firebase
    //     .firestore()
    //     .collection("noshes")
    //     .doc(food);
    //   foodRef.get().then(res => console.log(res.data()));
    // })();
  }, [food]);

  // noshes are stored as "1_large_banana": {...}

  // NOSH FORMATTING!:!::!!:
  //  Enter an ingredient like "1 cup rice", etc.
  // replace all \s with '_'

  return (
    <Grid>
      <GridColumn width={3}>
        <GridRow>
          <Segment>
            <SubmitFood />
          </Segment>
        </GridRow>
        <Divider horizontal>Or</Divider>
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
