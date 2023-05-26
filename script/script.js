var respostas = [
    {
        pergunta: 'O cérebro dos dispositivos ou Unidade Central de Processamento',
        resposta: 'cpu',
    }, {
        pergunta: 'É um circuito combinatório responsável pela execução de somas, subtrações e funções lógicas, em um sistema digital.',
        resposta: 'ula'
    }, {
        pergunta: 'São um tipo de memória com limites em termos de capacidade de armazenamento porém muito mais rápido no que se refere à velocidade de acesso aos dados.',
        resposta: 'registradores'
    }, {
        pergunta: 'É responsável pelo armazenamento de informações necessárias para a execução de aplicativos em uso e para o funcionamento do próprio sistema operacional.',
        resposta: 'ram'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'rom'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'eprom'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'flash'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'memoria de massa'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'dma'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'cs'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'adress bus'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'data bus'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'i5'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'i7'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'dual core'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'quad core'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'threads'
    }, {
        pergunta: 'hkjlhfjklgch bvcxngvhb',
        resposta: 'cache'
    }
];

function comparar() {

}
var escrito = ""
var j = 0
var linha = '';
function exibirQuadro() {
    for (var i = 0; i < respostas.length; i++) {
        boxQuestoes.innerHTML += `
            <details class="question" id="det${i}">
                <summary id="sum${1}">${i + 1}° Questão</summary>
                <div class="detQuest">
                    <p>
                        ${respostas[i].pergunta}
                    </p>
                    <div><input type="text" id="${i}" class="iptQuestion" onkeyup="verificar()" placeholder="Insira aqui a respostas"></div>
                </div>
            </details>
            `
    }

    for (var i = 0; i < 500; i++) {
        cruzadinha.innerHTML += `<div id="${i}"class="letterContainer"></div>`
    }
    for (var i = 0; i < 3; i++) {
        if (i == 3){
            cruzadinha.innerHTML = `<div class="containerLetter"></div>`
        };
    }
    
}


function verificar() {
    var resposta = ""
    var idInput = document.getElementById(`${j}`)
    resposta = idInput.value;
    for (var i = 0; i < respostas.length; i++) {
        if (resposta === respostas[j].resposta) {
            console.log(j)
            console.log(respostas[j])
            verResposta()
            return
        }
    }
}

function verResposta(){
    j++
}