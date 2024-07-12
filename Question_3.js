function fun(array) {
    let result = [];

    function flatten(subArray) {
        for (let item of subArray) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        }
    }

    flatten(array);

    return result;
}

console.log(fun([1, [2, 3], [4, [5, 6]], 7])); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(fun([[1, 2, [3, 4]], 5, [6, [7, 8, [9, 10]]]])); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

