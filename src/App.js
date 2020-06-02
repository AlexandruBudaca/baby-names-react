import React, { useState, useEffect } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import Names from "./Components/Names";
import Search from "./Components/Search";

function App() {
  const [searchNames, setSearchNames] = useState("");
  const [favNames, setFavNames] = useState([]);

  const filterNames = babyNamesData.filter((babyName) =>
    babyName.name.includes(searchNames.toLowerCase())
  );

  filterNames.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="container-box">
            <Search setSearch={setSearchNames} />

            <div className="favorites">
              Favorites:
              <div>
                {favNames.map((name) => (
                  <button
                    className={name.sex === "m" ? "name-m" : "name-f"}
                    key={name.id}
                    onClick={(e) => {
                      let filteredArray = favNames.filter(
                        (babyName) => babyName.name !== name.name
                      );
                      setFavNames(filteredArray);
                    }}
                  >
                    <i
                      className={
                        name.sex === "m" ? "fas fa-mars" : "fas fa-venus"
                      }
                    ></i>
                    {name.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <hr />
            </div>

            <div className="container-names">
              <Names
                data={filterNames}
                favNames={favNames}
                setFavNames={setFavNames}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
