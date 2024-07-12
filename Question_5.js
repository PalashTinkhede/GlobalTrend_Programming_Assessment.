function fun(array) {
    let uniqueSet = new Set(array);

    let uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

console.log(fun([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(fun(['a', 'b', 'a', 'c', 'b'])); // Output: ['a', 'b', 'c']
console.log(fun([1, '1', 2, '2', 3, '3'])); // Output: [1, '1', 2, '2', 3, '3']
