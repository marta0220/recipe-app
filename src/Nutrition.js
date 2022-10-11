import React from "react";
export default function Nutrition({ nutrition }) {
  return (
    <div className="Nutrition row">
      <div className="col-md-6">
        <h3>Nutrients:</h3>
        {nutrition.nutrients.map(function (nutrient, index) {
          return (
            <div key={index}>
              <strong>{nutrient.name}</strong> -{nutrient.amount}
              {nutrient.unit}
              <small>
                {" "}
                ({Math.round(nutrient.percentOfDailyNeeds)} % of daily needs)
              </small>
            </div>
          );
        })}
      </div>
      <div className="col-md-6">
        {" "}
        <h3>Flavonoids</h3>{" "}
        {nutrition.flavonoids.map(function (flavonoid, index) {
          return (
            <div key={index}>
              <strong>{flavonoid.name}</strong> -{flavonoid.amount}
              {flavonoid.unit}
            </div>
          );
        })}
      </div>
    </div>
  );
}
