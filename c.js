const users = [
  { firstName: "Prakash", lastName: "Chandra", age: 29 },
  { firstName: "Akash", lastName: "Chandra", age: 28 },
  { firstName: "Vikarm", lastName: "Aditya", age: 29 },
  { firstName: "Subham", lastName: "Pandey", age: 39 },
  { firstName: "Nitesh", lastName: "Lal", age: 30 },
  { firstName: "prem", lastName: "Lal", age: 3 },
];

const sortedlist = users.sort((a, b) => a.age - b.age);
console.log(sortedlist);