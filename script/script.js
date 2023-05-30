var respostas = [
  {
    pergunta: "Que componente é considerado o cérebro de um computador?",
    resposta: "cpu",
    id: 0,
  },
  {
    pergunta:
      "Que unidade do processador é responsável por realizar operações lógicas e aritméticas?",
    resposta: "ula",
    id: 1,
  },
  {
    pergunta:
      "São um tipo de memória com limites em termos de capacidade de armazenamento porém muito mais rápido no que se refere à velocidade de acesso aos dados.",
    resposta: "registradores",
    id: 2,
  },
  {
    pergunta:
      "Que tipo de memória é volátil e perde seus dados quando o dispositivo é desligado?",
    resposta: "ram",
    id: 3,
  },
  {
    pergunta: "Que tipo de memória permite apenas a leitura de dados e não a escrita?",
    resposta: "rom",
    id: 4,
  },
  {
    pergunta: "Que tipo de memória é programável apenas uma vez e requer exposição a uma forte luz ultravioleta para ser apagada?",
    resposta: "eprom",
    id: 5,
  },
  {
    pergunta: "Que tipo de memória é conhecida por sua capacidade de retenção de dados mesmo quando não está recebendo energia?",
    resposta: "flash",
    id: 6,
  },
  {
    pergunta: "Que tipo de memória é comumente utilizado para armazenar dados permanentes em dispositivos eletrônicos, como discos rígidos e SSDs?",
    resposta: "memoria de massa",
    id: 7,
  },
  {
    pergunta: "Que recurso permite que dispositivos de entrada/saída acessem diretamente a memória RAM, sem sobrecarregar a CPU?",
    resposta: "dma",
    id: 8,
  },
  {
    pergunta: "Em barramentos de computador, que sinal é usado para selecionar um dispositivo específico para comunicação?",
    resposta: "cs",
    id: 9,
  },
  {
    pergunta: "Qual é o nome dado à via de comunicação responsável por transmitir endereços de memória?",
    resposta: "adress bus",
    id: 10,
  },
  {
    pergunta: "Qual é o caminho por onde os dados são transmitidos entre a memória e o processador em um computador?",
    resposta: "data bus",
    id: 11,
  },
  {
    pergunta: "Qual é o nome de uma linha de processadores fabricados pela Intel que teve seu primeiro modelo lançado em setembro de 2009, com quatro núcleos, cache L3 de 8MB e frequência de 2,66GHz?",
    resposta: "i5",
    id: 12,
  },
  {
    pergunta: "Qual é o processador da Intel que foi lançado pela primeira vez em meados de 2008 e possui versões com dois, quatro e seis núcleos de processamento?",
    resposta: "i7",
    id: 13,
  },
  {
    pergunta: "Que termo é usado para descrever um processador que possui dois núcleos de processamento?",
    resposta: "dual core",
    id: 14,
  },
  {
    pergunta: "Como é chamado um processador que possui quatro núcleos de processamento?",
    resposta: "quad core",
    id: 15,
  },
  {
    pergunta: "Que conceito permite que um programa execute várias tarefas independentes ao mesmo tempo?",
    resposta: "threads",
    id: 16,
  },
  {
    pergunta: "Uma memória temporária para que recupere velozmente os dados, sem precisar de uma busca direta na memória RAM.",
    resposta: "cache",
    id: 17,
  },
];

var valorTransform = 0;

var divQuestoes;
function obterDivPerguntas() {
  divQuestoes = document.querySelectorAll(".question");
  console.log(divQuestoes);
}

function comparar() {}

var escrito = "";
var linha = "";

function exibirQuadro() {
  for (var i = 0; i < respostas.length; i++) {
    boxQuestoes.innerHTML += `
        <div class="question" style = "transform: translateY(${valorTransform}rem);">
        <summary id="sum${i}" class="containeroNumQuestao">
            <span><b>${i + 1}°</b></span> <span><b>Questão</b></span> 
        </summary>
        <div class="detQuest">
            <p>
            ${respostas[i].pergunta}
            </p>
            
            <input
                type="text"
                id="${i}"
                class="iptQuestion"
                onkeyup="verificar(this.id)"
                placeholder="Insira aqui a respostas"
                autocomplete = "off"
            />
            
        </div>
    </div>
            `;
  }

  boxQuestoes.innerHTML += `
        <div class="question" style = "transform: translateY(${valorTransform}rem);">

        <div class="detQuest">
            <p>
            Quiz completo, parabéns!!
            </p>
            
        </div>
    </div>`

  obterDivPerguntas();
}

var listaClasses = [
  "memoriademassa",
  "adressbus",
  "registradores",
  "i5",
  "i7",
  "cache",
  "eprom",
  "dualcore",
  "ula",
  "threads",
  "flash",
  "dma",
  "databus",
  "quadcore",
  "ram",
  "rom",
  "cs",
  "cpu",
];

var j = 0;

function verificar(id) {
  var resposta = "";

  for (var i = 0; i < respostas.length; i++) {
    j = i
    var idInput = document.getElementById(`${j}`);
    resposta = idInput.value;
    if (resposta == respostas[j].resposta && id == respostas[i].id) {
      console.log(j);
      console.log(respostas[j]);
    
      VerifyClass();
      verResposta();
      
      Array.from(divQuestoes).forEach((elementoAtual) => {
        elementoAtual.style.transform = `translateY(${valorTransform}rem)`;
      });

      idInput.value = ""
      idInput.setAttribute("disabled", "")
      return;

    }
  }
}

function verResposta() {
  j++;
}

var classe
function VerifyClass() {
  for (var i = 0; i < listaClasses.length; i++) {
    
    var idInput = document.getElementById(`${j}`);
    var resposta = idInput.value;
    var respostaFinal = resposta.replaceAll(" ", "").toLowerCase()

    classe = document.querySelectorAll(`.${listaClasses[i]}`)

    if(respostaFinal == listaClasses[i]){
        for(m = 0; m < classe.length; m++){
            classe[m].style.color = "white"
        }
        
    }
    
  }
}

function avancar(){

  if(valorTransform == -480){
    document.getElementById("avancar").style.filter = "grayscale(70%)"
    document.getElementById("avancar").style.cursor = "default"
  }

  if(valorTransform == 0){
    document.getElementById("regredir").style.filter = "grayscale(0%)"
    document.getElementById("regredir").style.cursor = "pointer"
  }

  if(valorTransform == -510){
  }else{
  valorTransform -= 30
  Array.from(divQuestoes).forEach((elementoAtual) => {
    elementoAtual.style.transform = `translateY(${valorTransform}rem)`;
  });
 }
}

function regredir(){
  if(valorTransform == -510){
    document.getElementById("avancar").style.filter = "grayscale(0%)"
    document.getElementById("avancar").style.cursor = "pointer"
  }

  if(valorTransform == -30){
    document.getElementById("regredir").style.filter = "grayscale(70%)"
    document.getElementById("regredir").style.cursor = "default"
  }


  if(valorTransform == 0){
  }else{
  valorTransform += 30

  Array.from(divQuestoes).forEach((elementoAtual) => {
    elementoAtual.style.transform = `translateY(${valorTransform}rem)`;
  });
}
}


