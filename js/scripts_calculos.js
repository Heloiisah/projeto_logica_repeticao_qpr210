/**
 * VALOR FOR ATÉ 100 O CÁLCULO SEJA 10%;
 * VALOR FOR DE 101 ATÉ 1000 O CÁLCULO SEJA 15%
 * ACIMA DE 1000 SEJA DE  O CÁLCULO 20%
 */

const calculoPercentual = (valor) => {
    let valorCalculado = 0.0

    if(valor <= 100){
        valorCalculado = valor * 0.10
    }else if(valor <= 1000){
        valorCalculado = valor * 0.15
    }else{
        valorCalculado = valor * 0.20
    } 

    return valorCalculado
}
    
   export{calculoPercentual}