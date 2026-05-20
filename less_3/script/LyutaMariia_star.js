let temperature, sensorError, data;

temperature = Number(prompt("Введіть температуру в кімнаті:"));
sensorError = prompt("Чи є помилка датчика? (true або false)");

if (sensorError === "true") {
    data = "Помилка датчика температури";
} else if (temperature < 18) {
    data = "Увімкнути обігрів";
} else if (temperature >= 18 && temperature <= 25) {
    data = "Температура комфортна";
} else if (temperature > 25) {
    data = "Увімкнути кондиціонер";
}

console.log(data);
alert(data);