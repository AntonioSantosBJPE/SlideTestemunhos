import {date} from "./dataBase.js"


let img = document.querySelector(".img-perfil")
let name = document.querySelector(".perfil-name")
let bio = document.querySelector(".perfil-bio")
let depoiment = document.querySelector(".testimonial-text")
let buttonPrev = document.querySelector(".button-prev")
let buttonNext = document.querySelector(".button-next")
let contador = 0

img.src = date[0].img
name.innerText = date[0].name
bio.innerText = date[0].bio
depoiment.innerText = date[0].depoiment

    buttonNext.addEventListener("click",(e)=>{
       if(contador<(date.length-1)){
        contador++
        img.src = date[contador].img
        name.innerText = date[contador].name
        bio.innerText = date[contador].bio
        depoiment.innerText = date[contador].depoiment
       }else{
            contador = 0
            img.src = date[contador].img
            name.innerText = date[contador].name
            bio.innerText = date[contador].bio
            depoiment.innerText = date[contador].depoiment
       }
        
    })

    buttonPrev.addEventListener("click",(e)=>{
        if(contador===0){
            contador=date.length-1
            img.src = date[contador].img
            name.innerText = date[contador].name
            bio.innerText = date[contador].bio
            depoiment.innerText = date[contador].depoiment
           }else{
                contador--
                img.src = date[contador].img
                name.innerText = date[contador].name
                bio.innerText = date[contador].bio
                depoiment.innerText = date[contador].depoiment
           }
    })