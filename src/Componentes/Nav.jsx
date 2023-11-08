import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo_de_um_restaurante_japones_com_nome_shumaki-removebg-preview.png'
import styles from '../Routes/styles/nav.module.css'


function Nav() {
//   hook UseNavigate
    const navigate = useNavigate();

    const handleLogout = async ()=>{
        sessionStorage.removeItem('useData');
        sessionStorage.removeItem('senhaData');
        alert("saindo da sessão");
        navigate('/');
      }

  return (
    <>
    <header className={styles.header}>
            <img src={logo} alt="logo do restaurante" /> 
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to ="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <button onClick={handleLogout} >Logout</button>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Nav;