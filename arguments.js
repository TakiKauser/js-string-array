// arguments is an array like object

function addNumbers(num1, num2){

    // console.log(arguments);

    let sum = 0;
    for (const number of arguments){
        // console.log(number);
        sum += number;
    }

    // const sum = num1 + num2;
    return sum;
}

const result = addNumbers(5, 7, 9, 8, 1);
// console.log(result);


function getFullName(firstName, lastName){
    let fullName = ""
    for (const part of arguments){
        fullName += part + " ";
    }

    return fullName;
}

const name = getFullName("Taki", "Kauser", "Badhon");
console.log(name);