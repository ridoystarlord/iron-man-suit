import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Singlesuit = (props) => {
  const { name, price, made, img, shippingCost, description } = props.suit;
  return (
    <div>
      {
        <div className="col">
          <div className="card h-100 p-2 shadow bg-body rounded">
            <div className="d-flex justify-content-center">
            <img src={img} width="50%" alt={name} height="250px" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description.slice(0, 150)}...</p>
              <p>
                <span className="fw-bold">Price:</span> ${price}
              </p>
              <p>
                <span className="fw-bold">Build in:</span> {made}
              </p>
              <p>
                <span className="fw-bold">Shipping Cost:</span> ${shippingCost}
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => {
                  props.addTocart(props.suit);
                }}
                type="button"
                className="btn btn-danger"
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Singlesuit;
