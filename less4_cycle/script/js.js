// 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 2
let limitNumber = parseInt(prompt("Введіть число N для пошуку парних чисел:"));

for (let i = 1; i <= limitNumber; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 3
let maxNumber = parseInt(prompt("Введіть число N для обчислення суми:"));
let totalAmount = 0;

for (let i = 1; i <= maxNumber; i++) {
    totalAmount += i;
}

console.log(totalAmount);
alert(totalAmount);
// 4
let startCount = parseInt(prompt("Введіть число N для зворотного відліку:"));

for (let i = startCount; i >= 1; i--) {
    console.log(i);
}
// 5
let inputNumber = parseInt(prompt("Введіть число N для таблиці множення:"));

for (let i = 1; i <= 10; i++) {
    let result = inputNumber * i;
    console.log(inputNumber + " x " + i + " = " + result);
}
// 6
const passKey = "admin123";
let enteredSecret;

do {
    enteredSecret = prompt("Введіть пароль:");
    if (enteredSecret !== passKey) {
        console.log("Неправильний пароль");
        alert("Неправильний пароль");
    }
} while (enteredSecret !== passKey);

console.log("Пароль правильний");
alert("Пароль правильний");
// 7
const secretCode = "admin123";
let isSuccess = false;

for (let i = 1; i <= 3; i++) {
    let currentInput = prompt("Введіть пароль (Спроба " + i + " з 3):");

    if (currentInput === secretCode) {
        isSuccess = true;
        break;
    } else {
        alert("Неправильний пароль");
    }
}

if (isSuccess) {
    console.log("Доступ дозволено");
    alert("Доступ дозволено");
} else {
    console.log("Доступ заблоковано");
    alert("Доступ заблоковано");
}
// 8
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
// 9
let userValue = prompt("Введіть число для підрахунку цифр:");
let checkNumber = Math.abs(parseInt(userValue));
let i = 0;

if (checkNumber === 0) {
    i = 1;
}

while (checkNumber >= 1) {
    i++;
    checkNumber = Math.floor(checkNumber / 10);
}

console.log(i);
alert(i);
// 10
const randomNumber = Math.floor(Math.random() * 10) + 1; // Загадка від 1 до 10
let userAttempt;

while (true) {
    userAttempt = parseInt(prompt("Вгадайте число від 1 до 10:"));

    if (userAttempt > randomNumber) {
        console.log("Менше");
        alert("Менше");
    } else if (userAttempt < randomNumber) {
        console.log("Більше");
        alert("Більше");
    } else if (userAttempt === randomNumber) {
        console.log("Ви вгадали");
        alert("Ви вгадали");
        break; // Гра закінчена, виходимо з циклу
    } else {
        alert("Будь ласка, введіть число.");
    }
}