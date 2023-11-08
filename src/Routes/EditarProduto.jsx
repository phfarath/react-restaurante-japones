import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from './Produtos';
import { useState } from 'react';

function EditarProduto() {
  const { id } = useParams();

  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);


  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    valor: recProdutoListaById[0].valor,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1, produto);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section >
      <h1 >EDITAR PRODUTOS</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO SELECIONADO</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={produto.id}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idNome">Nome da Peca:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}

              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idValor">Valor da Peca:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              value={produto.valor}

              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" >EDITAR</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default EditarProduto;