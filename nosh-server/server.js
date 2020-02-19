const express = require("express");
const app = express();
const port = 5000;

const { firebase } = require("./firebase/firebase");
const axios = require("axios");

const { edaAppKey, edaAppId } = require("./apis/edamam");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/:food", async (req, res) => {
  let food = req.params.food;
  let url = `https://api.edamam.com/api/nutrition-data?app_id=${edaAppId}&app_key=${edaAppKey}&ingr=${food}`;
  try {
    let result = await axios.get(url);

    const {
      calories,
      dietLabels,
      healthLabels,
      cautions,
      totalNutrients
    } = result.data;

    await firebase
      .firestore()
      .collection("noshes")
      .doc(req.params.food)
      .set({
        calories,
        dietLabels,
        healthLabels,
        cautions,
        totalNutrients
      });

    await firebase
      .firestore()
      .collection("noshes")
      .doc(req.params.food)
      .get()
      .then(doc => {
        console.log(doc.data());
        res.send(doc.data());
      });
  } catch (error) {
    res.send({
      error: {
        message:
          "We had a problem analysing this. Please check the ingredient spelling or if you have entered a quantities for the ingredients."
      }
    });
  }
});

app.get("*", (req, res) => {
  res.send("Nothing here!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
