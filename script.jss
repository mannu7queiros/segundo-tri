const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de ser informado sobre uma grande violação de dados em uma empresa que você frequenta. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Preocupar-se com a segurança dos seus dados pessoais e verificar imediatamente se há alguma recomendação para proteger suas informações.",
                afirmacao: "afirmação"
            },
            {
                texto: "Achar que isso não afeta você diretamente e ignorar a notícia.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao acessar um novo serviço online, você percebe que ele não tem autenticação de dois fatores disponível. O que você faz?",
        alternativas: [
            {
                texto: "Evita criar uma conta no serviço e procura uma alternativa que ofereça maior segurança.",
                afirmacao: "afirmação"
            },
            {
                texto: "Cria a conta mesmo assim, pois acha que sua senha forte já é suficiente.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você recebe um e-mail de uma fonte desconhecida solicitando informações pessoais em troca de uma recompensa. Qual é sua atitude?",
        alternativas: [
            {
                texto: "Ignora e marca o e-mail como spam, sabendo que pode ser uma tentativa de phishing.",
                afirmacao: "afirmação"
            },
            {
                texto: "Responde ao e-mail, acreditando que pode ganhar algo sem risco.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em uma discussão sobre segurança digital, alguém menciona que a privacidade não importa se você não tem nada a esconder. Qual é a sua resposta?",
        alternativas: [
            {
                texto: "Defende que a privacidade é um direito fundamental e importante para proteger a liberdade individual.",
                afirmacao: "afirmação"
            },
            {
                texto: "Concorda que a privacidade não é importante para pessoas que não têm nada a esconder.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Seu amigo compartilha um aplicativo de origem duvidosa que promete aumentar a segurança do seu dispositivo. O que você faz?",
        alternativas: [
            {
                texto: "Adverte seu amigo sobre os riscos e recomenda usar aplicativos de fontes confiáveis.",
                afirmacao: "afirmação"
            },
            {
                texto: "Instala o aplicativo no seu dispositivo, confiando na recomendação do amigo.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você completou o questionário!";
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas
    textoResultado.textContent = "Obrigado por participar. Reflita sobre suas respostas e continue aprendendo sobre segurança cibernética!";
    caixaResultado.style.display = "block";
}

mostraPergunta();
