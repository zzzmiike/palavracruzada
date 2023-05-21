const resposta = [
    "cpu",
    "ula",
    "registradores",
    "ram",
    "rom",
    "eprom",
    "flash",
    "memoria de massa",
    "dma",
    "cs",
    "adress bus",
    "data bus",
    "i5",
    "i7",
    "dual core",
    "quad core",
    "threads",
    "cache",
]
var escrito = ""

var linha = '';
function exibirQuadro() {
    for (var i = 0; i < resposta.length; i++) {
        for (var j = 0; j < resposta[i].length; j++) {
            linha += resposta[i][j] + ' ';
        }
        console.log(linha);
    }
}
function adicionarPalavra(palavra, linha, coluna, direcao) {
    var palavraArray = palavra.split('');

    if (direcao === 'vertical') {
        for (var i = 0; i < palavraArray.length; i++) {
            if (resposta[linha + i][coluna] === ' ' || resposta[linha + i][coluna] === palavraArray[i]) {
                resposta[linha + i][coluna] = palavraArray[i];
            } else {
                console.log('Não é possível adicionar a palavra nessa posição.');
                return;
            }
        }
    } else if (direcao === 'horizontal') {
        for (var i = 0; i < palavraArray.length; i++) {
            if (resposta[linha][coluna + i] === ' ' || resposta[linha][coluna + i] === palavraArray[i]) {
                resposta[linha][coluna + i] = palavraArray[i];
            } else {
                console.log('Não é possível adicionar a palavra nessa posição.');
                return;
            }
        }
    } else {
        console.log('Direção inválida.');
        return;
    }
}
adicionarPalavra('cpu', 0, 0, 'horizontal');
adicionarPalavra('ula', 2, 2, 'vertical');
exibirQuadro();





