import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full">
        <div className="logo font-bold text-white text-2xl mt-2">
          <span className="text-emerald-500">&lt;</span>
          <span>Pass</span>
          <span className="text-emerald-500">OP/&gt;</span>
        </div>
        <div className="flex mb-2">Created by Shubham</div>
      </div>
    </>
  );
};

export default Footer;
