'use strict'
const tutteLeBici = [
    {
        nome: "Graziella" ,
        peso: "15" 
    },
    {
        nome: "Bianchi" ,
        peso: "2" 
    },
    {
        nome: "Trek" ,
        peso: "3" 
    },
    {
        nome: "Merida" ,
        peso: "5" 
    },
    {
        nome: "Scott" ,
        peso: "3.5" 
    },

];

let p = document.getElementById("bici-minore");
let primoNome= tutteLeBici[0].nome;
let primoPeso= parseFloat(tutteLeBici[0].peso)
for (let i=0; i<tutteLeBici.length; i++){
    let nomeBici = tutteLeBici[i].nome;
    let pesoBici = parseFloat(tutteLeBici[i].peso);
    if (parseFloat(pesoBici)<=primoPeso){

        primoPeso= pesoBici
        primoNome= nomeBici;
    }
    
         
}
let output = `${primoNome} ${primoPeso} kg`
p.textContent= output;