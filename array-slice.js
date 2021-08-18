const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an element from an array

// const numberSpliced = numbers.splice(4, 4);
// console.log(numberSpliced);
// console.log(numbers);

// remove and inject element with splice
const numberSpliced2 = numbers.splice(4, 2, 101, 303, 909);
console.log(numberSpliced2);
console.log(numbers);