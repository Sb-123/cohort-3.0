"use strict";
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
const users = {
    "John": 30,
    "Jane": 25,
    "Bob": 35,
};
console.log(users["John"]);
