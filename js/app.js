function jogosAlugados() {
    let jogos = document.querySelectorAll(".dashboard__item__img--rented");
    console.log("Você tem " + jogos.length + " jogos alugados.");
}

function alterarStatus(idDoJogo) {
    let jogo = document.getElementById("game-" + idDoJogo);
    let botao = jogo.querySelector(".dashboard__item__button");
    let imagem = jogo.querySelector(".dashboard__item__img");

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirma = confirm("Você quer realmente devolver este jogo?");
        if (confirma) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = "Alugar";
            jogosAlugados(); // atualiza o console
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
        jogosAlugados(); // atualiza o console
    }
}