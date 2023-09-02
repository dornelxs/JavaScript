const item1Input = document.getElementById('item1');
const valor1Input = document.getElementById('valor1');
const comprarBtn = document.getElementById('comprarBtn');

const resultadoElement = document.getElementById('resultado');

comprarBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const item1 = item1Input.value;
    let valor = 0;

    const maca = 'Maçã' 
    const uva = 'Uva' 
    const abacate = 'Abacate'
    const morango = 'Morango'
    const abacaxi = 'Abacaxi'

    if (item1 === maca) {
        valor = valor1Input.value * 2.5;
        resultadoElement.innerHTML = `Você comprou ${valor1Input.value} unidades de ${maca}.<br>
        O valor total é: R$ ${valor.toFixed(2)}`;    
    }
    else if (item1 === uva) {
        valor = valor1Input.value * 5.80;
        resultadoElement.innerHTML = `Você comprou ${valor1Input.value} unidades de ${uva}.<br>
        O valor total é: R$ ${valor.toFixed(2)}`;    
    }
    else if (item1 === abacate) {
        valor = valor1Input.value * 7.50;
        resultadoElement.innerHTML = `Você comprou ${valor1Input.value} unidades de ${abacate}.<br>
        O valor total é: R$ ${valor.toFixed(2)}`;    
    }
    else if (item1 === morango) {
        valor = valor1Input.value * 12.50;
        resultadoElement.innerHTML = `Você comprou ${valor1Input.value} unidades de ${morango}.<br>
        O valor total é: R$ ${valor.toFixed(2)}`;    
    }
    else if (item1 === abacaxi) {
        valor = valor1Input.value * 8.0;
        resultadoElement.innerHTML = `Você comprou ${valor1Input.value} unidades de ${abacaxi}.<br>
        O valor total é: R$ ${valor.toFixed(2)}`;    
    }
    else{
    resultadoElement.innerHTML = `Me desculpe, <br> 
    no momento estamos sem ${item1}. :/`
    };

});
