"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
exports.default = calcIMC;
