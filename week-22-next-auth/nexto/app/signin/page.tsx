"use client"
import axios from "axios"



const page = () => {
    return (
        <div>
            signin in page
            <input></input>
            <input></input>
            <button onClick={async () => {
                const res = await axios.post("http://localhost:3000/api/signin", {
                    username: "sanjeev",
                    password: "asdasd"
                })
                localStorage.setItem("token", res.data.token)
            }}>Sign in</button>
        </div>
    );
}

export default page
