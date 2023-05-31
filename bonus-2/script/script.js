"use strict";

const messages = document.getElementById('info')

//array contenente i dati del team
let ourTeam = [
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'foto':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'foto':'angela-caroll-chief-editor.jpg'
    },
    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'foto':'walter-gordon-office-manager.jpg'
    },
    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'foto':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'foto':'scott-estrada-developer.jpg'
    },
    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'foto':'barbara-ramos-graphic-designer.jpg'
    },
]

//ciclo che mostra i dati in console
for(let i in ourTeam){
    const membroDiv = document.createElement('div')
    membroDiv.classList.add('card')
    membroDiv.style.textTransform = 'capitalize'
    membroDiv.innerHTML = ``
    let membro = ourTeam[i]
    // for (let j in membro){
    //    membroDiv.innerHTML += `<p>${j}:${membro[j]}</p>`
    // }
    membroDiv.innerHTML += `
    <img src="./img/${membro.foto}">
    <h2>${membro.nome}</h2>
    <h3>${membro.ruolo}</h3>
    `
    messages.append(membroDiv)
}