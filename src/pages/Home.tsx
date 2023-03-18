import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="flex-grow flex justify-center items-center flex-col ">
      <div className="bg-white bg-opacity-20 p-20 rounded-2xl">
        <h3 className="mb-10 text-center font-semibold text-lg">RS School Powered Search</h3>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
