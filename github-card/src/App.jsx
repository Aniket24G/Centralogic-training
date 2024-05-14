import { useState } from "react";
import Card from "./Components/Card";

function App() {
  const toggleTheme = () => {
    console.log("changed");
    document.querySelector("html").classList.toggle("dark");
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <button
              onClick={toggleTheme}
              className="border border-black-2 rounded-md px-2 py-1 bg-black text-white"
            >
              Toggle
            </button>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
