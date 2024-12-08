import { readFileSync } from "fs";

const input = readFileSync("data1", "utf-8");

//console.log(input);
let match;

let dos = [];
let donts = [];

const regex2 = /do\(\)/g;

const regex3 = /don't\(\)/g;
while ((match = regex2.exec(input)) !== null) {
    dos.push(match.index);
}
while ((match = regex3.exec(input)) !== null) {
    donts.push(match.index);
}

console.log(dos, donts);

function isDo(index) {
    let closestDo = dos.reverse().find((x) => x < index);
    if (closestDo == undefined) closestDo = 0;
    let closestDont = donts.reverse().find((x) => x < index);
    return closestDo > closestDont ? true : false;
}

//console.log(dos);
const regex = /mul\((\d+),(\d+)\)/g;
let temp = [];

const test = regex.exec(input);

console.log("t", test);
const multiply = test.input.match(regex).map((line, index) => {
    temp = line.split(",");
    temp[0] = Number(temp[0].slice(4));
    temp[1] = Number(temp[1].slice(0, -1));
    // console.log(temp);
    return isDo(index) ? temp[0] * temp[1] : 0;
});

//const res= filter.map(X=>)
//console.log(filtered);
//console.log(multiply);

let res = multiply.reduce((curr, acc) => {
    acc += curr;
    return acc;
}, 0);

console.log(res);
