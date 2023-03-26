import React, { Component } from 'react';

interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

interface IProducts {
  products: IProduct[];
}

class CardList extends Component<IProducts, IProducts> {
  constructor(props: IProducts) {
    super(props);

    this.state = Object.assign({}, props);
  }

  card(product: IProduct) {
    return (
      <article
        className="p-4 bg-white bg-opacity-20 rounded-2xl flex flex-col justify-between"
        key={product.id}
      >
        <header>
          <h4 className="font-bold text-xl mb-4">{product.title}</h4>
          <p className="text-gray-300 mb-4"> {product.description}</p>
        </header>
        <main>
          <img
            className="w-full h-[200px] object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
        </main>
      </article>
    );
  }

  render() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {this.state.products.map((product) => this.card(product))}
      </div>
    );
  }
}

export default CardList;
