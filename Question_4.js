function fun(str1, str2) {
    function sortString(str) {
        return str.split('').sort().join('');
    }

    const cleanedStr1 = sortString(str1.replace(/\s+/g, '').toLowerCase());
    const cleanedStr2 = sortString(str2.replace(/\s+/g, '').toLowerCase());

    return cleanedStr1 === cleanedStr2;
}

console.log(fun("Listen", "Silent")); // Output: true
console.log(fun("Hello", "Olelh")); // Output: true
console.log(fun("Dormitory", "Dirty room")); // Output: true
console.log(fun("The eyes", "They see")); // Output: true
console.log(fun("Hello", "World")); // Output: false
