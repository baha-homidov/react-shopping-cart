import { Link } from "react-router-dom";
import "../assets/styles/Cart.css";
const Cart = (props) => {
  console.log(props.cart[0]);
  // console.log(props.cart.length);
  let totalSum = 0;
  props.cart.forEach((element) => {
    totalSum += element.price * element.quantity;
  });

  function incrementItemCount(index) {
    let newCart = [];
    newCart = Object.assign(newCart, props.cart);
    newCart[index].quantity = newCart[index].quantity + 1;
    props.setCartCallback(newCart);
  }
  function decrementItemCount(index) {
    let newCart = [];
    newCart = Object.assign(newCart, props.cart);
    if (newCart[index].quantity === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].quantity = newCart[index].quantity - 1;
    }
    props.setCartCallback(newCart);
  }

  if (props.cart.length === 0) {
    // if the cart is empty
    return (
      <div className="cart-container">
        <h1>Cart is empty</h1>
        <Link to="/store">
          <button>Go Shopping!</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart-container">
        {props.cart.map((element, index) => {
          return (
            <div className="cart-entry">
              <img src={element.imgURL} className="thumbnail" alt="pic" />
              <div className="name">{element.name}</div>
              <div className="quantity-container">
                <div className="quantity">Quantity: {element.quantity}</div>
                <button
                  onClick={() => {
                    decrementItemCount(index);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    incrementItemCount(index);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <h1 className="total-sum">Total: {totalSum}</h1>
        <Link to="/checkout">
          <button onClick={
            () => {
              const newCart = [];
              props.setCartCallback(newCart);
            }
          } className="checkout">Proceed to checkout</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
