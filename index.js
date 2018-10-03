const pokemon = require("./pokes.js");
function calculateAverageMaxHP() {
    const maxHP = pokemon.filter(poke => poke.MaxHP);
    return maxHP.map(function (poke) {
        return poke.MaxHP
    }).reduce(function (total, amount) {
        total += amount;
        return total;
    }, 0) / maxHP.length;
}
console.log(calculateAverageMaxHP());