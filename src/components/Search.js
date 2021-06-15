import React, { useState } from "react";

function Search({handleSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(e.target.value)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={""}
        onChange={handleSubmit}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
