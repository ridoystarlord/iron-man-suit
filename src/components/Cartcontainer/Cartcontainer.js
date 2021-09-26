import React from "react";
import Ordersuitlist from "../Ordersuitlist/Ordersuitlist";

const Cartcontainer = (props) => {
  const { cart } = props;
  let totalPrice = 0;
  let shippingCost = 0;
  for (const suit of cart) {
    totalPrice = totalPrice + suit.price;
    shippingCost = shippingCost + suit.shippingCost;
  }
  const grandTotal = totalPrice + shippingCost;
  return (
    <div>
      <div className="card mb-1">
        <div className="card-header fw-bold">Order Summary</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">No of Suit: {props.cart.length}</li>
          <li className="list-group-item">Total Suits Price: ${totalPrice}</li>
          <li className="list-group-item">
            Shipping Cost: ${shippingCost.toFixed(2)}
          </li>
          <li className="list-group-item">
            Total Price: ${grandTotal.toFixed(2)}
          </li>
        </ul>
      </div>
      <h5 className="mb-2">Ordered Suits List</h5>
      {cart.map((product) => (
        <Ordersuitlist key={product.key} list={product}></Ordersuitlist>
      ))}
    </div>
  );
};

export default Cartcontainer;
