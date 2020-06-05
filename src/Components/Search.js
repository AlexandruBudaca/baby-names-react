import React from "react";

const Search = ({ data, setFilterNames }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search names"
        onChange={(e) => {
          const filterBabyNames = data.filter((babyName) =>
            babyName.name.includes(e.target.value)
          );
          setFilterNames(filterBabyNames);
        }}
      ></input>
    </div>
  );
};

export default Search;
