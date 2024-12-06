
import { useState, useEffect, useRef } from 'react';





import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  
  function sendMessage() { 
    if (!socket) return;
    

    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
   }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); //  it creates a new socket connection
    setSocket(ws);  //  it sets the socket to the state
    

    // what happens when the socket receives a message on mounting time.
    ws.onmessage = (e) => {
      alert(e.data);
    };
   }, [])
 
  

  return (
    <>
      
      <div>
        <input ref={inputRef}  type="text" placeholder="Message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
     
    </>
  )
}

export default App
