import "./navbar.css";
export default function ItemListContainer({title, description}) {

    
  return (
    <div>
      <h1 className="titleItem">{title}</h1>
      <p className="descriptionItem">{description}</p>
    </div>
  )
}