"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input
                className="text-black"
                type="text" placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                className="text-black"
                type="password"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            
            <button
                onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/signup", {
                        username,
                        password
                    })
                    router.push("/signin");
                }}
            >Sign up</button>
        </div>
    
    </div>
  )
}

export default page
