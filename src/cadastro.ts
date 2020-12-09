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
nome.focus()
cadastroCliente.reset()

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

    //validação nome
    const regName = /^[a-zA-Z]/
    if (!regName.test(nome.value) || nome.value.split(' ').length < 2) {
        retorno.innerText = `Campo nome preenchido incorretamente. Por favor digite seu nome completo.`
        return
    }
    let nomeValor = nome.value;    
    
    //validação e preenchimento campo Cidade
    let cidadeValor
    if(cidade.value == "o") {
        cidadeValor = txtcidade.value
    } else {
        cidadeValor = cidade.value
    }
    const regOnlyLetter = /[^0-9]/g
    if(!regOnlyLetter.test(cidadeValor)){
        retorno.innerText = 'Campo Cidade preenchido incorretamente. Por favor utilize apenas letras.'
        return
    }

    //data string para Date Object
    let data = new Date(nascimento.value)

    //criação de variáveis para valores de gênero e o que procuram
    let generoValor = genero.value
    let procuraValor = procura.value

    //formata contato para ignorar hifens, pontos e parenteses, valida numero com 11 dígitos (DDD)
    let contatoValor= contato.value.replace(regOnlyLetter, "");
    if (!(contatoValor.length == 11)) {
        retorno.innerText = 'Campo contato preenchido incorretamente. Digite o número de celular com DDD (11 dígitos)'
        return
    }

    //preenchimento de comorbidades de saude
    let saudeValor = []
    for (let checkbox of checkboxesSaude) {
        if (checkbox.checked) {
            saudeValor.push(checkbox.id)
        }
    }
    if (saudeOutra.checked) {
        let regexcomma = /,/gi
        let novoSaude = txtSaude.value.trim().replace(regexcomma,'').split(' ')
        for (let i=0; i<novoSaude.length; i++) {
            saudeValor.push(novoSaude[i])
        }
    }

    //instanciação e serialização do cadastro no localStorage
    try {
        let pessoa = new Pessoa(nomeValor, cidadeValor, generoValor, data, contatoValor, procuraValor, saudeValor)
        Pessoas.push(pessoa)
        console.log(Pessoas)
        retorno.innerText=`Cadastro Efetuado com Sucesso! Bem vindo ${pessoa.name}!`
        localStorage.setItem("Pessoas Cadastradas", JSON.stringify(Pessoas))
        } catch (error: any) {
        console.error(error)
        retorno.innerText = "\n Aconteceu algum erro ao registrar usuário"
}
})