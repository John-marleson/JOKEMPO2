let pontosJogador = 0;
let pontosComputador = 0;

const opcoes = ["pedra", "papel", "tesoura"];
const icones = {
    pedra: "✊",
    papel: "✋",
    tesoura: "✌️"
};

const scoreJogadorEl = document.getElementById("score-jogador");
const scoreComputadorEl = document.getElementById("score-computador");
const escolhaJogadorEl = document.getElementById("escolha-jogador");
const escolhaComputadorEl = document.getElementById("escolha-computador");
const msgResultadoEl = document.getElementById("mensagem-resultado");
const botoes = document.querySelectorAll(".btn-escolha");

function gerarJogadaComputador() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opcoes[indiceAleatorio];
}

function checarVencedor(jogador, computador) {
    if (jogador === computador) return "empate";

    if ((jogador === "pedra" && computador === "tesoura") || (jogador === "papel" && computador === "pedra") || (jogador === "tesoura" && computador === "papel")) {
        return "jogador";
    }

    return "computador";
}

function jogar(escolhaDoJogador) {
    const escolhaDoComputador = gerarJogadaComputador();

    escolhaJogadorEl.textContent = icones[escolhaDoJogador];
    escolhaComputadorEl.textContent = icones[escolhaDoComputador];

    const resultado = checarVencedor(escolhaDoJogador, escolhaDoComputador);

    if (resultado === "jogador") {
        pontosJogador++;
        scoreJogadorEl.textContent = pontosJogador;
        msgResultadoEl.textContent = "VOCÊ GANHOU!";
        msgResultadoEl.className = "status-resultado ganhou";
    } else if (resultado === "computador") {
        pontosComputador++;
        scoreComputadorEl.textContent = pontosComputador;
        msgResultadoEl.textContent = "PERDEU";
        msgResultadoEl.className = "status-resultado perdeu";
    } else {
        msgResultadoEl.textContent = "EMPATE";
        msgResultadoEl.className = "status-resultado empate";
    }
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const escolha = botao.getAttribute("data-opcao");
        jogar(escolha);
    });
});