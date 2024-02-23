const addNumsA = (...nums: number[]): number => {
        return nums.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    },0 )
    
} 
console.log("rest params add nums: " + addNumsA(3, 5, 6.56, 56));


// Arrays
const hobbiesD = ['Sports', 'Cooking'];
const activeHobbiesD = ['Hiking'];

//Traditional push
//activeHobbies.push(hobbies[0], hobbies[1]);

//spread operator
activeHobbiesD.push(...hobbiesD);


// Array detructuring
// h1=hobbiesD[0]
// h2=hobbiesD[1]
const [h1, h2, ...remainninHobbies] = hobbiesD;

console.log("detructuring");
console.log(h1,h2, remainninHobbies);

//Object detructuring

const PersonD = {
    nick: 'alex',
    age:48
}

// Creates constants with values from an object. Renames nick to firstName
const { nick:firstName, age } = PersonD;

console.log("object detructuring " + firstName,age);
