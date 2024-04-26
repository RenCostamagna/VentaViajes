import {barcelona, roma, londres, paris} from "./ciudades.js"

//Obtengo elementos del DOM
let enlaces = document.querySelectorAll("a")
let tituloElemento = document.getElementById("titulo")
let subTituloElemento = document.getElementById("subtitulo")
let parrafoElemento = document.getElementById("parrafo")

enlaces.forEach(function(enlace){
    enlace.addEventListener("click", function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove("active")
        })
        this.classList.add("active")

        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    })

}


)

function obtenerContenido(enlace){
    let contenido = {
        "Barcelona" : barcelona,
        "Roma" : roma,
        "Paris" : paris,
        "Londres" : londres
        }   
    return contenido[enlace];
}