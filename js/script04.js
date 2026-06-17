const inputNome = document.querySelector('#nome')
const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const btnRegistrar = document.querySelector('#btn-registrar')
const spanContador = document.querySelector('#contador-pessoa')
const divResultado = document.querySelector('#resultado')

let contPessoas = 0
let inferior18 = 0
let acima65 = 0
let entre18e65 = 0
let masc = 0
let fem = 0

btnRegistrar.addEventListener('click', () => {
    let nome = inputNome.value
    let idade = Number(inputIdade.value)
    let sexo = inputSexo.value

    if (nome === '' || idade <= 0 || isNaN(idade)) {
        divResultado.innerHTML = 'Por favor, preencha todos os campos corretamente.'
        return
    }

    contPessoas++

    // Validação de idade
    if (idade < 18) {
        inferior18++
    } else if (idade > 65) {
        acima65++
    } else {
        entre18e65++
    }

    // Validação de sexo
    if (sexo === 'M') {
        masc++
    } else if (sexo === 'F') {
        fem++
    }

    // Limpar campos
    inputNome.value = ''
    inputIdade.value = ''
    inputNome.focus()

    if (contPessoas < 20) {
        spanContador.innerHTML = contPessoas + 1
        divResultado.innerHTML = `Pessoa ${contPessoas} (${nome}) registrada com sucesso!`
    } else {
        spanContador.innerHTML = 20
        btnRegistrar.disabled = true
        
        divResultado.innerHTML = `
            <hr>
            <h4>Resultados da Análise (20 Pessoas):</h4>
            a) Quantas pessoas têm idade inferior a 18: <b>${inferior18}</b><br>
            b) Quantas pessoas têm idade acima de 65: <b>${acima65}</b><br>
            c) Total de pessoas com idade entre 18 e 65 anos: <b>${entre18e65}</b><br>
            d) Quantas pessoas do sexo Feminino: <b>${fem}</b> | Masculino: <b>${masc}</b><br>
        `
    }
})
