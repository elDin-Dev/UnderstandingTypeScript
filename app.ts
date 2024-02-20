function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(n: number):void {
    console.log("Result: " + n);
}

printResult(add(8, 2));


// combineValues could hold a pointer to any funciton 
// that takes no paramters a returns a number.
let combineValues: () => number;