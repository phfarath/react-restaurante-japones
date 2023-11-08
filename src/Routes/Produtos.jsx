import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../Routes/styles/produtos.module.css'


export const ListaProdutos = [
  {id:1, nome:'niguiris', valor:'38,98'},
  {id:2, nome:'uramaki', valor:'29,90'},
  {id:3, nome:'philadelfia', valor:'31,47'}
];

function Produtos() {
  return (
    <section className={styles.produtos} >
      <h1>Cardapio</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preco</th>
              <th>Editar / Excluir</th>
            </tr>
          </thead>
          <tbody>
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  <Link to={`/editar/produtos/${item.id}`}>
                    <button>Editar</button>
                  </Link>{' '}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <button>Excluir</button>
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/inserir/produtos'}>Cadastro</Link>
      </div>
    </section>
  );
}
export default Produtos;