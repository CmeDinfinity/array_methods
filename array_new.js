// 1. Looping Through an Array

const numbers = [10, 20, 30, 40];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}

// Using forEach
numbers.forEach(number => {
console.log(number);
});

// Using for...of
for (let number of numbers) {
console.log(number);
}

// Using for...in
for (let i in numbers) {
console.log(numbers[i]);
}

// 2. Loop Through an Object

const student = {
name: "Surya",
age: 27,
grade: "A"
};

for (let key in student) {
console.log(key, student[key]);
}

// 3. Using map()

const marks = [50, 60, 70, 80];

const new_marks = marks.map(mark => mark - 10);

console.log(new_marks);

// 4. Using filter()

const values = [5, 12, 8, 25, 3, 15];

const filtered_values = values.filter(value => value > 10);

console.log(filtered_values);

// 5. Using reduce()

const nums = [5, 10, 15, 20];

const total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);
