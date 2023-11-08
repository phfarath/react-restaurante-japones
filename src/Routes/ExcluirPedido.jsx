import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ListaPedidos} from '../Routes/Pedido';


function ExcluirPedido() {

  const { id } = useParams();
  const navigate = useNavigate();

  const PedidoListaById = ListaPedidos.filter((item) => item.id == id);
 
  const [pedido] = useState({
    id: PedidoListaById[0].id,
    nome: PedidoListaById[0].nome,
    quant: PedidoListaById[0].quant,
  });
 
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1);
    navigate('/pedidos');
  };

  return (
    <section>
      <h1>Excluir Pedido</h1>
      <div>
        <p>Nome : {pedido.nome}</p>
        <p>Quant : {pedido.quant}</p>
      </div>
      <div>
        <button onClick={handleExclude} >
          Excluir
        </button>
        <button onClick={() => navigate('/pedidos')}>
          Cancelar
        </button>
      </div>
    </section>
  );
}
export default ExcluirPedido;