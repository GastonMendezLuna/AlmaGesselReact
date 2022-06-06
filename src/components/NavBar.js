
import logoAlma from '../assets/img/logoAlma.gif';
import "./navbar.css";
export default function NavBar() {
  
  return (
    <nav className="nav-main">
        <ul>
            <img className='logo-nav' src={logoAlma} alt="logo"/>
            <li>Alma Gesell</li>
            <li>Sobre Nosotros</li>
            <li>Productos</li>
            <li>Carrito</li>
        </ul>
    </nav>

    
  );
}

