import { fibonacci } from "./fibonacci.js";
import { mergerSort } from "./mergeSort.js";
document.querySelector("#button").addEventListener("click", () => {
  const $valorFib = document.querySelector("#fibonacci").value;
  const $valorMerg = document.querySelector("#mergerSort").value.split(",").map(Number);
  document.querySelector("#result").innerHTML = `Fibonacci: ${fibonacci(
    $valorFib
  )}<br/> Merger Sort: ${mergerSort($valorMerg)}`;
});
