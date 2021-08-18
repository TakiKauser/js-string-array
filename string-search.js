const products = [
    "hp core i5 7th gen 1TB laptop",
    "nokia c3 button phone",
    "teal color asus laptops",
    "core i5 8th gen asus laptop",
    "120gb ssd asus Laptop",
    "nokia android phone",
    "uiisii headphone",
    "gaming laptop"
];

const searchString = "laptop";

// indexOf

const output1 = [];
for (const product of products){
    if (product.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) != -1){
        output1.push(product);
    }
}
// console.log(output1);

// includes
const output2 = [];
for (const product of products){
    if (product.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())){
        output2.push(product);
    }
}
// console.log(output2);

// startswith

const output3 = [];
const searchString1 = "Nokia";
for (const product of products){
    if (product.toLocaleLowerCase().startsWith(searchString1.toLocaleLowerCase())){
        output3.push(product);
    }
}
// console.log(output3);

// endswith

const output4 = [];
const searchString2 = "LApTop";
for (const product of products){
    if (product.toLocaleLowerCase().endsWith(searchString2.toLocaleLowerCase())){
        output4.push(product);
    }
}
console.log(output4);