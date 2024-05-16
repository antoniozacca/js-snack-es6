'use strict'
const squadre = [
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Taranto",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lecce",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
];
const ul = document.getElementById("array-squadre");
for(let i=0; i<squadre.length; i++){
    let squadreNome= squadre[i].nome;
    let nomeInvariato = squadreNome;
    let numeroPuntiFatti= Math.floor(Math.random()* (100-40 +1));
    let numeroFalliSubiti= Math.floor(Math.random()* (100-40 +1));
    squadre[i].nome=nomeInvariato;
    squadre[i].puntiFatti=numeroPuntiFatti;
    squadre[i].falliSubiti=numeroFalliSubiti;
    let outputNomi = `${squadre[i].nome}, `;
    // let outputPuntiFatti = `punti fatti: ${squadre[i].puntiFatti}, `;
    let outputFalliSubiti = `falli subiti: ${squadre[i].falliSubiti};`;
    let li = document.createElement("li")
    ul.appendChild(li)
    li.innerHTML += outputNomi + outputFalliSubiti;
}
console.log(squadre);
