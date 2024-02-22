const addNumsA = (...nums: number[]): number => {
        return nums.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    },0 )
    
} 
console.log(addNumsA(3,5,6.56,56))