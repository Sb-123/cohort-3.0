import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="flex">
        {/* sidebar */}
        <div className="bg-pink-300 sm:h-screen h-5 sm:w-64 w-10 transition-all duration-500 ease-in-out ">
          Sidebar
        </div>
        {/* main contents */}
        <div className="bg-slate-400 h-screen w-full">
          {/* profile background image */}
          <div className="hidden bg-black md:block w-full h-48"></div>
          <div className="flex flex-col md:grid md:grid-cols-12">
            <div className="md:-translate-y-12 col-span-2 bg-yellow-200 rounded-md w-48 h-48 mx-4"></div>
            <div className="translate-y-16 col-start-4 col-span-5 bg-red-200 rounded-md  "></div>
            <div className=" col-start-9 translate-y-72 mr-4 col-span-4 gap-4 bg-indigo-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
