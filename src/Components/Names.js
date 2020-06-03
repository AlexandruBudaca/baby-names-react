import React from "react";

const Names = ({ data, setFavNames }) => {
  return data
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((name) => (
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

export default Names;
