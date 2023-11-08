import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../Routes/Produtos';


function ExcluirProduto() {

  const { id } = useParams();
  const navigate = useNavigate();

  const ProdutoListaById = ListaProdutos.filter((item) => item.id == id);
 
  const [produto] = useState({
    id: ProdutoListaById[0].id,
    nome: ProdutoListaById[0].nome,
    valor: ProdutoListaById[0].valor,
  });
 
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return (
    <section>
      <h1>Excluir Produto</h1>
      <div>
        <p>Nome : {produto.nome}</p>
        <p>Valor : {produto.valor}</p>
      </div>
      <div>
        <button onClick={handleExclude} >
          Excluir
        </button>
        <button onClick={() => navigate('/produtos')}>
          Cancelar
        </button>
      </div>
    </section>
  );
}
export default ExcluirProduto;