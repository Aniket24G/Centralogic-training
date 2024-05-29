import React from "react";

function ProjetcItem({ img, title, tech, url }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-200 rounded-lg group hover:bg-gradient-to-r from-gray-100 to-[#BC6FF1]">
      <img
        src={img}
        alt=""
        className="rounded-xl group-hover:opacity-5 w-[300px] h-[300px]"
      />
      <div className="hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="p-2 text-xl font-balo font-semibold text-[#FF5F00]">
          {title}
        </h3>
        <p className="pb-4 text-white tect-center">{tech}</p>
        <a href={url} target="_blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-500 font-balo font-semibold cursor-pointer">
            Read more
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjetcItem;
