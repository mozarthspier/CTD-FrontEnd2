import { subtrair } from "./subtrair.js";
import { somar } from "./somar.js";
import { multiplicar } from "./multiplicar.js";
import { dividir } from "./dividir.js";

let continuar;

do {
    let operacao = prompt("1 - somar, 2 - subtrair, 3 - multiplicar, 4 - dividir")
    operacao = parseInt(operacao)

    let num1 = prompt("Digite o primeiro operando:")
    num1 = parseInt(num1)

    let num2 = prompt("Digite o segundo operando:")
    num2 = parseInt(num2)

    function calcular (operacao, num1, num2){
        switch (operacao){
            case 1: 
                return somar(num1, num2)         
            case 2:
                return subtrair(num1, num2)
            case 3:
                return multiplicar(num1, num2)
            case 4:
                return dividir(num1, num2)
            default:
                return "Operacao inválida"
        }
    }
    try {
        let resultado = calcular(operacao, num1, num2);
        alert("Resultado: " + resultado);
    } catch (error) {
        alert(error.message)
    }
    continuar = confirm("Você quer calcular de novo?");
} while (continuar);