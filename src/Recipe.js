import React, { useState } from "react";
import axios from "axios";

import RecipeInfo from "./RecipeInfo";
export default function Recipe({ defaultRecipe }) {
  let [loaded, setLoaded] = useState(false);
  let [query, setQuery] = useState(defaultRecipe);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data.results);
    setLoaded(true);
  }
  function search() {
    const apiKey = `e5405f060c494571b6b5fb986ac845cd`;
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=2&apiKey=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    //Documentation: https://spoonacular.com/food-api/docs
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateQuery(event) {
    setQuery(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Recipe">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={updateQuery}
            placeholder="what recipe are you looking for?"
            className="input-text"
          ></input>
          <div className="pt-2">
            <input
              type="submit"
              value="Search a Recipe"
              className="btn btn-light"
            ></input>
          </div>
        </form>
        {results.map(function (result, index) {
          return (
            <div key={index}>
              <RecipeInfo id={result.id} />
            </div>
          );
        })}
      </div>
    );
  } else {
    search();
    return null;
  }
}
