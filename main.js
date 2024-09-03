const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Bolsa família em dobro, mas você e todos o seus conhecidos deixam de receber",
                afirmacao: "Você e seus conhecidos continuam pobres, com menos de um salário minímo",
            },
            {
                texto: "Ônibus acessível e gratuito mas a circulação de ônibus é muito menor",
                afirmacao: "Você vai ficar esperando o ônibus por 1h, ou 2h, ou até mesmo 3h...",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "O aquecimento global desaparece, mas vai ter o esfriamento global",
                afirmacao: "Você fica com hipotermia, correndo o risco e morrer",
            },
            {
                texto: "Fim da poluição, mas você terá de viver num chiqueiro para sempre com um uma cabra que grita 24hs",
                afirmacao: "Você se torna uma pessoa fedorenta e que não consegue dormir, isso acaba com sua saúde ",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "O fim do cyber bullying e de qualquer vazamento de dados, mas uma inteligência artificial dita a internet",
                afirmacao:"Você se torna escravo da inteligência artificial, e não tem mais nenhum privacidade",
            },
            {
                texto: "O fim do trabalho escravo,mas todo trabalho é substituído por máquinas",
                afirmacao: "Todas as pessoas do mundo se tornam desempregadas e extremamente pobres,e as maquinas dominam tudo",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();