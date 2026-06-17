//ESTRUTURA DE REPETIÇÃO FOR 
const divfor = document.querySelector('#div-for')

for (i = 0;i <10; i++) { 
    console.log(i, 'Amor')
    divfor.innerHTML += `${i} - Amor <br> ` 
}

//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector ('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    
    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> 
    A SOMA DOS NÚMEROS É: ${acum}`

    inputNum.value=''

})

//CONTROLANDO FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao= document.querySelector('#num-repeticao')
const btnFrase= document.querySelector('#btn-frase')
const divFrase= document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt) => {

    let numRepeti = Number (inputNumRepeticao.value)
    let frase = inputFrase.value

    for (i = 0 ; i < numRepeti; i++){
        divFrase.innerHTML += `${i + 1} - ${frase} <br>` 
    }
})
 

//COLEÇÃO DE DADOS - ARRAY
const presentes = [ ' Bicicleta' , 'Celular', 'Camisa do Fluzão' ,'Doleira' , ' Tênis Adidas']

const divArray = document.querySelector ('#div-array')

//divArray.innerHTML = presentes[6]

for( i = 0;i < 5;i++){
    divArray.innerHTML += `${presentes[i]} <br>`
}
//FOR IN