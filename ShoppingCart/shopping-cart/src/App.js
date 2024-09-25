import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ProductList from './component/ProductList.jsx'
import SearchComponent from './component/SearchComponent.jsx';
import CartComponent from './component/CartComponent.jsx';
function App() {
  const products = [{ id: 1, Pname: "Tshirt1", image: "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png", Price: 499, quantity: 1 }, { id: 2, Pname: "Tshirt2", image: "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png", Price: 299, quantity: 1 }, { id: 3, Pname: "Tshirt3", image: "https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png", Price: 199, quantity: 1 }];
  const [cart, setCart] = useState([]);
  const increaseQuantityOfProductInCart = (id) => {
    debugger
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCart(updatedCart);
  }

  const decreaseQuantity = (id) => {
    debugger
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item);
    setCart(updatedCart);
  }

  const removeFromCart = (id) => {
    debugger
    let updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  }

  const totalAmountCalculationFunction = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  }
  return (
    <div className="App">
      <SearchComponent />
      <ProductList products={products} setCart={setCart} cart={cart} />
      <CartComponent cart={cart} increaseQuantityOfProductInCart={increaseQuantityOfProductInCart} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} totalAmountCalculationFunction={totalAmountCalculationFunction} />
    </div>
  );
}

export default App;
