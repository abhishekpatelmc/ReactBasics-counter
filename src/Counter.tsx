import { useState } from "react";
import PlusIcon from "./assets/PlusIcon";
import MinusIcon from "./assets/MinusIcon";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handelPlus = () => {
    setCount(count + 1);
  };

  const handelMinus = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex justify-center space-x-10 items-center">
      <span
        className="p-2 border text-3xl hover:text-black hover:bg-slate-50 hover:cursor-pointer ease-in-out duration-300"
        onClick={handelPlus}
      >
        <PlusIcon />
      </span>
      <span className="text-3xl">{count}</span>
      <span
        className="flex justify-center p-2 text-3xl items-center border hover:text-black hover:bg-slate-50 hover:cursor-pointer ease-in-out duration-300"
        onClick={handelMinus}
      >
        <MinusIcon />
      </span>
    </div>
  );
};

export default Counter;
