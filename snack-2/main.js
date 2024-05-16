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
for(let i=0; i<=squadre.length; i++){
    let squadreNome= squadre[i].nome;
    let nomeInvariato = squadreNome;
    let numeroPuntiFatti= Math.floor(Math.random()* (100-40 +1)) ;
    squadre[i].nome=nomeInvariato;
    squadre[i].puntiFatti=numeroPuntiFatti;
    squadre[i].falliSubiti=numeroPuntiFatti;
}
console.log(squadre);