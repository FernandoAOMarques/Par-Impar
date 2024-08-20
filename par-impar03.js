document.getElementById("form").addEventListener("submit", function (number) {
    if (number % 2 == 0) {
    resultado.textContent = `Esse numero ${number} e par!`;

 } else {
    resultado.textContent = `Esse numero ${number} e Impar!`;
} 
 })

const number = document.getElementById("number").value;
const resultado = document.getElementById("resultado");

//  {}