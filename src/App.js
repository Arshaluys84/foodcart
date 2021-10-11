import {useState} from "react"
import { Top } from "./assets/Top";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen]=useState(false)
  
  const showCartHandler =()=>{
    setCartIsOpen(true)
  }
  const hideCartHandler=()=>{
    setCartIsOpen(false)
  }

  return (
    <CartProvider>

      <Header showCartHandler={showCartHandler}/>
     {cartIsOpen && <Cart hideCartHandler={hideCartHandler}/>}
      <main>
        <Meals />
        <Top />
      </main>
     </CartProvider>
  );
}

export default App;
