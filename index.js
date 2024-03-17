console.log ("Digite o nome do herói: ");
let nomeHeroi = "Aragorn ";
console.log ("O nome do herói é: " + nomeHeroi)
console.log ("Digite o nível XP do herói: ")
let xp = 8543
console.log ("O nível XP do herói é: " + xp)

if (xp >= 0 && xp <= 1000) {
    console.log ("O herói " + nomeHeroi + "está no nível ferro")
} else if (xp > 1000 && xp <= 2000) {
    console.log ("O herói " + nomeHeroi + "está no nívelbronze")
} else if (xp > 2000 && xp <= 5000) {
    console.log ("O herói " + nomeHeroi + "está no nível prata")
} else if (xp> 5000 && xp <= 7000) {
    console.log ("O herói " + nomeHeroi + "está no nível ouro")
} else if (xp > 7000 && xp <= 8000) {
    console.log ("O herói " + nomeHeroi + "está no nível platina")
} else if (xp> 8000 && xp <= 9000) {
    console.log ("O herói " + nomeHeroi + "está no nível ascendente")
} else if (xp > 9000 && xp <= 10000) {
    console.log ("O herói " + nomeHeroi + "está no nível imortal")
} else {
    console.log ("O herói " + nomeHeroi + "está no nível radiante")
}