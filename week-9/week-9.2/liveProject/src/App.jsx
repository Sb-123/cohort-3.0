import { useState } from "react";
import { PostComponent } from "./postComponent";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  function resizeTo() {
    setCount(0);
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            borderRadius: 30,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
        <img
          src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-notification-icon-png-image_927192.jpg"
          alt="notification bell"
          width={40}
        />
        <button onClick={increaseCount}>increase notification</button>
        <button onClick={resizeTo}>reset</button>
      </div>
    </>
  );
}

export default App;
