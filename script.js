const botaoSim = document.getElementById("sim");

document.addEventListener("DOMContentLoaded", () => {
    let botaoNao = document.getElementById("nao");

    const fuja = () => { 
        let larguraJanela = window.innerWidth;
        let alturaJanela = window.innerHeight;

        let maxX = larguraJanela - botaoNao.offsetWidth;
        let maxY = alturaJanela - botaoNao.offsetHeight;

        let aleatorioX = Math.floor(Math.random() * maxX);
        let aleatorioY = Math.floor(Math.random() * maxY);

        botaoNao.style.position = "absolute"; 
        botaoNao.style.left = aleatorioX + "px";
        botaoNao.style.top = aleatorioY + "px";
    };

    botaoNao.addEventListener("click", fuja);
});

botaoSim?.addEventListener("click", () => {
    window.location.href = "galeria.html";
});