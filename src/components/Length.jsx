import React from "react";

const Length = (props) => {
  function handle(event) {
    // let inp = event.target.value;
    props.inputt(event.target.value);
  }

  return (
    <div className="flex">
      <p className=" text-yellow-700 font-semibold px-2  ">{props.dis}</p>
      <input
        onChange={handle}
        type="text"
        name="length"
        id="length"
        placeholder=" Enter the length"
      />
    </div>
  );
};

export default Length;
