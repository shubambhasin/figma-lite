import React, { useState } from "react";
import Cart from "./Cart";
import Contact from "./Contact";
import Figma from "./Figma";
import Home from "./Home";
import Todo from "./Todo";

const SwitchTabs = () => {
  const [isHome, setIsHome] = useState(false);
  const [isFigma, setIsFigma] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isCart, setIsCart] = useState(false)
  const [isTodo, setIsTodo] = useState(false)
  const showHome = () => {
    setIsHome(true);
    setIsFigma(false);
    setIsContact(false);
    setIsCart(false);
    setIsTodo(false);
    console.log("SHow home");
  };
  const showFigma = () => {
    setIsHome(false);
    setIsFigma(true);
    setIsContact(false);
    setIsCart(false);
    setIsTodo(false)
  };
  const showContact = () => {
    setIsHome(false);
    setIsFigma(false);
    setIsContact(true);
    setIsCart(false);
    setIsTodo(false)
  };
  const showCart = () => {
    setIsHome(false);
    setIsFigma(false);
    setIsContact(false);
    setIsCart(true);
    setIsTodo(false)
  };
  const showTodo = () => {
    setIsHome(false);
    setIsFigma(false);
    setIsContact(false);
    setIsCart(false)
    setIsTodo(true)
  };
  
  return (
    <div>
      <nav style={{margin: "2rem"}}>
        <button onClick={showHome}>Home</button>
        <button onClick={showFigma}>Figma</button>
        <button onClick={showContact}>Contact </button>
        <button onClick={showCart}>Cart</button>
        <button onClick={showTodo}>TODO</button>
      </nav>

      <div>
        {isHome ? <Home /> : ""}
        {isFigma ? <Figma /> : ""}
        {isContact ? <Contact /> : ""}
        {isCart ? <Cart/> : ""}
        {isTodo ? <Todo/> : ""}
      </div>
    </div>
  );
};

export default SwitchTabs;
