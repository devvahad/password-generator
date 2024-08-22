import React from "react";
import { useState } from "react";

const Control = (props) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const obj = {
    name1: "numCheck",
    val1: false,
    name2: "charCheck",
    val2: false,
  };

  function handleChange(event) {
    if (event.target.name === "numCheck") {
      setCheck1(event.target.checked);
      obj.val1 = event.target.checked;
      obj.val2 = check2;
      props.number(obj);
    }

    if (event.target.name === "charCheck") {
      setCheck2(event.target.checked);
      obj.val2 = event.target.checked;
      obj.val1 = check1;
      props.number(obj);
    }
  }

  return (
    <div className="flex justify-evenly ">
      <div className="flex ">
        <input
          className="px-3"
          type="checkbox"
          name="numCheck"
          checked={check1}
          onChange={handleChange}
        />
        <p className=" text-yellow-700 font-semibold pr-10 ">Numbers</p>
      </div>
      <div className="flex">
        <input
          className="px-3"
          type="checkbox"
          name="charCheck"
          checked={check2}
          onChange={handleChange}
        />
        <p className=" text-yellow-700 font-semibold pl-2 ">Characters</p>
      </div>
    </div>
  );
};

export default Control;
