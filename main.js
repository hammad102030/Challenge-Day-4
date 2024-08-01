// *30 Day DSA Challenge from Hello Coders Team*
// Day:4 Task
// Question 7: Find Duplicate Numbers in an Array
// *Description:*
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the duplicate numbers from the original array. If there are no duplicates, return an empty array.
function findDuplicates(numbers) {
    var emptyArray = [];
    var newArray = {};
    for (var i = 0; i < numbers.length; i++)
        if (newArray[numbers[i]]) {
            newArray[numbers[i]] += 1;
        }
        else {
            newArray[numbers[i]] = 1;
        }
    for (var key in newArray) {
        if (newArray[key] > 1) {
            emptyArray.push(parseInt(key));
        }
    }
    return emptyArray;
}
var myArray = findDuplicates([1, 2, 3, 2, 4, 5, 6, 5]);
console.log(myArray); // Output [2,5]
function studentsProperties(properties) {
    var studentsIds = [];
    for (var i = 0; i < properties.length; i++) {
        if (properties[i].marks > 80) {
            studentsIds.push(properties[i]);
        }
    }
    console.log("Students marks greater than 80:");
    for (var i = 0; i < studentsIds.length; i++) {
        console.log("{Name: ".concat(studentsIds[i].name, ",Age: ").concat(studentsIds[i].age, ", Marks: ").concat(studentsIds[i].marks, "}"));
    }
}
var students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 },
];
studentsProperties(students);
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
