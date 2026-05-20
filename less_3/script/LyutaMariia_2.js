let day, resultMessage;

day = prompt("Введіть день тижня:");

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        resultMessage = "Вартість квитка складає 150 грн";
        break;
    case "четвер":
    case "п'ятниця":
    case "п’ятниця":
        resultMessage = "Вартість квитка складає 200 грн";
        break;
    case "субота":
    case "неділя":
        resultMessage = "Вартість квитка складає 250 грн";
        break;
    default:
        resultMessage = "Помилка введення дня тижня";
        break;
}

console.log(resultMessage);
alert(resultMessage);