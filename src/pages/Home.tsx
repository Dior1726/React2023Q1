import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';

class Home extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className="flex-grow flex-col ">
        <div className="bg-white bg-opacity-20 p-20 rounded-2xl max-w-2xl w-full mx-auto">
          <h3 className="mb-10 text-center font-semibold text-lg">RS School Powered Search</h3>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Home;
