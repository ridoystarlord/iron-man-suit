import React from "react";

const Suitlist = (props) => {
  const { name, price, img } = props.list;
  return (
    <div>
      <div className="card mb-3 p-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              height="100px"
              src={img}
              className="rounded-start"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                <span className="fw-bold">Price:</span> ${price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suitlist;
