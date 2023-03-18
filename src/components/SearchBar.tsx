import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" className="search-bar__input" />
      <button className="search-bar__btn">Search</button>
    </div>
  );
};

export default SearchBar;