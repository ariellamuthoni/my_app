import React from "react";
import Card from "./card";
// import FAQ from "./FAQ's"

const Features = () => {
  return (
    <div className="container mx-auto p-4 w-[900px] gap-4 space-y-4">
      <h2 className="text-3xl font-bold underline">Our Products</h2>
      {/* <ul className="list-disc list-inside mt-4">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 justify-between w-300">
          <Card />
          {/* <Card /> */}
          {/* <Card />
          <Card />
          <Card />
          <Card />  */}
      </div>
      {/* <FAQ /> */}
    </div>
  );
};

export default Features;
