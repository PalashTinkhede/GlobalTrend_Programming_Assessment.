function fun(array) {
    return array.filter(number => number % 2 !== 0);
}

console.log(fun([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]
console.log(fun([10, 15, 20, 25, 30])); // Output: [15, 25]
console.log(fun([2, 4, 6, 8])); // Output: []
console.log(fun([1, 3, 5, 7, 9])); // Output: [1, 3, 5, 7, 9]
