/**
 * Napišite JavaScript kod koji će u HTML element s ID "date"upisati trenutni datum i vrijeme.
 */

console.log("Hello world!");

const dateElement = document.querySelector("#date");
const today = new Date();

dateElement.innerHTML = today;
