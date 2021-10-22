let numeroProdutos = 0
numeroProdutos = 1
numeroProdutos = 1

let marcador = document.getElementById("marcador");

function contarProdutos() {
    numeroProdutos = numeroProdutos + 1
    console.log(numeroProdutos)

    marcador.innerText = numeroProdutos;
    marcador.innerHTML = numeroProdutos;
}