import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    {
      name: "Book",
      available: 10,
      bought: 0
    },
    {
      name: "Phone",
      available: 10,
      bought: 0
    },
    {
      name: "Monitor",
      available: 10,
      bought: 0
    },
    {
      name: "Laptop",
      available: 10,
      bought: 0
    }
  ]);
  const [cart, setCart] = useState([]);

 
  const addToCart = (item, index, bought) => {
    console.log(items[index])
    setCart([
      ...cart, {
itemName: items[index].name,
Quantity: items[index].bought+1
      }
    ])

    console.log(cart)
    
  
    
  }

  return (
    <div>
      <div>
        <h1>I am Cart</h1>
        <div className="items-available">
          {items.map((item, index) => {
            return (
              <div>
                {item.name}{" "}
                <button
                  onClick={() =>
                    addToCart(items, index)
                  }
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
        <div className="cart">
          {/* {cart.map((cartItem) => {
            return(
              <li>{cartItem.itemName} {cartItem.quantity}</li>
            )
          })} */}

          Items in the cart

          {items.map((items) => {
            return(
              <li style={{listStyleType:"none"}}>{items.name} {items.bought} <button>+</button><button>-</button></li>
            )
          })}

        </div>
      </div>
    </div>
  );
};

export default Cart;
