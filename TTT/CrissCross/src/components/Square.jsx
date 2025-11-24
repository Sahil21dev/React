import React from "react";
const Square = (props) => { 
  return (
    <div
      className="Square flex justify-center items-center border-solid border-2 border-black w-[10rem]
      h-[8rem]
      active:bg-slate-200
      hover:cursor-pointer"

      onClick={props.onClick}
    >
      <h1 className="text-5xl text-black-600" >{props.value}</h1>
    </div>
  );
};

export default Square;
