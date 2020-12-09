import Pessoa from "./entities/pessoa.js"

const cadastroCliente = document.querySelector<HTMLFormElement>('#CadastroCliente')!
const nome = document.querySelector<HTMLInputElement>('#nome')!
const cidade = document.querySelector<HTMLSelectElement>('#cidade')!
const txtcidade = document.querySelector<HTMLInputElement>('#txtcidade')!
const genero = document.querySelector<HTMLSelectElement>('#genero')!
const nascimento = document.querySelector<HTMLInputElement>('#nascimento')!
const contato = document.querySelector<HTMLInputElement>('#contato')!
const procura = document.querySelector<HTMLSelectElement>('#procura')!
const saudeNenhuma = document.querySelector<HTMLInputElement>('#nenhuma')!
const saudeOutra = document.querySelector<HTMLInputElement>('#saudeoutra')!
const txtSaude = document.querySelector<HTMLInputElement>('#txtsaude')!
const checkboxesSaude = document.getElementsByName('saude')!
const retorno = document.querySelector<HTMLParagraphElement>('#retorno')!

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
        saudeOutra.checked = false;
        txtSaude.hidden = true;
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
    
    //preenchimento de comorbidades de saude
    let saudeValor = []
    for (let checkbox of checkboxesSaude) {
        if (checkbox.checked) {
            saudeValor.push(checkbox.id)
        }
    }
    if (saudeOutra.checked) {
        saudeValor.push(txtSaude.value)
    }

    let pessoa = new Pessoa(nomeValor, cidadeValor, generoValor, data, contatoValor, procuraValor, saudeValor)
    Pessoas.push(pessoa)
    console.log(Pessoas)
    retorno.innerText="Cadastro Efetuado com Sucesso!"

})

//TODO
// MANDAR PARA LOCAL STORAGE E APARECER PARAGRAPH COM NOME DO USUÁRIO CADASTRADO
// VALIDAÇÕES
// FORMATAR SAUDE OUTROS E TELEFONE