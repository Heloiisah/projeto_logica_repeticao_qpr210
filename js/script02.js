const inputNum = document.querySelector('#num')
const btnCalcular = document.querySelector('#btn-calcular')
const divResultado = document.querySelector('#resultado')

btnCalcular.addEventListener('click', () => {
    let numDigitado = Number(inputNum.value)

    if (numDigitado <= 0 || isNaN(numDigitado)) {
        divResultado.innerHTML = 'Por favor, digite um número válido e maior que zero.'
        return
    }

    let divisores = []

    for (let i = 1; i <= numDigitado; i++) {
        if (numDigitado % i === 0) {
            divisores.push(i)
        }
    }

    divResultado.innerHTML = `Os divisores de ${numDigitado} são: <br> ${divisores.join(', ')}`
})
