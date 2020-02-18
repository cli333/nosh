import React from "react";
import NutritionFacts from "./NutritionFacts/NutritionFacts";
import HealthLabels from "./HealthLabels/HealthLabels";
import DietLabels from "./DietLabels/DietLabels";

const NutritionSummary = () => {
  return (
    <React.Fragment>
      <NutritionFacts />
      <HealthLabels />
      <DietLabels />
    </React.Fragment>
  );
};

export default NutritionSummary;
