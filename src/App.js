import "./App.css";
import Recipe from "./Recipe";

function App() {
  return (
    <div className="App">
      <h1>Find YOUR Recipe</h1>
      <Recipe defaultRecipe={"pasta"} />
    </div>
  );
}

export default App;
