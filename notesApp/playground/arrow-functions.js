var square = (x) => {
    var result = x*x;
    return result;
};

var squareSimple = x => x*x;

var user = {
    name: 'Sandeep',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    } 
};

console.log(square(9)); // 81
console.log(squareSimple(9)); // 81

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);