import React, { useState } from 'react'

const Cart = () => {

  const itemsAvailable = ["Laptop", "Phone", "Shoes", "Tablet", "Rasberry Pi"]
  const [cartItems, setCartItems] = useState([])
  
  const addItem = (e) => {

    setCartItems((cart) => [...cartItems, e.target.value ])
  }

  return(
    <div>Click on the items to add to Cart
      <br/>
      <div className="cart">
        {itemsAvailable.map((items, index) => {
          return(
            <button value={items} onClick={addItem}>{items}</button>
          )
        })}
      </div>
      <div className="cart=items">
<ul>
{cartItems.map((items) => {
  return(
    <li>{items}</li>
  )
})}
</ul>
      </div>
    </div>
  )
}

export default Cart;