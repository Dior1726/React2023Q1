import React, { useState } from 'react';

interface ISearchBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearchList: (params: any) => void;
}

const SearchBar = ({ setSearchList }: ISearchBarProps) => {
  const [search, setSearch] = useState('');

  const searchHandler = () => {
    if (search !== '') {
      setSearchList((oldVal: string[]) => [...oldVal, search]);

      setSearch('');
    } else {
      alert('Enter something');
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="outline-none rounded-sm p-2 text-gray-800 font-medium bg-white bg-opacity-80"
        placeholder="Type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={searchHandler}
        className="py-2 px-4 bg-gray-800 text-white rounded-sm hover:bg-gray-900 transition-all transform active:scale-95"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
