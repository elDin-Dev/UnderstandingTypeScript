function add(n1: number, n2: number, printResult:boolean) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect number');

    }
    const result:number=n1 + n2;
    if (printResult) {
        console.log("Result:" + result);
    }

    return result;
    
}

const number1 = 5;
const number2 = 3.5;
const printResultI = true;

const result = add(number1, number2,printResultI);
console.log(result);

