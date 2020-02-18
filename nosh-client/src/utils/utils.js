export const isValidNutrition = object => {
  return Object.keys(object.totalNutrients).length > 0;
};
