import React, { Component } from 'react';

class Card extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta porro, recusandae
        illum ex sapiente iure, natus corporis pariatur et consequatur eaque perspiciatis vero
        dolorem aperiam suscipit? Excepturi, temporibus necessitatibus!
      </h1>
    );
  }
}

export default Card;
