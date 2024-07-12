function fun(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

console.log(fun("hello world")); // Output: "Hello World"
console.log(fun("javaScript is fun")); // Output: "Javascript Is Fun"
console.log(fun("capitalize each word")); // Output: "Capitalize Each Word"
