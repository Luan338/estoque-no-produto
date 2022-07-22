import React, { Component } from "react";

export default class App extends Component {
  state = {
    nomeProduto: "Iphone 12",
    precoProduto: 4000,
    estoqueProduto: 3,
    corProduto: "Branco"
  };

  comprarProduto = () => {
    if (this.state.estoqueProduto > 0) {
      this.setState({
        estoqueProduto: this.state.estoqueProduto - 1
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Produto: {this.state.nomeProduto}</h1>
        <h2>Preço: R$ {this.state.precoProduto}</h2>
        <h2>Estoque: {this.state.estoqueProduto}</h2>
        <h2>Cor: {this.state.corProduto}</h2>

        {this.state.estoqueProduto > 0 ? (
          <button onClick={this.comprarProduto}>Comprar produto</button>
        ) : (
          <button disabled>Produto esgotado !</button>
        )}
      </div>
    );
  }
}
