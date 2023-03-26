import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div className="flex-grow flex-col ">
        <div className="bg-white border border-red-500 bg-opacity-20 p-20 rounded-2xl max-w-2xl w-full mx-auto">
          <h3 className="text-center font-semibold text-red-500 text-lg">Page Not Found</h3>
        </div>
      </div>
    );
  }
}
export default NotFound;
