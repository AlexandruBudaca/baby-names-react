import React from "react";

const Names = ({ data, favNames, setFavNames }) => {
  return data.map((name) => (
    <div
      className={name.sex === "m" ? "name-m" : "name-f"}
      key={name.id}
      onClick={() => {
        setFavNames(data.filter((name) => name.id === data.id));
      }}
    >
      <i className={name.sex === "m" ? "fas fa-mars" : "fas fa-venus"}></i>
      {name.name}
    </div>
  ));
};

export default Names;
