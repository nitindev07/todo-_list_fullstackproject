import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [col, setCol] = useState(false);
  const handlr = () => {
    setCol(!col);
  };
  return (
    <div className="w-full bg-slate-500 fixed top-0">
      <div className="lg:w-[1200px] w-full pt-4 flex justify-around lg:px-8 mx-auto">
        <h1 className="text-3xl font-bold text-center hidden md:block text-black">
          To Do List
        </h1>
        <ul className="flex justify-center items-center gap-12 font-bold text-xl">
          {col ? (
            <Link
              onClick={handlr}
              className={` px-8 pb-4 pt-2 rounded-t-xl text-black duration-300 ${
                col ? "bg-white text-black" : "bg-none text-white"
              }`}
              to={"/"}
            >
              <li>Home</li>
            </Link>
          ) : (
            <Link
              onClick={handlr}
              className={` px-8 pb-4  rounded-t-xl pt-2 text-black duration-300 ${
                col ? "bg-none text-white" : "bg-white text-black"
              }`}
              to={"/create"}
            >
              <li>Create</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
