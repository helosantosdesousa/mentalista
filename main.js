// entre 1 e 100
var numeroSecreto = parseInt(Math.random()*101);

while (chute != numeroSecreto) {
    var chute = prompt('Olá jogador, seja bem vindo ao Mentalista! Um jogo em que você deve descobrir o número escolhido pela IA de 0 à 100!. Escolha um número de 0 à 100 :)');
    
    if (chute == numeroSecreto){
        alert ('Acertou! 🎉');
    }
    else if (chute > numeroSecreto) 
    {
        alert ('você errou! 💀 O número é MENOR que sua escolha ⬇️');
    }
    else if (chute < numeroSecreto){
        alert ('Você errou!💀 O número é MAIOR que sua escolha ⬆️');
    }
    
}
