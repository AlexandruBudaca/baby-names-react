import React from "react";

const Search = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search names"
        onChange={(e) => props.setSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
