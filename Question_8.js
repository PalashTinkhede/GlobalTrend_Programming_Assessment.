class fun {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : null;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

const fun = new fun();
fun.put('name', 'Alice');
fun.put('age', 25);
console.log(fun.get('name')); // Output: Alice
console.log(fun.get('age')); // Output: 25
fun.remove('name');
console.log(fun.get('name')); // Output: null
console.log(fun.get('age')); // Output: 25
