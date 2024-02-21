function addx(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(n: number):void {
    console.log("Result: " + n);
}

printResult(addx(8, 2));


// combineValues could hold a pointer to any funciton 
// that takes no paramters a returns a number.
let combineValues: () => number;

function addAndHanble(n: number, n2: number, cb: (n:number) => void) {
    const result = n + n2;
    
    cb(result);
    return result;
}

