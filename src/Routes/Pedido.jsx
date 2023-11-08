import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../Routes/styles/pedido.module.css'


export const ListaPedidos=[
  {id:1, nome:'uramaki', quant:4},
  {id:2, nome:'niguiris', quant:3}
];
function Pedidos() {
  return (
    <section className={styles.pedidos}>
      <h1>Pedidos Gerais</h1>
      <div>
        <table>
          <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Quant</th>
                <th>Editar / Excluir</th>
            </tr>
          </thead>
          <tbody>
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.quant}</td>
                <td>
                  {' '}
                  <Link to={`/editar/pedidos/${item.id}`}>
                    <button>Editar</button>
                  </Link>{' '}
                  <Link to={`/excluir/pedidos/${item.id}`}>
                    <button>Deletar</button>
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/inserir/pedidos'}>Novo Pedido</Link>
      </div>
    </section>
  );
}
export default Pedidos;