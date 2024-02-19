// objects
/* const person: {
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
 */

enum Role {
    ADMIN=10,
    READ_ONLY=20,
    AUTHOR='ATH'
}


const person= {
    name: "alex",
    age: 48,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.name);

console.log(person.role);

for (const hobby in person.hobbies){
    console.log(hobby.toUpperCase);
}

if (person.role === Role.ADMIN) {
    console.log("It is ADMIN")
}