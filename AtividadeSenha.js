const prompt = require('prompt-sync')()
console.clear()

let nomeCompleto = prompt("Digite o seu nome completo: ")
let idade = Number(prompt("Digite sua idade: "))
let senha = prompt("Digite sua senha: ")


const ESPECIAL = '!@#$%&*_-+=:><?(){}[]'
const MINUSCULO = 'abcdefghijklmnopqrstuvwxyz'
const MAIUSCULO = MINUSCULO.toLocaleUpperCase()
const DIGITO = '0123456789'

let qtdMinusculo= 0
let qtdMaiusculo = 0
let qtdEspecial = 0
let qtdDigito = 0
let validacoes = 0

for (let indice = 0; indice < senha.length; indice++) {
    for (let indiceMinusculo = 0; indiceMinusculo < MINUSCULO.length; indiceMinusculo++) {
        if (senha.charAt(indice) == MINUSCULO.charAt(indiceMinusculo)){
            qtdMinusculo++
        }
    
    }

    for (let indiceMaiusculo = 0; indiceMaiusculo < MAIUSCULO.length; indiceMaiusculo++) {
        if (senha.charAt(indice) == MAIUSCULO.charAt(indiceMaiusculo)){
            qtdMaiusculo++
        }
         
    }

    for (let indiceEspecial = 0; indiceEspecial < ESPECIAL.length; indiceEspecial++) {
        if (senha.charAt(indice) == ESPECIAL.charAt(indiceEspecial)){
            qtdEspecial++
        }
       
    }

    for (let indiceDigito = 0; indiceDigito < DIGITO.length; indiceDigito++) {
        if (senha.charAt(indice) == DIGITO.charAt(indiceDigito)){
            qtdDigito++
        }
        
    }

}


if (qtdMinusculo > 0){
    validacoes++
}

if (qtdMaiusculo > 0){
    validacoes++
}

if (qtdEspecial > 0){
    validacoes++
}

if (qtdDigito > 0){
    validacoes++       
}

if (validacoes <= 4){ //deve conter letra maiúscula, minúscula, caracter especial e um número
    console.log("A senha é válida")
} else {
    console.log("A senha é inválida")
}
