import Form from '../components/Form';
import React, { Component } from 'react';

class Forms extends Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      results: [
        {
          name: 'Den',
          date: '2023-03-12',
          checkbox: true,
          radio: 'male',
          select: 'option1',
        },
        {
          name: 'Ben',
          date: '2023-03-12',
          checkbox: true,
          radio: 'male',
          select: 'option1',
        },
      ],
    };
  }

  render() {
    return (
      <div className="flex-grow flex-col">
        <Form />
      </div>
    );
  }
}

export default Forms;
