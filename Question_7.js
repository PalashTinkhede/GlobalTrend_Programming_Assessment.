function fun(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fibonacci = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
}

console.log(fun(5)); // Output: [0, 1, 1, 2, 3]
console.log(fun(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fun(1)); // Output: [0]
console.log(fun(0)); // Output: []
