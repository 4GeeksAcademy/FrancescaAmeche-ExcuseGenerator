/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function getRandomIndex(array) {
  let Randomindex = Math.floor(Math.random() * array.length);
  return Randomindex;
}

function generateExcuse() {
  return (
    who[getRandomIndex(who)] +
    " " +
    action[getRandomIndex(action)] +
    " " +
    what[getRandomIndex(what)] +
    " " +
    when[getRandomIndex(when)]
  );
}

window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
