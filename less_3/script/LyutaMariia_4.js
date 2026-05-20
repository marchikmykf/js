let genre, resultMessage;

genre = prompt("Введіть назву музичного жанру (rock, pop, jazz, classical)");

switch (genre) {
    case "rock":
        resultMessage = "Увімкнено рок-плейлист";
        break;

    case "pop":
        resultMessage = "Увімкнено поп-плейлист";
        break;

    case "jazz":
        resultMessage = "Увімкнено джаз-плейлист";
        break;

    case "classical":
        resultMessage = "Увімкнено класичну музику";
        break;

    default:
        resultMessage = "Жанр не знайдено";
        break;
}

console.log(resultMessage);
alert(resultMessage);