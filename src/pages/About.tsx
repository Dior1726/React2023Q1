import React, { Component } from 'react';

class About extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className="flex-grow flex-col ">
        <div className="bg-white bg-opacity-20 p-20 rounded-2xl max-w-2xl w-full mx-auto">
          <h3 className="text-center font-semibold text-lg">About Page</h3>
        </div>
      </div>
    );
  }
}

export default About;
