import React from "react";

const Manager = () => {
  return (
    <>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager.
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            placeholder="Enter website URl"
            className="rounded-full border border-green-500 py-1 px-4 w-full"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              placeholder="Enter username"
              className="rounded-full border border-green-500 py-1 px-4 w-full"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Enter password"
              className="rounded-full border border-green-500 py-1 px-4 w-full"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full gap-2 px-8 py-2 w-fit border border-green-900">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
