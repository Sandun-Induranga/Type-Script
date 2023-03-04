"use strict";
//  **********************************        Data Types        ****************************************
// Numbers
let age = 10;
// String
let firstName = "Dasun";
// Array
let numbers = [10, 20, 30, 40, 50];
let strings = ["A", "B", "C", "D", "E"];
// Tuples
let person = [1, "Dasun"];
//  *************************************        Functions        ******************************************
function calculate() {
    return "";
}
// Function With Type Safe
function calculateAverageMark(subjectCount, totalMarks) {
    return totalMarks / subjectCount;
}
let avg = calculateAverageMark(5, 420);
console.log(avg);
// Functions with Optional Parameters
// Use ? for optional parameters
function addTwoNumber(firstNumber, secontNumber) {
    if (secontNumber)
        return firstNumber + secontNumber;
    return firstNumber;
}
console.log(addTwoNumber(10));
// Objects
let student = {
    id: 1,
    name: "Dasun",
};
let teacher = {
    id: 1,
    name: "Dasun",
    enroll: (date) => {
        console.log(date);
    },
};
teacher.enroll(new Date());
