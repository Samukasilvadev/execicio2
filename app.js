// // titulo = document.querySelector("h1");
// // titulo.innerHTML ="Hora do desafio";

// function exibirMensagemNoConsole() {
//     console.log ("O botão foi clicado")
// }

// function exibirMensagemTeAmo() {
//     console.log ("Eu amo JS")
// }

// function cidadeDoBrasil() {
//     let cidade = prompt ("Digite o nome de uma cidade Brasileira.");
//     alert (`Estive em ${cidade} e lembrei de você.`)
// }

// function soma () {
//     let numero1 = parseInt (prompt ("digite um número."));
//     let numero2 = parseInt(prompt ("digite outro número."));
//     let resultado = (numero1 + numero2);
//     alert (`${resultado}`)
// }

function calcularimc(altura, peso) {
    let imc= peso/(altura*altura);
    return (imc)
}

function calcularFatorial(fatorial) {
    let resultado = 1;
    while (fatorial > 0) {
        resultado *= fatorial;
        fatorial--;
    }
    return resultado;
    
}console.log(calcularFatorial());

function conversaoDolar(dolar) {
    let conversao = dolar * 4.8;
    return conversao;
} 
console.log(conversaoDolar(5))

