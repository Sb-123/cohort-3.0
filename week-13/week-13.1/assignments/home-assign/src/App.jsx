import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-4 bg-slate-500  ...">01</div>
        <div className="col-start-1 col-end-3 bg-slate-500 ...">02</div>
        <div className="col-end-7 col-span-2 bg-slate-500 ...">03</div>
        <div className="col-start-1 col-end-7 bg-slate-500 ...">04</div>
      </div>
    </>
  );
}

export default App;
