import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="outline-none rounded-sm p-2 text-gray-800 font-medium bg-white bg-opacity-80"
        placeholder="Type..."
      />
      <button className="py-2 px-4 bg-gray-800 text-white rounded-sm hover:bg-gray-900 transition-all transform active:scale-95">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
