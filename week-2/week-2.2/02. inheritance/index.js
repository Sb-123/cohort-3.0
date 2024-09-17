const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

// *******************************************************************************************
// M-I:-
const user = {
  name: "Kunal",
  age: "22",
};

console.log(user.name);
user.name = "kamal";
console.log(user.name);

// M-II:-
const map = new Map();
map.set("name", "Sanjeev");
map.set("age", 30);
console.log(map.get("name"));
