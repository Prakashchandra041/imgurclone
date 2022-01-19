const users = [
  { firstName: "Prakash", lastName: "Chandra", age: 29 },
  { firstName: "Akash", lastName: "Chandra", age: 28 },
  { firstName: "Vikarm", lastName: "Aditya", age: 29 },
  { firstName: "Subham", lastName: "Pandey", age: 39 },
  { firstName: "Nitesh", lastName: "Lal", age: 30 },
];

//list of full names

const fullName = users.map((ele) => {
    return ele.firstName + " " + ele.lastName;
});
console.log(fullName);


//find the number of people who have particular unique age ;
// { '28': 1, '29': 3, '39': 1 }
// here we will use reduce , because we want to reduce this arr into signle values;
// accumulater will be empty object

const uniqueAge = users.reduce((acc,curr) => {
    if (acc[curr.age] == undefined) {
        acc[curr.age] = 1;
    } else {
        acc[curr.age]++;
    }
    return acc;
}, {})


console.log(uniqueAge);

// first name of all people whose is less than 30

const nameAgeLess30 = users.filter((el) => {
    return el.age < 30;
}).map((ele) => {
   return ele.firstName;
})
console.log(nameAgeLess30);

// power this higher order function is  chaning;
