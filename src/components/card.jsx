import React from "react";

const Card = () => {
  return (<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 justify-between ">
    <div className="card card-compact w-500 bg-base-100 shadow-xl space-y-4 ">
      <figure>
        <img src="./images/cookies.png" alt="cookies" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-center">
          <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
        </div>
      </div>
    </div>
    <div className="card card-compact w-90 bg-base-100 shadow-xl space-y-4 ">
    <figure>
      <img src="./images/nuttela croisants.png" alt="cookies" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-90 bg-base-100 shadow-xl space-y-4 ">
    <figure>
      <img src="./images/creamcroisants.png" alt="cookies" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-90 bg-base-100 shadow-xl space-y-4 ">
    <figure>
      <img src="./images/Vegan Banana Blondies 1.png" alt="cookies" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-90 bg-base-100 shadow-xl space-y-4 ">
    <figure>
      <img src="./images/Vegan Double Chocolate Chip Cookies 2.png" alt="cookies" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-90 bg-base-100 shadow-xl space-y-4 ">
    <figure>
      <img src="./images/bread 1.png" alt="cookies" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-center">
        <button className="btn bg-[#7A2E0E] text-white ">Make an order today</button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Card;
