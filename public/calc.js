"use strict";
const form = document.querySelector("#formulario");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const p = document.querySelector("#retorno");
const notas = document.querySelector("#notas");
//calculo do imc
function calcIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
//se usuario digitar , muda para .
function commaToDot(e) {
    if (e.includes(',')) {
        return e.replace(',', '.');
    }
    return e;
}
//leitura após clicar botão Calcular IMC
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let regexNumeros = /[+-]?([0-9]*[.,])?[0-9]+/;
    //validações
    if (!peso.value || !regexNumeros.test(peso.value)) {
        p.innerText = "Por favor, preencha o campo peso corretamente";
        return;
    }
    if (!altura.value || !regexNumeros.test(altura.value)) {
        p.innerText = "Por favor, preencha o campo altura corretamente";
        return;
    }
    if (altura.value > 100) {
        altura.value /= 100;
    }
    //IMC através de programação funcional
    let imc = calcIMC(parseFloat(commaToDot(peso.value)), parseFloat(commaToDot(altura.value)));
    //retorno do IMC
    p.innerText = "seu IMC é de " + imc;
    if (parseFloat(imc) > 60) {
        notas.innerText = "Você está na classificação de Hiper Obeso.";
    }
    if (parseFloat(imc) < 59.9) {
        notas.innerText = "Você está na classificação de Super Obeso.";
    }
    if (parseFloat(imc) < 49.9) {
        notas.innerText = "Você está na classificação de Obesidade Grau III (Mórbida).";
    }
    if (parseFloat(imc) < 39.9) {
        notas.innerText = "Você está na classificação de Obesidade Grau II (Severa).";
    }
    if (parseFloat(imc) < 34.9) {
        notas.innerText = "Você está na classificação de Obesidade Grau I (Leve).";
    }
    if (parseFloat(imc) < 29.9) {
        notas.innerText = "Você está na classificação de Sobrepeso.";
    }
    if (parseFloat(imc) < 24.9) {
        notas.innerText = "Você está na classificação de Saudável. Parabéns.";
    }
    if (parseFloat(imc) < 18.5) {
        notas.innerText = "Você está na classificação de Magreza.";
    }
});
