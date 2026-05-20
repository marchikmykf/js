let isAuthorized, internetSpeed, isBanned, accessResult;

isAuthorized = prompt("Чи авторизований користувач? (true або false)");
internetSpeed = prompt("Введіть швидкість інтернету (Мб/с):");
isBanned = prompt("Чи заблокований акаунт? (true або false)");

if (isAuthorized === "true" && internetSpeed >= 20 && isBanned !== "true") {
    accessResult = "Доступ дозволено";
} else {
    accessResult = "Доступ заборонено";
}

console.log(accessResult);
alert(accessResult);