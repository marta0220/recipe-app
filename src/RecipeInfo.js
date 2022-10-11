import React, { useState } from "react";
import axios from "axios";

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
export default function RecipeInfo({ id }) {
  let [notCalled, setNotCalled] = useState(true);
  let [info, setInfo] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setNotCalled(false);
    setInfo(response.data);
  }
  function searchInfo() {
    const apiKey = `e5405f060c494571b6b5fb986ac845cd`;
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
    axios.get(apiUrl).then(handleResponse);
    //Documentation: https://spoonacular.com/food-api/docs
  }

  if (notCalled) {
    searchInfo();
    return null;
  } else {
    return (
      <div className="RecipeInfo">
        <h2 className="name">{info.title}</h2>
        <div className="row p-2">
          <div className="col-md-6">
            <img src={info.image} alt={info.title} className="img-fluid"></img>
          </div>
          <div className="col-md-6 text-start">
            {" "}
            <Ingredients ingredients={info.extendedIngredients} />
          </div>
          {info.analyzedInstructions.map(function (instruction, index) {
            return (
              <div key={index}>
                <Instructions instruction={instruction} />
              </div>
            );
          })}
          <Nutrition nutrition={info.nutrition} />
        </div>
      </div>
    );
  }
}
