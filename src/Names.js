import React from "react";

const Names = ({ name, sex }) => {
  {
    console.log(name);
  }
  return (
    <div className={sex === "m" ? "name-m" : "name-f"}>
      <span>{name}</span>
    </div>
  );
};

export default Names;
