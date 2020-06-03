import React from "react";

const Search = ({ data, search, setSearch, setFilterName }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search names"
        onChange={(e) => {
          setSearch(e.target.value);
          const filterBabyNames = data.filter((babyName) =>
            babyName.name.includes(search.toLowerCase())
          );
          setFilterName(filterBabyNames);
        }}
      ></input>
    </div>
  );
};

export default Search;
