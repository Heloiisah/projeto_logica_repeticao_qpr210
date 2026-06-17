const btnCalcular = document.querySelector('#btn-calcular')
const divResultado = document.querySelector('#resultado')

btnCalcular.addEventListener('click', () => {
    let cont = 0

    for (let i = 1; i <= 1000; i++) {
        if (i % 7 === 0) {
            cont++
        }
    }

    divResultado.innerHTML = `Existem ${cont} números divisíveis por 7 entre 1 e 1000.`
})
