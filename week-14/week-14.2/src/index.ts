/*
interface User {
    id:string;
  name: string;
    age: number;
    email: string;
    password: string;
}

const user1: User = {
  id: "1",
  name: "John",
  age: 30,
  email: "john@gmail.com",
  password: "123456",
};

// M-I
// interface UpdateProps { 
//     name: string;
//     age: number;
//     password: string;
// }

// M-II
type UpdateProps = Pick<User, "name" | "age" | "password">

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // his the dateBase to update the user.
}


*/


// **************************************** Readonly ******************************************************************************************************** 

/*
// readonly
type User = {
    name: string;
    age: number;
}

const user1: Readonly<User> = {
    name: "John",
    age: 30,
};

user1.name = "John Doe";
*/




// *************************************** ReadonlyArray ********************************************************************************************************

/*
interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: "1234567890",
};

config.endpoint = "https://api.example.com/v2";
*/

// ********************************** Record and Map ********************************************************************************************************


type usersAge = {
    [key: string]: number;
};

type Users = Record<string, number>;

const users: Users = {
    "John": 30,
    "Jane": 25,
    "Bob": 35,
};

console.log(users["John"]);




