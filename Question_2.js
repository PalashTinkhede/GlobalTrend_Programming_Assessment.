function eval(string) {
    string = string.replace(/\s+/g, '');
    
    let numbers = string.split(/[-+]/).map(Number);
    let operators = string.replace(/[0-9]/g, '').split('');

    let result = numbers[0];

    for (let i = 0; i < operators.length(); i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}
console.log("3 + 5 - 2 = ")
console.log(eval("3 + 5 - 2")); // Output: 6
console.log("10 + 20 - 5 + 3 = ")
console.log(eval("10 + 20 - 5 + 3")); // Output: 28
