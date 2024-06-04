import React from "react";
import CenteredLinks from "./centred links";

const Navbar = () => {
  return (
    <div className="navbar bg-custom-opacity fixed top-0 justify-centre">
      <div className="fixed top-0 left-0 z-50 ">
       <CenteredLinks/>
      </div>
      <div className="flex-1">
        {/* <a className="img src=./images/logo.png">daisyUI</a> */}
        <img src="./images/logo.png" alt="" />
      </div>
      <div className="flex-none">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
        <button className="btn bg-[#7A2E0E] text-white ">Order Now</button>
      </div>
    </div>
  );
};

export default Navbar;
