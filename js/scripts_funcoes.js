
function mensagem() {
    console.log('Uma mensagem')
}

mensagem()

function mensagemLinda(txt) {
    console.log(txt)
}

mensagemLinda('Brasil vai da um pau no Haiti')

function somaNumeros(num1, num2) {
    return num1 + num2
}

console.log(' As somas dos números ' , somaNumeros (10, 58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('-------> ARROW FUNCTION <-------')

const msgArrow = () => {
console.log('Outra mensagem na arrow function')
}

msgArrow()

    const divisaoNum = (valor1, valor2) => {

        let resposta

        if ((valor1 > 0) && (valor2 > 0)){
            resposta =  valor1 / valor2
        }else{
            resposta = 'NÃO É POSSÍVEL DIVISÃO POR ZERO'
            
        }

        return resposta
    }

console.log(divisaoNum(10,8000))

console.log(Math.random())

console.log(' O número sorteado =====>' , parseInt (Math.random()* 100))


setTimeout(()=>{
    console.log('Executou após 5s')
    msgArrow
}, 5000)

/*
let cont = 0

const intervalo = setInterval(()=>{
cont++
console.log(cont, 'Repetição da setInterval')

if(cont == 5){
    clearInterval(intervalo)
}

}, 3000)*/

let contVolta = 0, numSorteado = 0

const sorteio = setInterval(()=> {
    contVolta++

    numSorteado = parseInt(Math.random() * 60)

    console.log(`${contVolta}º número sorteado ${numSorteado}`)

    if (numSorteado == 6){
        console.log('-------> SORTEIO ENCERRADO <-------')
        clearInterval(sorteio)
        contVolta = 0
        numSorteado = 0
    }
}, 2000)