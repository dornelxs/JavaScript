const nota1Input = document.getElementById('nota1');
const nota2Input = document.getElementById('nota2');
const nota3Input = document.getElementById('nota3');

const formulario = document.querySelector('form');

const resultadoElement = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);
    const nota3 = parseFloat(nota3Input.value); 

    const peso1 = 2
    const peso2 = 3
    const peso3 = 5

    const media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

    resultadoElement.textContent = `Sua média é: ${media.toFixed(2)}`;

});