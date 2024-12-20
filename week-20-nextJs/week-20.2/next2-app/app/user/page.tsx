"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// const page = () => {
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState({});

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/todos/51")
//         .then(res => {
//             setData(res.data);
//             setLoading(false);
//         })
//     }, [])

//     if(loading) {{return <div>loading...</div>}}

//   return (
//     <div>
//     {data.name}
//     {data?.email}
//     </div>
//   )
// }


const page = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/51");

    await new Promise(r => setTimeout(r, 5000));
    const data= response.data;

    return (
        <div>
            User Page
            {data.name}
            {data?.email}
        </div>
    )
}

export default page
