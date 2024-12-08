import { readFileSync } from "fs";

const input = readFileSync("data2", "utf-8")
    .split("\n")
    .map((x) => x.split(" ").map((x) => Number(x)));

const trySafe = (report) => {
    let inc = true;
    if (report[1] < report[0]) inc = false;
    if (report[1] === report[0]) return false;
    {
        for (let i = 1; i < report.length; i++) {
            if (inc === true) {
                if (report[i] - report[i - 1] < 1 || report[i] - report[i - 1] > 3) return false;
            } else {
                if (report[i] - report[i - 1] > -1 || report[i] - report[i - 1] < -3) return false;
            }
        }
    }
    return true;
};

const isSafe = (report) => {
    if (trySafe(report)) return true;

    for (let i = 0; i < report.length; i++) {
        if (trySafe(report.filter((x, index) => index !== i))) return true;
    }
    return false;
};

let res = input.reduce((acc, val) => {
    if (isSafe(val)) acc++;
    return acc;
}, 0);

console.log(res);
