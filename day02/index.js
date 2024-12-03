import { readFileSync } from "fs";

const input = readFileSync("data2", "utf-8")
    .split("\n")
    .map((x) => x.split(" ").map((x) => Number(x)));

const isSafe = (report) => {
    let inc = true;
    if (report[1] - report[0] < 0) inc = false;

    for (let i = 1; i < report.length; i++) {
        if (inc === true) {
            if (report[i] - report[i - 1] < 1 || report[i] - report[i - 1] > 3) return false;
        } else {
            if (report[i] - report[i - 1] > -1 || report[i] - report[i - 1] < -3) return false;
        }
    }
    return true;
};

let res = input.reduce((acc, val) => {
    if (isSafe(val)) acc++;
    return acc;
}, 0);

console.log(res);
