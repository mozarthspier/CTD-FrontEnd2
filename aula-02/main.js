import { alertLegal } from "./alertLegal.js";

alertLegal();

//let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
//let escolhaBot = parseInt( Math.random()*3+1 )



/*
                        Bot
                Pedra | Papel | Tesoura
     Pedra   | Empate | Bot   | Jog
Jog  Papel   | Jog    | Empate| Bot
     Tesoura | Bot    | Jog   | Empate


*/

// const resultado = [["Empate", "Bot", "Jogador"], ["Jog", ], []]


/*function decideVencedor(escolhaUsuario, escolhaBot)

if(escolhaUsuario === 1) {

    if(escolhaBot === 1) {

        alert('empatou')

    }

    if(escolhaBot === 2) {

        alert('o bot ganhou')

    }

    if(escolhaBot === 3) {

        alert('o usuário ganhou')

    }

}

if(escolhaUsuario === 2) {

    if(escolhaBot === 1) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 2) {

        alert('empatou')

    }

    if(escolhaBot === 3) {

        alert('o bot ganhou')

    }

}

if(escolhaUsuario === 3) {

    if(escolhaBot === 1) {

        alert('o bot ganhou')

    }

    if(escolhaBot === 2) {

        alert('o usuário ganhou')

    }

    if(escolhaBot === 3) {

        alert('o usuário ganhou')

    }

    return 3
}

console.log('Jogada do Usuário '+escolhaUsuario)
console.log('Jogada do Bot '+escolhaBot)
*/