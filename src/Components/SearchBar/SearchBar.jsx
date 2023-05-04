import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          class="input-search"
          placeholder="Type to Search..."
        />
      </div>
    </>
  );
};

export default SearchBar;