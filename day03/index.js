import { readFileSync } from "fs";

const input = readFileSync("data1", "utf-8");

console.log(input);

//const regex = /mul\(\d+,\d+\)/g;
const regex = /mul\((\d+),(\d+)\)/g;
let temp = [];

const multiply = input.match(regex).map((line) => {
    temp = line.split(",");
    temp[0] = Number(temp[0].slice(4));
    temp[1] = Number(temp[1].slice(0, -1));
    console.log(temp);
    return temp[0] * temp[1];
});

console.log(multiply);

let res = multiply.reduce((curr, acc) => {
    acc += curr;
    return acc;
}, 0);

console.log(res);
