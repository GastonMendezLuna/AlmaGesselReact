import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';


function App() {
  return (
   
    <div>
      <NavBar/>
      <ItemListContainer title="Artesanias" description="Con el arte como guia"/>
    </div>
    
    
  );
}



export default App;
