// objects
const person: {
    // here is a kind of the interface of the object
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] //this is a tuple
} = {
    name: "alex",
    age: 48,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'developer']
}

console.log(person.name);

console.log(person.role);

for (const hobby in person.hobbies){
    console.log(hobby.toUpperCase);
}