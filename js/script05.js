const inputIdade = document.querySelector('#idade')
const inputSexo = document.querySelector('#sexo')
const inputRenda = document.querySelector('#renda')
const btnRegistrar = document.querySelector('#btn-registrar')
const btnFinalizar = document.querySelector('#btn-finalizar')
const spanContador = document.querySelector('#contador-pessoa')
const divResultadoAtual = document.querySelector('#resultado-atual')
const divResultado = document.querySelector('#resultado')

let totalPessoas = 0
let somaSalarioMasc = 0
let qtdMasc = 0
let qtdFem = 0
let mulheresRenda1000a3000 = 0
let mascSalarioMaior2000 = 0
let femSalarioMaior2000 = 0

btnRegistrar.addEventListener('click', () => {
    let idade = Number(inputIdade.value)
    let sexo = inputSexo.value
    let renda = Number(inputRenda.value)

    if (idade <= 0 || isNaN(idade) || isNaN(renda) || renda < 0) {
        divResultadoAtual.innerHTML = 'Por favor, preencha os campos idade e renda corretamente.'
        return
    }

    totalPessoas++

    if (sexo === 'M') {
        qtdMasc++
        somaSalarioMasc += renda
        if (renda >= 2000) {
            mascSalarioMaior2000++
        }
    } else if (sexo === 'F') {
        qtdFem++
        if (renda >= 1000 && renda <= 3000) {
            mulheresRenda1000a3000++
        }
        if (renda >= 2000) {
            femSalarioMaior2000++
        }
    }

    spanContador.innerHTML = totalPessoas
    divResultadoAtual.innerHTML = 'Pessoa registrada com sucesso!'

    inputIdade.value = ''
    inputRenda.value = ''
    inputIdade.focus()
})

btnFinalizar.addEventListener('click', () => {
    if (totalPessoas === 0) {
        divResultado.innerHTML = 'Nenhuma pessoa foi registrada.'
        return
    }

    let mediaSalarioMasc = qtdMasc > 0 ? (somaSalarioMasc / qtdMasc).toFixed(2) : '0.00'
    let percMascMaior2000 = ((mascSalarioMaior2000 / totalPessoas) * 100).toFixed(2)
    let percFemMaior2000 = ((femSalarioMaior2000 / totalPessoas) * 100).toFixed(2)

    btnRegistrar.disabled = true
    btnFinalizar.disabled = true
    divResultadoAtual.innerHTML = ''

    divResultado.innerHTML = `
        <hr>
        <h4>Resultados da Pesquisa:</h4>
        a) Quantidade de pessoas digitadas: <b>${totalPessoas}</b><br>
        b) Média de salário do sexo Masculino: <b>R$ ${mediaSalarioMasc}</b><br>
        c) Mulheres com renda entre R$ 1.000,00 e R$ 3.000,00: <b>${mulheresRenda1000a3000}</b><br>
        d) Percentual de pessoas com salário maior ou igual a R$ 2.000,00 (sobre o total):<br>
           &nbsp;&nbsp;&nbsp; - Masculino: <b>${percMascMaior2000}%</b><br>
           &nbsp;&nbsp;&nbsp; - Feminino: <b>${percFemMaior2000}%</b><br>
    `
})
