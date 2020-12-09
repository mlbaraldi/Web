import Pessoa from "./entities/pessoa.js"

const cadastroCliente = document.querySelector<HTMLFormElement>('#CadastroCliente')!
const nome = document.querySelector<HTMLInputElement>('#nome')!
const cidade = document.querySelector<HTMLSelectElement>('#cidade')!
const txtcidade = document.querySelector<HTMLInputElement>('#txtcidade')!
const genero = document.querySelector<HTMLSelectElement>('#genero')!
const nascimento = document.querySelector<HTMLInputElement>('#nascimento')!
const contato = document.querySelector<HTMLInputElement>('#contato')!
const procura = document.querySelector<HTMLSelectElement>('#procura')!
const saudeDiabete = document.querySelector<HTMLInputElement>('#diabete')!
const saudePressao = document.querySelector<HTMLInputElement>('#pressao')!
const saudeObesidade = document.querySelector<HTMLInputElement>('#obesidade')!
const saudeFibro = document.querySelector<HTMLInputElement>('#fibromialgia')!
const saudeAsma = document.querySelector<HTMLInputElement>('#asma')!
const saudeParkinson = document.querySelector<HTMLInputElement>('#parkinson')!
const saudeLombalgia = document.querySelector<HTMLInputElement>('#lombalgia')!
const saudeOsteo = document.querySelector<HTMLInputElement>('#osteoartrite')!
const saudeDrc = document.querySelector<HTMLInputElement>('#drc')!
const saudeNenhuma = document.querySelector<HTMLInputElement>('#nenhuma')!
const saudeOutra = document.querySelector<HTMLInputElement>('#saudeoutra')!
const txtSaude = document.querySelector<HTMLInputElement>('#txtsaude')!
const checkboxesSaude = document.getElementsByName('saude')

const Pessoas: Pessoa[] = []

//aparecer caixa de texto em Outra cidade
cidade.addEventListener('change', (e: Event) => {
    if (cidade.value == 'o') {
        txtcidade.hidden = false;
    } else {
        txtcidade.hidden = true;
    }
})

//aparecer caixa de texto em outro problema de saúde
saudeOutra.addEventListener('change', (e: Event) => {
   if (saudeOutra.checked == true) {
       txtSaude.hidden = false;
   } else {
       txtSaude.hidden = true;
   }
})

//retirar marcação dos checkbox em saúde caso selecionado Nenhuma
saudeNenhuma.addEventListener('change', (e: Event) => {
    if(saudeNenhuma.checked) {
        for (let checkbox of checkboxesSaude) {
            checkbox.checked = false;
        }
    }
})

cadastroCliente.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let nomeValor = nome.value;    
    let cidadeValor;
    if(cidade.value == "o") {
        cidadeValor = txtcidade.value
    } else {
        cidadeValor = cidade.value
    }

    let data = new Date(nascimento.value)
    let generoValor = genero.value
    let contatoValor= contato.value
    let procuraValor = procura.value
    let saudeValor = []
    for (let checkbox of checkboxesSaude) {
        if ((checkbox.checked) && checkbox.value == 'saudeOutra') {
            saudeValor.push(checkbox.value)
        }
    }

        
    

//    let pessoa = new Pessoa(nomeValor, cidadeValor, generoValor, data, contato.value, procura.value, [])

})

    // for (let option in procura.options) {
    //     if (option.checked) {
    //         procuraValor.push(option.innerText)