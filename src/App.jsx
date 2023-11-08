import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Componentes/Nav'
import Footer from './Componentes/Footer'
/*importando a biblioteca de efeitos e transições como slidsow*/
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {


  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
