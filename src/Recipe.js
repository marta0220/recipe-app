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
    const apiKey = `8e4a994957ff4e7b9f0a25b52cedb0f1`;
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
            placeholder="what are you looking for?"
          ></input>
          <input type="submit" value="Search a Recipe"></input>
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
