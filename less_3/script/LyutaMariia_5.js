let grade, resultMessage;

grade = Number(prompt("Введіть свою оцінку (від 1 до 12):"));

switch (grade) {
    case 12:
    case 11:
    case 10:
        resultMessage = "Відмінний результат";
        break;

    case 9:
    case 8:
    case 7:
        resultMessage = "Добрий результат";
        break;

    case 6:
    case 5:
    case 4:
        resultMessage = "Задовільний результат";
        break;

    case 3:
    case 2:
    case 1:
        resultMessage = "Потрібно покращити знання";
        break;

    default:
        resultMessage = "Некоректна оцінка";
        break;
}

console.log(resultMessage);
alert(resultMessage);