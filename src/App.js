import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import Names from "./Components/Names";

function App() {
  const [searchNames, setSearchNames] = useState("");

  const filteredNames = babyNamesData.filter((babyName) =>
    babyName.name.includes(searchNames.toLowerCase())
  );

  filteredNames.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="container-box">
            <div>
              <input
                type="text"
                placeholder="Search names"
                onChange={(e) => setSearchNames(e.target.value)}
              ></input>
            </div>

            <div className="favourites">
              <p>Favourites: </p>
            </div>
            <div>
              <hr />
            </div>

            <div className="container-names">
              {filteredNames.map((baby) => (
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
