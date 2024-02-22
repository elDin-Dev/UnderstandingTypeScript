// Arrays
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

//Traditional push
//activeHobbies.push(hobbies[0], hobbies[1]);

//spread operator
activeHobbies.push(...hobbies);

const personA = {
    name: 'alex',
    age: 30
}

//assign a pointer not a copy
const copyPerson = personA;

//copying by using the spread operator
const copyPersonS = {id:1 , ...personA};

