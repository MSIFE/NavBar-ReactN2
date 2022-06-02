import CartWidget from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";



function App() {

  function hacerUnAlert() {
    alert("hola mundo");
  }
return (  
<div className="container">
<NavBar />,
<CartWidget />
<ItemListContainer />
{/* <Saludar quien={"Juan Maria"} msg={"Hola como va"} hacerUnAlert={hacerUnAlert}/> */}

</div>
  );
}

export default App;
