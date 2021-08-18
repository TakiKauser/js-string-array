const string = "I have been learning Javascript since last month";

// split
const words = string.split(" ");
// console.log(words);

const withoutI = string.split("i");
// console.log(withoutI);

// slice(initial index, end index)
const smallSclice = string.slice(21, 31);
// console.log(smallSclice);

// substr(initial index; char count)
const substr = string.substr(21, 10);
// console.log(substr);

// substring(initial index; end index)
const substring = string.substring(21, 33);
// console.log(substring);


// concat
const first = "Institute";
const second = "Science & Technology";

const fullString1 = first + " of " + second;
const fullString2 = first.concat(" of ").concat(second);

// console.log(fullString1);
// console.log(fullString2);

const strings = ["x", "y", "z", "abc"];
const joinedString = strings.join(", ");

console.log(joinedString);