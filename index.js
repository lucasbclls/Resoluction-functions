 //Exercio 1  
 function soma(a, b) {
    const soma = a + b
    const subtracao = a - b
    const divisao = a / b
    const multiplicacao = a * b
    return console.log(`soma: ${soma}  ,subtracao: ${subtracao},   divisao: ${divisao}, multiplicacao: ${multiplicacao}`
    )
}
soma(1,2)

//EXERCICIO 2
const triangulo = (ladoU, ladoD, ladoT) => {
   if (ladoU == ladoD == ladoT || ladoU == ladoT == ladoD )
   return console.log(`este é um tipo de triangulo Equilátero`)
   
   else if(ladoU == ladoD || ladoU == ladoT || ladoD == ladoT || ladoD == ladoU)
   return console.log(`Se trata de um triangulo Isoceles`)
   
   else{ 
       return console.log(`Se trata de um triangulo Escaleno pois os 3 lados sao diferentes`)
   } 
  
}

//EXERCICIO 3 
triangulo(2,3,4)

const calculo = (base, expoente) => {
   const calc1 =  base ** expoente
   return  console.log(`O calculo da base elevada ao expoente é ${calc1}`) 
}
calculo(2,5)

//EXERCICIO 4
const calculo1 = (dividendo, divisoria) => {
   let calc2 = dividendo / divisoria 
   let calc3 =  dividendo % divisoria 
   return console.log(`O resultado da divisao é: ${calc2}`), console.log(`O resto da divisao é ${calc3}`)
}
calculo1(2,2)

// EXERCICIO 5 

const convertMoney = (value) => {
    this.value = 0.30000000000000004
    this.final = this.value.toFixed(2).replace(/\./g,',')
    console.log(`Final valor convert: R$ ${this.final}`)
   
   
}

convertMoney()

// Exercicio 6 

const param = (capStart, txFees, timeAplly) => {
 let jrSimples = (capStart * txFees / 100) * timeAplly
 let final  = jrSimples * capStart / 100
 let final2 = capStart + final 
 return console.log(final2);
}


function secondFunction(capStart,txFees, timeApply) {
     let calc  = capStart * txFees / 100
     let calc2 = capStart + calc
     let calc3 = calc2 * txFees / 100 
     let final3 = calc3 + calc2 
     
      return console.log(final3)
    }

param(200,5,3)
secondFunction(100, 10, 3)