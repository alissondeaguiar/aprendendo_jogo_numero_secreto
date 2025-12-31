// definição de função para variavel
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log (`Numero secreto é ${numeroSecreto}`);
let tentativas = 1;


//let titulo = document.querySelector(`h1`);
//titulo.innerHTML = `Jogo do número secreto`;
//let paragrafo = document.querySelector(`p`);
//paragrafo.innerHTML = `Escolha um número entre 1 e 10`;

//Evolução dos comandos acima
//funçao com parametros
function exibirTextoNaTela (tag, texto) {
let campo = document.querySelector (tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});

}


function exibirMensagemInicial ( ) {
    exibirTextoNaTela ('h1','Jogo do número secreto');
    exibirTextoNaTela ('p',`Escolha um número entre 1 e ${numeroLimite}`);
} 

exibirMensagemInicial ( );

document.getElementById(`chutar`).removeAttribute(`disabled`);


// funcao sem retorno
function verificarChute() {
    let chute = document.querySelector(`input`).value;
    console.log (`Chute é ${chute}`);
    console.log (`Botão Chutar foi clicado`);
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto) {
        console.log (`Você acertou!`);
        exibirTextoNaTela (`h1`,`Parabens! Você acertou!`);    
        let palavraTentativas = tentativas < 2 ? `tentativa` : `tentativas`;
        let mensagemTentativas = `Você usou ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela (`p`,mensagemTentativas);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
        document.getElementById(`chutar`).setAttribute(`disabled`, true);
            
    } else {
        console.log (`Você errou! Tente novamente.`);
        exibirTextoNaTela (`h1`,`Você errou! Tente novamente.`);    
        if (chute > numeroSecreto) {
            exibirTextoNaTela (`p`,`O número secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela (`p`,`O número secreto é maior que ${chute}.`);
        }
        //exibirTextoNaTela (`p`,`Digite um novo numero!`);
        tentativas++;
        console.log (`${tentativas}`);
        limparCampo ();
    }
}

function reiniciarJogo () {
    console.log (`Reiniciando`);
    numeroSecreto = gerarNumeroAleatorio();
    console.log (`Numero secreto é ${numeroSecreto}`);
    tentativas = 1;
    limparCampo ();
    exibirMensagemInicial ();
    document.getElementById(`reiniciar`).setAttribute(`disabled`, true);
    document.getElementById(`chutar`).removeAttribute(`disabled`);

}

// limpa o campo
function limparCampo () {
    chute = document.querySelector(`input`);
    chute.value = ``;
}

    // funcao com retorno
function gerarNumeroAleatorio () {
    // Abaixo só retorna o numero 
    // return parseInt(Math.random() *10 +1);

    // Usando Lista de ARRAYS para não repetir números
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    // IF pra ver se a lista não ta cheia
    if (quantidadeDeNumerosSorteados >=numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    // IF para ver se o número já foi sorteado
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    // Else para adicionar o número na lista se não foi sorteado
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); 
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
