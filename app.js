
// exercise 1:
function plus(num){
    return function(plusNumber) {
        return num + plusNumber;
    }
}

const addThis = plus(2);
console.log(addThis(50));





// exercise 2: using a forEach array method - return all of the values of 'name'
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(user => console.log(user.name))

  //exercise 3: map - return name & score
let newUsers = users.map((user) => {
  console.log({name: user.name, score: user.score})
})


  //exercise 4: filter - return only those that are active
let activeUsers = users.filter((user) => user.isActive)
console.log("activeUsers::::::::::::::::::::::: ")
console.log(activeUsers)




  //exercise 5: sort (affects the existing array!) Highest Score on Top

users.sort((a, b) => {
    if (a.score < b.score)
    return 1
    else return -1
});
console.log(users);


  //exercise 6:  reduce to 1 answer
  
  let avgScore = users.reduce((sum, user) => sum + user.score, 0) / users.length;
  console.log("Average Score: " + avgScore);
