// check if valid nutrition object
export const isValidNutrition = object => {
  return typeof object === "object" && object.calories > 0;
};

// title case
export const toTitleCase = string => {
  return string
    .split("_")
    .map(word =>
      word
        .toLowerCase()
        .split("")
        .map((char, i) => (i === 0 ? char.toUpperCase() : char))
        .join("")
    )
    .join(" ");
};

export const convertQuery = input => {
  return input.replace(/_/g, "%20");
};
