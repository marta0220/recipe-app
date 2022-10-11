import React, { useState } from "react";
import axios from "axios";
import Ingredients from "./Ingredients";

export default function RecipeInfo({ id }) {
  let [notCalled, setNotCalled] = useState(true);
  let [info, setInfo] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setNotCalled(false);
    setInfo(response.data);
  }
  function searchInfo() {
    const apiKey = `8e4a994957ff4e7b9f0a25b52cedb0f1`;
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (notCalled) {
    searchInfo();
    return null;
  } else {
    return (
      <div className="RecipeInfo">
        <div className="name">{info.data.title}</div>
        <Ingredients ingredients={info.extendedIngredients} />
      </div>
    );
  }
}
