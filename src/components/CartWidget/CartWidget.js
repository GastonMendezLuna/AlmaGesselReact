import carro from '../../assets/img/carro.png'
export default function CartWidget ({handleClick, children}) {
    
    return (
      
      <li >
        {children}
          <img handleonclick={handleClick} className='carro' src={carro} alt="carro"/>
        </li>
    )
  
  }
  
  