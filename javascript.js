let input = document.querySelector(".input")
let botao = document.querySelector(".botao")
let pdolar = document.querySelector(".pdolar")


botao.addEventListener("click",function(){
    let valor = input.value/5.40

        pdolar.textContent=`U$${valor.toFixed(2)}`
    
})