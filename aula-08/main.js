let operacao;

const somaReferencia = document.querySelector("#soma");
const subtracaoReferencia = document.querySelector("#subtracao");
const multiplicacaoReferencia = document.querySelector("#multiplicacao");
const divisaoReferencia = document.querySelector("#divisao");
const igualReferencia = document.querySelector("#igual");

somaReferencia.addEventListener("click", () => {
    operacao = "soma";
});

subtracaoReferencia.addEventListener("click", () => {
    operacao = "subtracao";
});

multiplicacaoReferencia.addEventListener("click", () => {
    operacao = "multiplicacao";
});

divisaoReferencia.addEventListener("click", () => {
    operacao = "divisao";
});

igualReferencia.addEventListener("click", () => {
    
    let primeiroOperando = Number(document.querySelector("#primeiroOperando").value);
    let segundoOperando = Number(document.querySelector("#segundoOperando").value);
    let resultado = calcular(primeiroOperando, segundoOperando, operacao);

    document.querySelector("#resultado").innerText = `Resultado: ${resultado}`;
});

function calcular(primeiroOperando, segundoOperando, operacao) {
    switch(operacao) {
        case "soma":
            return primeiroOperando + segundoOperando;
        case "subtracao":
            return primeiroOperando - segundoOperando;
        case "multiplicacao":
            return primeiroOperando * segundoOperando;
        case "divisao":
            return primeiroOperando / segundoOperando;
    }
}