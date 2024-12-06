import { readFileSync } from "fs";

const input = readFileSync("data2", "utf-8")
    .split("\n")
    .map((x) => x.split(" ").map((x) => Number(x)));

const isSafe = (report) => {
    let inc = true;
    let badLevel = 0;

    if (report[1] - report[0] < 0) inc = false;
    if (report[1] - report[0] === 0) {
        if (report[2] - report[1] === 0) return false;
        if (report[2] - report[1] < 0) inc = false;
    }
    let badOne = 0;
    let j = 0;
    for (let i = 1; i < report.length; i++) {
        if (badLevel > 0 && badOne === i - 1) {
            j = 1;
        }

        if (inc === true) {
            if (report[i] - report[i - 1 - j] < 1 || report[i] - report[i - 1 - j] > 3) {
                badLevel++;
                badOne = i;
                if (badLevel > 1) return false;
            }
        } else {
            if (report[i] - report[i - 1 - j] > -1 || report[i] - report[i - 1 - j] < -3) {
                badLevel++;
                badOne = i;
                if (badLevel > 1) return false;
            }
        }
    }
    return true;
};

console.log(input);
let res = input.reduce((acc, val) => {
    if (isSafe(val)) acc++;
    return acc;
}, 0);

console.log(res);
