import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div>
      <div className="container">
        <h3 className="search-bar__title">RS School Powered Search</h3>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
