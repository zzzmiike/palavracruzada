var respostas = [
  {
    pergunta: "O cérebro dos dispositivos ou Unidade Central de Processamento",
    resposta: "cpu",
  },
  {
    pergunta:
      "É um circuito combinatório responsável pela execução de somas, subtrações e funções lógicas, em um sistema digital.",
    resposta: "ula",
  },
  {
    pergunta:
      "São um tipo de memória com limites em termos de capacidade de armazenamento porém muito mais rápido no que se refere à velocidade de acesso aos dados.",
    resposta: "registradores",
  },
  {
    pergunta:
      "É responsável pelo armazenamento de informações necessárias para a execução de aplicativos em uso e para o funcionamento do próprio sistema operacional.",
    resposta: "ram",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "rom",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "eprom",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "flash",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "memoria de massa",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "dma",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "cs",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "adress bus",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "data bus",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "i5",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "i7",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "dual core",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "quad core",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "threads",
  },
  {
    pergunta: "hkjlhfjklgch bvcxngvhb",
    resposta: "cache",
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
var j = 0;
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
                onkeyup="verificar()"
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

function verificar() {
  var resposta = "";
  var idInput = document.getElementById(`${j}`);
  resposta = idInput.value;
  for (var i = 0; i < respostas.length; i++) {
    if (resposta === respostas[j].resposta) {
      console.log(j);
      console.log(respostas[j]);
    
      VerifyClass();
      verResposta();
      
      Array.from(divQuestoes).forEach((elementoAtual) => {
        elementoAtual.style.transform = `translateY(${valorTransform}rem)`;
      });

      return;
    }
  }
}

function verResposta() {
  j++;

  valorTransform -= 30;
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


