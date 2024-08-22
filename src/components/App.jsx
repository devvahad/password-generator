import { useEffect, useState } from "react";
import Control from "./Control";
import Password from "./Password";
import Length from "./Length";

function App() {
  const [input, setInput] = useState();
  const [num, setNum] = useState({
    name1: "numCheck",
    val1: false,
    name2: "charCheck",
    val2: false,
  });

  function handleInput(i) {
    setInput(i);
  }
  function handleNumber(obj) {
    setNum({
      name1 : obj.name1,
      val1 : obj.val1,
      name2 : obj.name2,
      val2 : obj.val2
    });
    
  }

  return (
    <>
    <h1 className="mt-[100px] mb-[100px] font-extrabold text-8xl text-white items-center justify-center flex  ">Password Generator</h1>
   
      <div
        className="flex justify-center "
        style={{  height: "100vh", width: "100vw" }}
      >
        <div className="  bg-[#A9A9A9] container h-[25%] w-[50%] border-2 border-white rounded-md ">
          <Password i={input} n={num} />

          <div className="flex justify-evenly items-center mt-[30px] ">
            <Length dis="Length = " inputt={handleInput} />
            <Control dis="Numbers" number={handleNumber} name="numCheck" />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
