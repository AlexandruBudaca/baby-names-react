import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import Names from "./Components/Names";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

function App() {
  const [filterNames, setFilterNames] = useState(babyNamesData);
  const [favNames, setFavNames] = useState([]);

  const addFavorites = (name) => {
    setFavNames((names) => [...names, name]);

    const updNames = filterNames.filter((babyName) => babyName.id !== name.id);
    setFilterNames(updNames);
  };

  const removeFavorites = (name) => {
    setFavNames(favNames.filter((babyName) => babyName.id !== name.id));

    setFilterNames([...filterNames, name]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="container-box">
            <Search data={babyNamesData} setFilterNames={setFilterNames} />

            <div className="favorites">
              Favorites:
              <div>
                <Favorites data={favNames} setFavNames={removeFavorites} />
              </div>
            </div>

            <div>
              <hr />
            </div>

            <div className="container-names">
              <Names data={filterNames} setFavNames={addFavorites} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
