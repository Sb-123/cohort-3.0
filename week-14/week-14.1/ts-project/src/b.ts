interface User{
   firstName: string;
   lastName: string;
   age: number;
   email: string;
}

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    email: "johndoe@example.com"
}

function IsLegal(user: User): boolean { 
    return user.age >= 18;
}

console.log(IsLegal(user)); // true