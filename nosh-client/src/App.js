import React, { useEffect } from "react";
import firebase from "./firebase/firebase";

import axios from "axios";

function App() {
  let food = "1_large_banana";

  useEffect(() => {
    (async () => {
      await axios.get(`http://localhost:5000/${food}`);
      let foodRef = await firebase
        .firestore()
        .collection("noshes")
        .doc(food);
      foodRef.get().then(res => console.log(res.data()));
    })();
  }, [food]);

  // noshes are stored as "1_large_banana": {...}

  // on load, fetch noshes sorted by date, push to array
  // if the current search item isn't in the array
  // then go to backend
  // else return the item from the array

  // NOSH FORMATTING!:!::!!:
  //  Enter an ingredient like "1 cup rice", etc.
  // replace all \s with '_'

  return (
    <div>
      hello world
      <div>
        <h1>Testing here</h1>
      </div>
    </div>
  );
}

export default App;
