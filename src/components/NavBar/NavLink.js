
export default function NavLink({title, handleOnClick}) {
console.log(title, handleOnClick); 
  return (
    <li onClick={handleOnClick}>{title}</li>
  )
}

