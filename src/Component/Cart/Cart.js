import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  //   courses price count
  const coursePrice = cart.reduce((previceValue, currentValue) => previceValue + currentValue.price, 0);

  //   tax count
  const tax = (coursePrice * 0.1).toFixed(2);

  //   total amount count
  const totalAmount = parseFloat(coursePrice) + parseFloat(tax);
  return (
    <div id="cart_section">
      <div className="cart">
        <h3 className="text-center">Cart: {props.cart.length}</h3>
        <div className="row d-flex justify-content-center align-items-center">
          <p>Courses:</p>
          <p>$ {coursePrice.toFixed(2)}</p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <p>Tax:</p>
          <p>$ {tax}</p>
        </div>
        <h3 className="total text-center">Total : ${totalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
