import React from "react";

const Favorites = ({ data, setFavNames }) => {
  return data.map((name) => (
    <button
      className={name.sex === "m" ? "name-m" : "name-f"}
      key={name.id}
      onClick={() => {
        setFavNames(name);
      }}
    >
      <i className={name.sex === "m" ? "fas fa-mars" : "fas fa-venus"}></i>
      {name.name}
    </button>
  ));
};
export default Favorites;
