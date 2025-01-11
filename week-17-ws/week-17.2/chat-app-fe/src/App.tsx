
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi there"]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data]);
    }
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", payload: { roomId: "red" } }));
    }
    return () => {
      wsRef.current.close();
    }
  }, []);

  return (
    <>
      <div className="bg-slate-500 flex justify-center items-center h-screen">
        <div className="bg-indigo-400 h-2/3  w-96 rounded-lg p-2 flex flex-col justify-center items-center">
          <div className="text-white text-xl h-[90vh]">
            {messages.map((message) => (
              <div className="m-4">
                <span className="bg-white text-black rounded p-2">
                  {message}
                </span>
              </div>
            ))}
          
          </div>
          <div className="flex bottom-0 justify-between items-center">
            <input ref={inputRef} id="message" className="white/70 rounded-lg p-2 w-5/6" type="text" placeholder="Message..." />
            <button className="rounded-lg pr-2 mr-0 bg-white/70 p-2"
              onClick={() => {
                const message = inputRef.current?.value;
                wsRef.current.send(JSON.stringify({ type: "chat", payload: { message } }));
              }}
            >Send</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App;