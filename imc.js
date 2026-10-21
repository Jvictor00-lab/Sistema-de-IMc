
const formulario = document.getElementById("formulario");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (
        pesoInput.value.trim() === "" ||
        alturaInput.value.trim() === "" ||
        !Number.isFinite(peso) ||
        !Number.isFinite(altura) ||
        peso <= 0 ||
        altura <= 0
    ) {
        exibirResultado(
            "Digite um peso e uma altura válidos.",
            "alerta"
        );
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao;
    let classe;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        classe = "abaixo";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        classe = "normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        classe = "sobrepeso";
    } else {
        classificacao = "Obesidade";
        classe = "alerta";
    }

    exibirResultado(
        `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
        Classificação: <strong>${classificacao}</strong>`,
        classe
    );
});

function exibirResultado(mensagem, classe) {
    resultado.className = classe;
    resultado.innerHTML = mensagem;
}
