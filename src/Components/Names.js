import React from "react";

const Names = ({ data, favNames, setFavNames }) => {
  return data.map((name) => (
    <button
      className={name.sex === "m" ? "name-m" : "name-f"}
      key={name.id}
      onClick={() => {
        if (data.some((names) => names.id === name.id)) {
          setFavNames([
            ...favNames,
            data.find((favName) => favName.id === name.id),
          ]);
        }
      }}
    >
      <i className={name.sex === "m" ? "fas fa-mars" : "fas fa-venus"}></i>
      {name.name}
    </button>
  ));
};

export default Names;
