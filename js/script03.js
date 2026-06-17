const inputIdade = document.querySelector('#idade')
const inputPeso = document.querySelector('#peso')
const btnRegistrar = document.querySelector('#btn-registrar')
const spanContador = document.querySelector('#contador-pessoa')
const divResultadoAtual = document.querySelector('#resultado-atual')
const divResultadoFinal = document.querySelector('#resultado-final')

let contPessoas = 0
let aptos = 0
let inaptos = 0

btnRegistrar.addEventListener('click', () => {
    let idade = Number(inputIdade.value)
    let peso = Number(inputPeso.value)

    if (idade <= 0 || peso <= 0 || isNaN(idade) || isNaN(peso)) {
        divResultadoAtual.innerHTML = 'Por favor, digite valores válidos para idade e peso.'
        return
    }

    contPessoas++

    if (idade >= 18 && idade <= 60 && peso > 50) {
        divResultadoAtual.innerHTML = `Pessoa ${contPessoas}: Poderá doar sangue.`
        aptos++
    } else {
        divResultadoAtual.innerHTML = `Pessoa ${contPessoas}: Não poderá doar sangue.`
        inaptos++
    }

    inputIdade.value = ''
    inputPeso.value = ''
    inputIdade.focus()

    if (contPessoas < 12) {
        spanContador.innerHTML = contPessoas + 1
    } else {
        spanContador.innerHTML = 12
        btnRegistrar.disabled = true
        
        divResultadoFinal.innerHTML = `
            <hr>
            <h4>Resultado Final (12 Pessoas):</h4>
            Total de pessoas que <b>puderam</b> doar: ${aptos} <br>
            Total de pessoas que <b>não puderam</b> doar: ${inaptos}
        `
    }
})
