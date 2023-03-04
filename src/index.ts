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
