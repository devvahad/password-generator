import React, { useCallback, useRef } from "react";
import { useEffect, useState } from "react";

const Password = ({ i, n }) => {
  console.log(n);

  const [pass, setPass] = useState("");

  useEffect(() => {
    if (n.name1 == "numCheck" && n.val1 == true) {
      if (n.name2 == "charCheck" && n.val2 == false) {
        with_numbers_password(i);
      }
    }
    if (n.name1 == "numCheck" && n.val1 == true) {
      if (n.name2 == "charCheck" && n.val2 == true) {
        both_num_char_password(i);
      }
    }
    if (n.name1 == "numCheck" && n.val1 == false) {
      if (n.name2 == "charCheck" && n.val2 == true) {
        characters_password(i);
      }
    }
    if (n.name2 == "charCheck" && n.val2 == true) {
      if (n.name1 == "numCheck" && n.val1 == false) {
        characters_password(i);
      }
    }
    if (n.name1 == "numCheck" && n.val1 == false) {
      if (n.name2 == "charCheck" && n.val2 == false) {
        simple_password(i);
      }
    }
  }, [i, n]);

  function simple_password(inp) {
    let r,
      str = "",
      char;
    for (let index = 0; index < inp; index++) {
      r = Math.floor(Math.random() * 26);
      char = String.fromCharCode(97 + r);
      str = str + char;
    }

    setPass(str);
  }

  function with_numbers_password(inp) {
    let r1,
      r2,
      str = "",
      char1;
    for (let index = 0; index < inp / 2; index++) {
      r1 = Math.floor(Math.random() * 26);
      r2 = Math.floor(Math.random() * 10);
      char1 = String.fromCharCode(97 + r1);
      str = str + char1 + r2;
    }
    const subStr = str.substring(0, inp);

    setPass(subStr);
  }
  function both_num_char_password(inp) {
    let r1,
      r2,
      r3,
      str = "",
      char1,
      char3;
    for (let index = 0; index < inp / 3; index++) {
      r1 = Math.floor(Math.random() * 26);
      r2 = Math.floor(Math.random() * 10);
      r3 = Math.floor(Math.random() * 15);
      char1 = String.fromCharCode(97 + r1);
      char3 = String.fromCharCode(32 + r3);
      str = str + char1 + r2 + char3;
    }
    const subStr = str.substring(0, inp);

    setPass(subStr);
  }
  function characters_password(inp) {
    let r1,
      r2,
      str = "",
      char1,
      char2;
    for (let index = 0; index < inp / 2; index++) {
      r1 = Math.floor(Math.random() * 26);
      r2 = Math.floor(Math.random() * 15);
      char1 = String.fromCharCode(97 + r1);
      char2 = String.fromCharCode(32 + r2);
      str = str + char1 + char2;
    }
    const subStr = str.substring(0, inp);

    setPass(subStr);
  }

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div>
      <div className="flex items-center ">
        <div className="mx-8 mt-4 rounded-lg h-[80px] w-[700px] bg-white font-extrabold p-7  ">
          {pass}
        </div>

        <button
          onClick={copyToClipboard}
          className="
            text-white
            bg-blue-500
            hover:bg-blue-600
            active:bg-blue-700
            p-[20px]
            font-bold
            transition
            duration-300
            ease-in-out items-center justify-center rounded-3xl h-[80px] mt-5 w-[40]  mr-[30px]
          "
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Password;
