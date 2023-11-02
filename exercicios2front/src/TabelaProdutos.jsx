import React from 'react';

const TabelaProdutos = ({ produtos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaProdutos;
