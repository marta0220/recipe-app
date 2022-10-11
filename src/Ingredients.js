import React from "react";
export default function Ingredients({ ingredients }) {
  console.log(ingredients);
  return (
    <div className="Ingredients p-2">
      <h3>Ingredients:</h3>
      {ingredients.map(function (ingredient, index) {
        return <div key={index}> - {ingredient.original}</div>;
      })}
    </div>
  );
}
