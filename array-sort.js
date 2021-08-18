const numbers = [0, 7, 1, 2, 3, 11, 4, 5, 13, 6, 8, 9, 10];

const sortedNumber = numbers.sort(function(a, b){
    return a - b;
});
// console.log(sortedNumber);


// sort
const closeFriends = ["arefin", "nahid", "shadhin", "bappi", "khairul", "rafsan", "chamak", "didi", "mahfuz", "ovi", "saeid"];

// const sortedFriends = closeFriends.sort();
// console.log(sortedFriends);
// console.log(closeFriends);

// reverse
// const reversedFriends = closeFriends.reverse();
// console.log(reversedFriends);

const sortedReversedFriends = closeFriends.sort().reverse();
console.log(sortedReversedFriends);