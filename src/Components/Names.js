import React from "react";

const Names = ({ name, sex }) => {
  return (
    <div className={sex === "m" ? "name-m" : "name-f"}>
      <i className={sex === "m" ? "fas fa-mars" : "fas fa-venus"}></i>
      <span>{name}</span>
    </div>
  );
};

export default Names;
