import { useState } from 'react';
import { ListaPedidos } from '../Routes/Pedido';
import { Link, useNavigate } from 'react-router-dom';

function InserirPedido() {
    const navigate = useNavigate();
  
    // novo ID
    let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;


    const [pedido, setPedido] = useState({
        id: novoId,
        nome: '',
        quant: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        ListaPedidos.push(pedido);
        navigate('/pedidos');
      };

      const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setPedido({ ...pedido, [name]: value });
      };
      return (
        <section>
          <h1>Pedidos</h1>
          <Link to="/pedidos">Ver Pedidos</Link>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Pedido:</legend>
              <p>
                <label htmlFor="idNome"> Nome da Peca:</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
               
                  value={pedido.nome}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label htmlFor="idQuant">Quantidade de Pecas:</label>
                <input
                  type="text"
                  name="quant"
                  id="idQuant"
                  
                  value={pedido.quant}
                  onChange={handleChange}
                />
              </p>
              <p>
                <button type="submit">
                  PEDIR
                </button>
              </p>
            </fieldset>
          </form>
        </section>
      );
    }
export default InserirPedido;