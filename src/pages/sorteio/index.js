const readLine = require('prompt-sync')();

function Sorteio(){
    let numeroSorteado = parseInt(Math.random() * 1000);
    console.log(numeroSorteado)
    console.log("Escreva Um Numero");
    let numeroEscolhido = Number(readLine());
    let teste = 9;
    for(let i = 1; i <= 9; i++){
        if(numeroEscolhido === numeroSorteado){
            console.log("Acertou!")
            break
        }
        if(numeroEscolhido < numeroSorteado){
            teste--
            console.log("Maior, " + "Tente Novamente, Chances restantes: " + (teste + 1))
            numeroEscolhido = Number(readLine());
        }
        if(numeroEscolhido > numeroSorteado){
            teste--
            console.log("Menor, " + "Tente Novamente, Chances restantes: " + (teste + 1))
            numeroEscolhido = Number(readLine());
        }
    }
    if(teste === 0){
        console.log("Perdeu, Numero Sorteado: " + numeroSorteado)
    }
}
function main(){
    try{
        Sorteio();
    } catch(err){
        console.log(err.message)
    }
}
main();