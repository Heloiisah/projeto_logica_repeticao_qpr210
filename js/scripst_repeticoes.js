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