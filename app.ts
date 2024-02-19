// objects
const person: {
    // here is a kind of the interface of the object
    name: string,
    age: number,
    hobbies: string[];
} = {
    name: "alex",
    age: 48,
    hobbies: ['Sports','Cooking']
}

console.log(person.name);

for (const hobby in person.hobbies){
    console.log(hobby.toUpperCase);
}