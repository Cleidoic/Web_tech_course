const tC = parseInt(prompt("Введите температуру в градусах Цельсия"));
const tF = (9 / 5) * tC + 32;
alert("Цельсий: " + tC + "\nФаренгейт: " + tF.toFixed(2));