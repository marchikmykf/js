let score, homeworkDone, finalTestPassed, certificateResult;

score = Number(prompt("Введіть кількість балів:"));
homeworkDone = prompt("Чи виконані всі домашні завдання? (true або false)");
finalTestPassed = prompt("Чи пройдено фінальний тест? (true або false)");

if (score >= 70 && homeworkDone === "true" && finalTestPassed === "true") {
    certificateResult = "Сертифікат успішно отримано";
} else {
    certificateResult = "Умови для отримання сертифіката не виконані";
}

console.log(certificateResult);
alert(certificateResult);