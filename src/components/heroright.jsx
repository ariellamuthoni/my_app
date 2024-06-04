import React from "react";

const HeroRight = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2 w-[900px] ">
        
        <div className=" w-[300px] ">
          <h1 className="text-5xl font-bold">Taste the goodness ...</h1>
          <p className="py-6">
            Welcome to Koi’s Bakery where every piece tells the story. At Koi’s
            Bakery, baking is not just a job but our passion This is a haven
            where the aroma of freshly baked goods fills the air and every bie
            transports you to a place of pure bliss.
          </p>
          <button className="btn bg-[#7A2E0E] text-white ">Make an Order today</button>
        </div>
        <img
          src="./images/chef.png"
          className=""
        />
      </div>
    </div>
  );
};

export default HeroRight;
