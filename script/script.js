var respostas = [
  {
    pergunta: "Unidade que concentra grande parte das funcionalidades de um computador, conhecida tambem como 'cerebro'.",
    resposta: "cpu",
    id: 0,
  },
  {
    pergunta:
      "É a unidade responsável pela execução de equacoes aritmética, e operacoes logicas de algebra booleana",
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
      "É responsável pelo armazenamento de informações necessárias para a execução de aplicativos em uso e para o funcionamento do próprio sistema operacional.",
    resposta: "ram",
    id: 3,
  },
  {
    pergunta: "É um tipo de memória que permite apenas a leitura de dados e não a escrita",
    resposta: "rom",
    id: 4,
  },
  {
    pergunta: "é um tipo de chip de memória de computador que mantém seus dados quando a energia é desligada, conhecida por ser nao volatil.",
    resposta: "eprom",
    id: 5,
  },
  {
    pergunta: "É encontrada comumente em cartões de memória, Pen-Drives, PDAs e celulares.",
    resposta: "flash",
    id: 6,
  },
  {
    pergunta: "Tem como função armazenar grandes quantidades de informações.",
    resposta: "memoria de massa",
    id: 7,
  },
  {
    pergunta: "É um recurso que capacita os dispositivos de entrada e saída a terem acesso direto à memória RAM, sem sobrecarregar o processador.",
    resposta: "dma",
    id: 8,
  },
  {
    pergunta: "Entrada de controle de muitos circuitos integrados , como chips de memória.",
    resposta: "cs",
    id: 9,
  },
  {
    pergunta: "É uma arquitetura de barramento de computador usada para troca de dados entre dispositivos que são identificados pelo endereço de hardware da memória física.",
    resposta: "adress bus",
    id: 10,
  },
  {
    pergunta: "É uma estrutura de software para distribuição e para o gerenciamento de dados em tempo real estando em sistemas distribuídos.",
    resposta: "data bus",
    id: 11,
  },
  {
    pergunta: "Processador fabricado pela intel tendo seu primeiro modelo lançado em setembro de 2009 com quatro núcleos, cache L3 de 8MB e frequência de 2,66GHz.",
    resposta: "i5",
    id: 12,
  },
  {
    pergunta: "Processador fabricado pela intel teve seu primeiro modelo em meados de 2008, com a microarquitetura Sandy Bridge, possui versões com dois, quatro e seis núcleos de processamento.",
    resposta: "i7",
    id: 13,
  },
  {
    pergunta: "Significa dois núcleos.",
    resposta: "dual core",
    id: 14,
  },
  {
    pergunta: "Significa quatro núcleos.",
    resposta: "quad core",
    id: 15,
  },
  {
    pergunta: "Uma ordem de execução, com instruções encadeadas que são desempenhadas uma por vez.",
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


