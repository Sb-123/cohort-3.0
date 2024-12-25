import axios from 'axios';

async function getUserDetails() {
    const response = await axios.get('http://localhost:3000/api/user/details');
    return response.data;
}

export default async function Home() {
    const userData = await getUserDetails();

    await new Promise(r => setTimeout(r, 5000));
    console.log("Hi")

    return (
        <div>
            <h1>User's page</h1>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
        </div>
    )
    
}