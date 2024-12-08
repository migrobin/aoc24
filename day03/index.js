import { readFileSync } from "fs";

const input = readFileSync("data1", "utf-8");

console.log(input);

const regex = /mul\(\d+,\d+\)/g;
const regex = /mul\((\d+),(\d+)\)/g

const filter = input.match(regex);

const res= filter.map(X=>)
console.log();
