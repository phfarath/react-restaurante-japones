import { useRef } from 'react';
import Pedidos from '../Routes/Pedido.jsx';
import styles from '../Routes/styles/login.module.css'

export const getUser = sessionStorage.getItem('userData');
export const getSenha = sessionStorage.getItem('senhaData');
function Login() {

  const user = useRef();
  const password = useRef();

  
  const handleSubmit = () => {
    if (user.current.value === 'usuario' && password.current.value === '123') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'usuario');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <section className={styles.login}>
      {}
      {getUser && getSenha ? (
        <Pedidos />
        ) : (
          <>
          <h1>Login</h1>
          {/* chamando a função handleSubmit dentro do form*/}
        <form onSubmit={handleSubmit}>
          <p>
            USUÁRIO:
            {/* passando a referencia no usuario */}
            <input type="text" ref={user} />
          </p>
          <br />
          <p>
            SENHA:
            {/* passando a referencia na senha */}
            <input type="password" ref={password} />
          </p>
          <br />
          <input type="submit" value="Login" />
        </form>
        </>
      )}
    </section>
  );
}

export default Login;