import { useNavigate, useParams } from 'react-router-dom';
import {ListaPedidos} from '../Routes/Pedido';
import { useState } from 'react';

function EditarPedido() {
  const { id } = useParams();

  const navigate = useNavigate();

  const PedidoListaById = ListaPedidos.filter((item) => item.id == id);


  const [pedido, setPedido] = useState({
    id: PedidoListaById[0].id,
    nome: PedidoListaById[0].nome,
    quant: PedidoListaById[0].quant,
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1, pedido);
    navigate('/pedidos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <section >
      <h1 >EDITAR PEDIDOS</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Pedido escolhido</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={pedido.id}
            />
          </div>
          <div>
            <label htmlFor="idNome">Nome da Peca:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
              
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idQuant">Quantidade de Pecas:</label>
            <input
              type="text"
              name="quant"
              id="idQuant"
              value={pedido.quant}

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
export default EditarPedido;