"use client";
import axios from "axios";

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button
                onClick={() => {
                    axios.post("http://localhost:3000/api/v1/signin", {
                    
                    })
                }}
            >Sign in</button>
        </div>
    
    </div>
  )
}

export default page
