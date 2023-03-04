//  **********************************        Data Types        ****************************************

// Numbers

let age: number = 10;

// String

let firstName: string = "Dasun";

// Array

let numbers: number[] = [10, 20, 30, 40, 50];
let strings: string[] = ["A", "B", "C", "D", "E"];

// Tuples
let person: [number, string] = [1, "Dasun"];

//  *************************************        Functions        ******************************************

function calculate() {
  return "";
}

// Function With Type Safe

function calculateAverageMark(
  subjectCount: number,
  totalMarks: number
): number {
  return totalMarks / subjectCount;
}

let avg = calculateAverageMark(5, 420);
console.log(avg);

// Functions with Optional Parameters

// Use ? for optional parameters

function addTwoNumber(firstNumber: number, secontNumber?: number): number {
  if (secontNumber) return firstNumber + secontNumber;
  return firstNumber;
}

console.log(addTwoNumber(10));

// Objects

let student: { id: number; name: string; age?: number } = {
  id: 1,
  name: "Dasun",
};

let teacher: { id: number; name: string; enroll: (date: Date) => void } = {
  id: 1,
  name: "Dasun",
  enroll: (date: Date) => {
    console.log(date);
  },
};

teacher.enroll(new Date());

// Type Aliases

type Employee = {
  id: number;
  name: string;
};

let employee1: Employee = { id: 1, name: "Dasun" };

// Union Types

function getNumber(myNumber: number | string): number {
  return typeof myNumber === "string" ? parseInt(myNumber) : myNumber;
}

getNumber("10");
