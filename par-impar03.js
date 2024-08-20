document.getElementById("form").addEventListener("submit", function (event) { 
    event.preventDefault()
    
    const number = document.getElementById("number").value;
    const resultado = document.getElementById("resultado");

    if (number % 2 == 0) {
    resultado.textContent = `Esse numero ${number} e par!`;

    } else {
    resultado.textContent = `Esse numero ${number} e Impar!`;
} 
 })



//  {}