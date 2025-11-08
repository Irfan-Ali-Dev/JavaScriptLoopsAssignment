console.log("Hello JavaScript Loops Assignments");


// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.
console.log("Solution # 1:");
let fruit = ["apple", "banana", "cherry"]
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
    }


// 2.[Given an array of colors ["red[, "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.
console.log("Solution # 2:");
let color = ["red", "green", "blue"]
const output = document.querySelector("#output")
for (let i = 0; i < color.length; i++) {
    output.innerHTML += color[i] + ", ";
}

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.
console.log("Solution # 3:");
// let number10 = 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Use a while loop to print numbers from 5 to 1 in the console.
console.log("Solution # 4:");
let n = 5;
while (n >= 1) {
    console.log(n);
    n--;
}

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.
console.log("Solution # 5:");
let neme = ["Ali", "Sara", "Ahmed"];
const names = document.querySelector("#names")
for (let i = 0; i < neme.length; i++) {
    names.innerHTML += neme[i] + ", ";
    console.log(neme[i]);}

// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.
console.log("Solution # 6:");
const load = document.querySelector("#load");
const check = document.querySelector("#check")
// console.log(load.innerHTML = "Loading...");
function loading() {
    load.innerHTML = "Loading...";
}

// 7. Use a loop to calculate the sum of numbers in an 
// array [5, 10, 15] and display the total in a paragraph with ID sum.
console.log("Solution # 7:");
let num = [5, 10, 15];
const sum = document.querySelector("#sum");
let total = 0;
for (let i = 0; i < num.length; i++) {
    total += num[i];    
} 
sum.innerHTML = "Total: " + total;

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and
//  display them as a single string in a div with ID cities.
console.log("Solution # 8:");
let city = ["Karachi", "Lahore", "Quetta"];
const cities = document.querySelector("#cities");
for (let i = 0; i < city.length; i++) {
    cities.innerHTML += city[i] + ", ";
}

// 9. Write a loop that counts from 1 to 20 and logs only the 
// even numbers in the console.
console.log("Solution # 9:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find
// and display the largest number in a paragraph with ID max.
console.log("Solution # 10:");
let numMax = [45, 22, 89, 100];
let maxNum = numMax[0];
const max = document.querySelector("#max")
for (let i = 0; i < numMax.length; i++) {
    if (numMax[i] > maxNum) {
        maxNum = numMax[i];
    }
} max.innerHTML += maxNum; console.log(maxNum);

// 11. Use document.querySelector to select a div with ID result and change 
// its text to "Task Complete".
console.log("Solution # 11:");
const result = document.querySelector("#result");
function taskCompleted() {
    result.innerHTML = "Task Complete";    
}

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to 
// calculate the average and display it inside an element with ID averageTemp.
console.log("Solution # 12:");
const temperatures = [30, 35, 32, 40];
let sumTemp = 0;
const averageTemp = document.querySelector("#averageTemp")
for (let i = 0; i < temperatures.length; i++) {
    sumTemp += temperatures[i];    
} const average = sumTemp / temperatures.length;
averageTemp.innerHTML += average
console.log(average);

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the 
// total inside a paragraph with ID totalSum.
console.log("Solution # 13:");
const totalSum = document.querySelector("#totalSum");
let ttSum = 0;
for (let i = 1; i <= 100; i++) {
    ttSum += i;  
} 
totalSum.innerHTML = "Total Sum is: " + ttSum;

// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] 
// into a single paragraph with ID animals.
console.log("Solution # 14:");
const animals = document.querySelector("#animals");
let animal = ["dog", "cat", "bird"];
for (let i = 0; i < animal.length; i++) {
    animals.innerHTML = animal + " ";    
}

// // 15. Use document.querySelector to select a heading with ID title and change its text to
// // "Welcome to JavaScript!".
// console.log("Solution # 1:");

// // 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// // them to the console.
// console.log("Solution # 1:");

// // 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// // display the count in a div with ID highScores.
// console.log("Solution # 1:");

// // 18. Select an element with ID message and change its text to "Updated successfully" using
// // document.querySelector.
// console.log("Solution # 1:");

// // 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// // them in a paragraph with ID subjectsList.
// console.log("Solution # 1:");

// // 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// // an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// // elements.
// console.log("Solution # 1:");

// // 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].
// console.log("Solution # 1:");

// // 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.
// console.log("Solution # 1:");

// console.log("Solution # 1:");

// // 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].
// console.log("Solution # 1:");

// // 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// // multiplied by 3.
// console.log("Solution # 1:");

// // 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.
// console.log("Solution # 1:");

// // 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.
// console.log("Solution # 1:");

// // 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
// console.log("Solution # 1:");

// // 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// // sum of corresponding elements.
// console.log("Solution # 1:");

// // 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
// console.log("Solution # 1:");

// // 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// // .reverse()).
// console.log("Solution # 1:");

// // 31. Write a loop that finds and prints all the prime numbers between 1 and 50.
// console.log("Solution # 1:");

// // 32. Create a loop that finds the difference between the largest and smallest numbers in an
// // array [11, 4, 99, 2, 47].
// console.log("Solution # 1:");

// // 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.
// console.log("Solution # 1:");

// // 34. Loop through an array of numbers and create a new array that only contains odd
// // numbers.
// console.log("Solution # 1:");

// // 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// // elements in a new array.
// console.log("Solution # 1:");

// // 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.
// console.log("Solution # 1:");

// // 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.
// console.log("Solution # 1:");

// // 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// // equal to the average of the array.
// console.log("Solution # 1:");

// // 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.