import React, { createContext, useState } from "react";

export const nutritionContext = createContext();

const NutritionProvider = ({ children }) => {
  const [nutritionObject, setNutritionObject] = useState({
    calories: 0,
    dietLabels: [],
    healthLabels: [],
    totalNutrients: {}
  });
  const [currentQuery, setCurrentQuery] = useState(null);

  const resetNutritionObj = () => {
    setNutritionObject({
      calories: 0,
      dietLabels: [],
      healthLabels: [],
      totalNutrients: {}
    });
  };

  return (
    <nutritionContext.Provider
      value={{
        nutritionObject,
        setNutritionObject,
        currentQuery,
        setCurrentQuery,
        resetNutritionObj
      }}
    >
      {children}
    </nutritionContext.Provider>
  );
};

export default NutritionProvider;
