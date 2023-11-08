import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Routes/Home.jsx';
import Login from './Routes/Login.jsx';
import Sobre from './Routes/Sobre.jsx';
import Produtos from './Routes/Produtos.jsx';
import Pedidos from './Routes/Pedido.jsx';
import Error from './Routes/Error.jsx';
import InserirProduto from './Routes/InserirProduto.jsx';
import InserirPedido from './Routes/InserirPedido.jsx';
import ExcluirProduto from './Routes/ExcluirProduto.jsx';
import ExcluirPedido from './Routes/ExcluirPedido.jsx';
import EditarProduto from './Routes/EditarProduto.jsx';
import EditarPedido from './Routes/EditarPedido.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/pedidos', element: <Pedidos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/inserir/produtos', element: <InserirProduto /> },
      { path: '/inserir/pedidos', element: <InserirPedido /> },
      { path: '/editar/produtos/:id', element: <EditarProduto /> },
      { path: '/editar/pedidos/:id', element: <EditarPedido /> },
      { path: '/excluir/produtos/:id', element: <ExcluirProduto /> },
      { path: '/excluir/pedidos/:id', element: <ExcluirPedido /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);


