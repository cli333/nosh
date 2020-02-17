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
    // axios
    //   .get("http://localhost:5000/1_cup_sugar")
    //   .then(() => {
    //   });
  }, [food]);

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
