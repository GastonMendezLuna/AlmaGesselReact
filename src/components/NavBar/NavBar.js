import logoAlma from '../../assets/img/logoAlma.gif'
import "./navbar.css";
import NavLink from './NavLink';
import CartWidget from '../CartWidget/CartWidget';
export default function NavBar() {
  function handleClick(){
    console.log('Click')
}
  
  return (
    <nav className='nav-main'>
        <ul className='nav-justify' >
            <img className='logo-nav' src={logoAlma} alt="logo"/>
            <NavLink handleOnClick={handleClick} title="Alma Villa Gesell"/>
            <NavLink handleOnClick={handleClick}title="Sobre nosotros"/>
            <NavLink handleOnClick={handleClick}title="Productos"/>
            <CartWidget handleOnClick={handleClick}title="carro"/>
            

            
        </ul>
    </nav>

    
  );
}

