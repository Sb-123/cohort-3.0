import { useState, useEffect } from "react";

import "./App.css";
import { SidebarToggle } from "./components/icons/SidebarToggle";
// import Sidebar from "./components/Sidebar";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isDesktop) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isDesktop]);

  return (
    <>
      <div className="flex">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <MainContent sidebarOpen={sidebarOpen} />
      </div>
    </>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <>
        <div className="fixed top-0 left-0 ">
          <button
            className="cursor-pointer  bg-indigo-300 hover:bg-slate-300 p-2 rounded-md"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SidebarToggle />
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="transaction-transform duration-1000  w-96 h-screen bg-red-100 fixed top-0 left-0 md:relative">
        <div>
          <div
            className="cursor-pointer hover:bg-slate-300 bg-slate-100 p-2 rounded-md"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <SidebarToggle />
          </div>
        </div>
      </div>
    </>
  );
}

function MainContent({ sidebarOpen }) {
  return (
    <>
      <div className="w-full">
        {/* profile bg-color or bg-image */}
        <div className="h-72 bg-black hidden md:block"></div>
        {/* main contents parts */}
        <div className="grid grid-cols-11 gap-8 p-8">
          {/* profile component */}
          <div className="h-96 rounded-2xl  bg-red-200 md:col-span-2  shadow-lg col-span-11  -translate-y-24   hidden md:block"></div>
          {/* main contents */}
          <div className="h-96 rounded-2xl bg-green-200 md:col-span-6 shadow-lg col-span-11 "></div>
          {/* extra contents */}
          <div className="h-96 rounded-2xl  bg-blue-200 md:col-span-3 shadow-lg col-span-11"></div>
        </div>
      </div>
    </>
  );
}

export default App;
