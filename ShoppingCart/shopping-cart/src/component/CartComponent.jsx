import React from 'react'
import '../component/productList.css';
const CartComponent = ({cart,increaseQuantityOfProductInCart,decreaseQuantity,removeFromCart,totalAmountCalculationFunction}) => {
  return (
    <div className='cart-container'>
    <div className={`cartpage ${cart.length>0 ? 'active': 'hidden'}`}>
    <h1>My Cart</h1>
    {cart.map(cartItem =>

        <div>
            <div className='product-cart'>
                <div className='cart-image'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230823165506/gfg1.png" />
                </div>
                <div className='cart-details'>
                <h4>{cartItem.Pname}</h4>
                <span className='price'>Price: {cartItem.Price}</span>
                </div>
            </div>
            <div className='cart-actions'>
                <button onClick={() => removeFromCart(cartItem.id)} className='removebtn'>Remove</button>
                <button onClick={() => increaseQuantityOfProductInCart(cartItem.id)} className='inquantity'>+</button>
                <span>{cartItem.quantity}</span>
                <button onClick={() => decreaseQuantity(cartItem.id)} className='decquantity'>-</button>
            </div>
            <div className='partitonLineCart'></div>
        </div>
    )}
    <span>Total Amount:{totalAmountCalculationFunction()}</span>
</div>
</div>
  )
}

export default CartComponent