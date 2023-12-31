import React from 'react';
import TabelaProdutos from './TabelaProdutos'; // Importe o componente

const App = () => {
  const produtos = [
    {id: 1, nome: "Produto 1", preco: 150.0},
    {id: 2, nome: "Produto 2", preco: 100.0},
    {id: 3, nome: "Produto 3", preco: 100.0},
    {id: 4, nome: "Produto 4", preco: 190.0},
    {id: 5, nome: "Produto 5", preco: 200.0}
  ];

  return (
    <div>
      <TabelaProdutos produtos={produtos} /> 
    </div>
  );
};

export default App;
