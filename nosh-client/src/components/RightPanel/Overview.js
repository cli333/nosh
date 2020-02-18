import React, { Component } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class Overview extends Component {
  render() {
    const averageDailyCalories = 2000;
    const caloriesConsumed = 300;
    const percentage = Number(
      (caloriesConsumed / averageDailyCalories) * 100
    ).toFixed(2);

    return (
      <div className="overview">
        <CircularProgressbarWithChildren
          value={percentage}
          text={`${caloriesConsumed} Calories`}
          strokeWidth={5}
          styles={buildStyles({
            textSize: "10px",
            strokeLinecap: "butt",
            textColor: `${
              percentage > 60 ? "red" : percentage > 40 ? "yellow" : "green"
            }`,
            pathColor: `${
              percentage > 60 ? "red" : percentage > 40 ? "yellow" : "green"
            }`
          })}
        ></CircularProgressbarWithChildren>
      </div>
    );
  }
}

export default Overview;
