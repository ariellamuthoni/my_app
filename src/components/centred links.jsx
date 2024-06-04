import React from 'react';

const CenteredLinks = () => {
  return ( <div className='flex flex-row  justify-between space-x-10'>
    <div className="flex items-center justify-between min-h-screen ">
      <div className="flex flex-row items-center space-y-4  fixed top-0 centre z-1000 ">
        <a href="#link1" className="text-blue-500 hover:underline">Home</a>
        <a href="#link2" className="text-blue-500 hover:underline">About Us</a>
        <a href="#link3" className="text-blue-500 hover:underline">Contact us</a>
      </div>
    </div>
    </div>
  );
};

export default CenteredLinks;
