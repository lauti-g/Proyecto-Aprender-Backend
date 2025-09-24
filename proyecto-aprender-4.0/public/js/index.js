const modificar = document.querySelector(".titulo")
const bota = document.querySelector(".bota")


bota.addEventListener("click", ()=>{
    const texto = "<h2>hola 2</h2>"
    modificar.innerHTML = texto
    console.log("hola mundo")
})

