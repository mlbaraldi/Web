const cadastroCliente = document.querySelector('#CadastroCliente');
const nome = document.querySelector('#nome');
const cidade = document.querySelector('#cidade');
const txtcidade = document.querySelector('#txtcidade');
const genero = document.querySelector('#genero');
const nascimento = document.querySelector('#nascimento');
const contato = document.querySelector('#contato');
const procura = document.querySelector('#procura');
const saudeDiabete = document.querySelector('#diabete');
const saudePressao = document.querySelector('#pressao');
const saudeObesidade = document.querySelector('#obesidade');
const saudeFibro = document.querySelector('#fibromialgia');
const saudeAsma = document.querySelector('#asma');
const saudeParkinson = document.querySelector('#parkinson');
const saudeLombalgia = document.querySelector('#lombalgia');
const saudeOsteo = document.querySelector('#osteoartrite');
const saudeDrc = document.querySelector('#drc');
const saudeNenhuma = document.querySelector('#nenhuma');
const saudeOutra = document.querySelector('#saudeoutra');
const txtSaude = document.querySelector('#txtsaude');
const checkboxesSaude = document.getElementsByName('saude');
const Pessoas = [];
//aparecer caixa de texto em Outra cidade
cidade.addEventListener('change', (e) => {
    if (cidade.value == 'o') {
        txtcidade.hidden = false;
    }
    else {
        txtcidade.hidden = true;
    }
});
//aparecer caixa de texto em outro problema de saúde
saudeOutra.addEventListener('change', (e) => {
    if (saudeOutra.checked == true) {
        txtSaude.hidden = false;
    }
    else {
        txtSaude.hidden = true;
    }
});
//retirar marcação dos checkbox em saúde caso selecionado Nenhuma
saudeNenhuma.addEventListener('change', (e) => {
    if (saudeNenhuma.checked) {
        for (let checkbox of checkboxesSaude) {
            checkbox.checked = false;
        }
    }
});
cadastroCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomeValor = nome.value;
    let cidadeValor;
    if (cidade.value == "o") {
        cidadeValor = txtcidade.value;
    }
    else {
        cidadeValor = cidade.value;
    }
    let data = new Date(nascimento.value);
    let generoValor = genero.value;
    let contatoValor = contato.value;
    let procuraValor = procura.value;
    let saudeValor = [];
    for (let checkbox of checkboxesSaude) {
        if ((checkbox.checked) && checkbox.value == 'saudeOutra') {
            saudeValor.push(checkbox.value);
        }
    }
    //    let pessoa = new Pessoa(nomeValor, cidadeValor, generoValor, data, contato.value, procura.value, [])
});
export {};
// for (let option in procura.options) {
//     if (option.checked) {
//         procuraValor.push(option.innerText)
