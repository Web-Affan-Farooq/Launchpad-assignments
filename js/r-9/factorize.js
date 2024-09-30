function factorialize(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

let value = 5;

let result = factorialize(value);

console.log(`The factorial of ${value} is ${result}`);
