const express = require("express");
const app = express();
const port = 5000;

const axios = require("axios");
const { edaAppKey, edaAppId } = require("./apis/edamam");

app.get("/:food", async (req, res) => {
  let food = req.params.food;
  let url = `https://api.edamam.com/api/nutrition-data?app_id=${edaAppId}&app_key=${edaAppKey}&ingr=1%20large%20${food}`;
  try {
    let result = await axios.get(url);
    console.log(url, result.data);
    res.send("console logged ${food}");
  } catch (error) {
    console.log(error);
    res.send("error finding ${food}");
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
