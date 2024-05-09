import React, { Component } from 'react';
import TdtProductList from './component/TdtProductList';
import TdtProductAdd from './component/TdtProductAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: 'Truong Dinh Tuyen', id: 2210900134, status: 1 },
        { title: 'Cabbage', id: 1, status: 1 },
        { title: 'Garlic', id: 2, status: 0 },
        { title: 'Apple', id: 3, status: 0 },
        { title: 'SamSung', id: 4, status: 1 },
      ]
    };
  }

  addProduct = (product) => {
    const updatedProducts = [...this.state.products, product];
    this.setState({ products: updatedProducts });
  };

  render() {
    return (
      <div className="container border mt-5">
        <h1>Truong Dinh Tuyen - Render data</h1>
        <hr />
        <TdtProductList renderProducts={this.state.products} />
        <hr />
        <TdtProductAdd addProduct={this.addProduct} />
      </div>
    );
  }
}

export default App;