import { readFileSync } from "fs";
const input = readFileSync("data2", "utf-8").split("\n");

let set1 = [];
let set2 = [];

input.forEach((str) => {
    set1.push(Number(str.split("  ")[0]));
    set2.push(Number(str.split("  ")[1]));
});

set1.sort((a, b) => a - b);
set2.sort((a, b) => a - b);

let res = set1.reduce((acc, val, i) => {
    return (acc += Math.abs(val - set2[i]));
}, 0);

console.log(res);

let sum = 0;

set1.forEach((num) => {
    sum += set2.filter((x) => x === num).length * num;
});

console.log(sum);
