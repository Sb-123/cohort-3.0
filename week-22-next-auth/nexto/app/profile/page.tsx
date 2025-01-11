import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [profilePicture, setProfilePicture] = useState("");

    useEffect(() => {
        const res = axios.get("http://localhost:3000/api/profile", {
            headers: {
                authorization:localStorage.getItem("token")
            }
        }).then((res) => {
            setProfilePicture(res.data.profilePicture)
        }).catch((err) => {
            console.log(err)
        })  
    },[])
    
    
    
  return (
    <div>
      <p>profile page</p>
    </div>
  )
}

export default page
