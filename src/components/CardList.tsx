import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default CardList;
