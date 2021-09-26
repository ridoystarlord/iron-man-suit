import React, { useEffect, useState } from "react";
import Singlesuit from "../Singlesuit/Singlesuit";
import Cartcontainer from "../Cartcontainer/Cartcontainer";
import "./Suitcontainer.css";

const Suitcontainer = () => {
  const [suitList, setSuitList] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./suits.JSON")
      .then((res) => res.json())
      .then((data) => setSuitList(data));
  }, []);

  const addTocart = (suit) => {
    const newCart = [...cart, suit];
    setCart(newCart);
  };

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-9">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {suitList.map((suit) => (
                <Singlesuit
                  key={suit.key}
                  suit={suit}
                  addTocart={addTocart}
                ></Singlesuit>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <Cartcontainer cart={cart}></Cartcontainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suitcontainer;
