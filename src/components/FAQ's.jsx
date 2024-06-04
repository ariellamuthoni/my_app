import React from "react";

const Avatar = () => {
  return (
    <div>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://dev.digifunzi.com/images/kenmaina.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://dev.digifunzi.com/images/marcus.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://dev.digifunzi.com/images/waweru.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://dev.digifunzi.com/images/briana.png" />
    </div>
  </div>
</div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="space-y-4 w-full max-w-2xl p-6 ">
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Do you use organic ingridients?

          </div>
          <div className="collapse-content">
            <p>Yes, we prioritize using high quality organic ingredients in our baked goods whenever possible.
</p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Can I change my order later?
          </div>
          <div className="collapse-content">
            <p>Yes it is possible but within three hours of ordering</p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <Avatar />
    </div></div>
  );
};

export default FAQ;
