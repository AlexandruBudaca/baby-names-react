import React from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import Names from "./Names";

function App() {
  babyNamesData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="container-box">
            <div>
              <input></input>
            </div>
            <div className="favourites">
              <p>Favourites: </p>
            </div>
            <div className="container-names">
              {babyNamesData.map((baby) => (
                <Names key={baby.id} {...baby} />
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
