import React from "react";
import { useState } from "react";

function DayOne() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("default");

  const changeInput = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    setUser(name)
  };

  return (
    <>
      <div className="p-4 min-h-screen w-full bg-gray-400">
        <input
          className="p-4"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={changeInput}
        />
        <button
          className=" border mx-4 p-4 border-2-black"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <hr />
        <p>hello!!! {user}</p>
      </div>
    </>
  );
}

export default DayOne;
