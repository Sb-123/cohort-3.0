"use strict";
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    email: "johndoe@example.com"
};
function IsLegal(user) {
    return user.age >= 18;
}
console.log(IsLegal(user)); // true
