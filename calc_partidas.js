function saldo (vitorias, derrotas){
    return vitorias - derrotas
}

let ranking = saldo (270, 89)

if (ranking <= 10) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível ferro")
} else if (ranking > 10 && ranking <= 20) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível bronze")
} else if (ranking > 20 && ranking <= 50) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível prata")
} else if (ranking > 50 && ranking <= 80) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível ouro")
} else if (ranking > 80 && ranking <= 90) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível diamante")
} else if (ranking> 90 && ranking <= 100) {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível lendário")
} else {
    console.log ("O herói tem saldo de: " + ranking + " e está no nível imortal")
}