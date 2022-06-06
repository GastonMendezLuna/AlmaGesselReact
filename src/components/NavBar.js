
import logoAlma from '../assets/img/logoAlma.gif';
import "./navbar.css";
export default function NavBar() {
  
  return (
    <nav className='nav-main'>
        <ul className='nav-justify' >
            <img className='logo-nav' src={logoAlma} alt="logo"/>
            <li className='link-nav' >Alma Gesell</li>
            <li className='link-nav'>Sobre Nosotros</li>
            <li className='link-nav'>Productos</li>
            <li className='link-nav'>Carrito</li>
        </ul>
    </nav>

    
  );
}

