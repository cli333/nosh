const edaAppId = "aec3eced";
const edaAppKey = "185fd942547f71d697b967f042339d55";

// eg
// ingredient = 1 large apple
// const ingr = ingredient.split(" ").join('%20')
// `https://api.edamam.com/api/nutrition-data?app_id=${edAppId}&app_key=${edaAppKey}&ingr=1%20large%20apple`

// Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
// Enter each ingredient on a new line.

module.exports = { edaAppId, edaAppKey };
