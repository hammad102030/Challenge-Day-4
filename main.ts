// *30 Day DSA Challenge from Hello Coders Team*

// Day:4 Task

// Question 7: Find Duplicate Numbers in an Array

// *Description:*

// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.

function findDuplicates(numbers: number[]): number[] {
  let emptyArray: number[] = [];
  let newArray: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++)
    if (newArray[numbers[i]]) {
      newArray[numbers[i]] += 1;
    } else {
      newArray[numbers[i]] = 1;
    }
  for (let key in newArray) {
    if (newArray[key] > 1) {
      emptyArray.push(parseInt(key));
    }
  }
  return emptyArray;
}
const myArray = findDuplicates([1, 2, 3, 2, 4, 5, 6, 5]);
console.log(myArray); // Output [2,5]

// *Function Signature:*

// typescript
// function findDuplicates(numbers: number[]): number[] {
//     // Your code here
// }

// *Example:*

// typescript
// // Input
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// // Output
// const duplicates = findDuplicates(numbers);
// console.log(duplicates); // [2, 5]

// *Hints:*

// 1. Create an empty array to store the result.
// 2. Use a nested loop to compare each element with every other element.
// 3. If a duplicate is found, add it to the result array if it is not already included.

// ---

//  Question 8: Filter Students with Marks Greater than 80

// *Description:*

// Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and prints the data of students who have marks greater than 80.

interface Student {
  name: string;
  age: number;
  marks: number;
}

function studentsProperties(properties: Student[]): void {
  let studentsIds: Student[] = [];
  for (let i = 0; i < properties.length; i++) {
    if (properties[i].marks > 80) {
      studentsIds.push(properties[i]);
    }
  }
  console.log("Students marks greater than 80:");
  for (let i = 0; i < studentsIds.length; i++) {
    console.log(
      `Name: ${studentsIds[i].name},Age: ${studentsIds[i].age}, Marks: ${studentsIds[i].marks}`
    );
  }
}
const students: Student[] = [
  { name: "Ali", age: 20, marks: 75 },
  { name: "Sara", age: 22, marks: 85 },
  { name: "Ahmed", age: 21, marks: 90 },
];
studentsProperties(students); //Output  Name: Sara - Age: 22, Marks: 85 ,Name: Ahmed - Age: 21, Marks: 90

// *Function Signature:*

// typescript
// interface Student {
//     name: string;
//     age: number;
//     marks: number;
// }

// function printTopStudents(students: Student[]): void {
//     // Your code here
// }

// *Example:*

// typescript
// // Input
// const students: Student[] = [
//     { name: "Ali", age: 20, marks: 75 },
//     { name: "Sara", age: 22, marks: 85 },
//     { name: "John", age: 21, marks: 90 }
// ];

// // Output
// printTopStudents(students);
// // Should print:
// // Sara - Age: 22, Marks: 85
// // John - Age: 21, Marks: 90

// *Hints:*

// 1. Loop through the array of student objects.
// 2. Check if the marks property of each student is greater than 80.
// 3. If true, print the student's details.
