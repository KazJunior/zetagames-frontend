var precoTotal = "0,00"
    const removeBotao = document.getElementsByClassName("remove")
    for (var i = 0; i <removeBotao.length; i++) {
        removeBotao[i].addEventListener("click", removeProduto)
        }
    const qntdInput = document.getElementsByClassName("car-qntd")
    for (var i = 0; i <qntdInput.length; i++) {
        qntdInput[i].addEventListener("change", carTotalUpdate)
    }

    function addProduto(evento) {
         const button = evento.target
         const produtoInfo = button.parentElement.parentElement
         const produtoImagem = produtoInfo.getElementsByClassName("imagem")[0].src
         const produtoTitulo = produtoInfo.getElementsByClassName("title")[0].innerText
         const produtoPreco = produtoInfo.getElementsByClassName("price")[0].innerText

         const produtoNome = document.getElementsByClassName("car-title")
         for (var i = 0; i < qntdInput.length; i++) {
            if(produtoNome[i].innerHTML == produtoTitulo) {
                produtoNome[i].parentElement.parentElement.getElementsByClassName("car-qntd")[0].value++
                return
            }
         }

         let novoProduto = document.createElement("tr")
         novoProduto.classList.add("car-product")

         novoProduto.innerHTML = 
         `
        <td class="identificacao">
            <img class="car-image" src="${produtoImagem}" alt="${produtoTitulo}">
            <strong class="car-title">${produtoTitulo}</strong>
        </td>
        <td>
            <span class="car-price">${produtoPreco}</span>
        </td>
        <td>
            <input class="car-qntd" type="number" value="1" min="0">
            <button class="remove" type="button">Remover</button>
        </td>

         `

        const carBody = document.querySelector(".car tbody")
        carBody.append(novoProduto)

        carTotalUpdate()

        novoProduto.getElementsByClassName("car-qntd")[0].addEventListener("change" , carTotalUpdate)
        novoProduto.getElementsByClassName("remove")[0].addEventListener("click" , removeProduto)
        }

        /* Atualizar total do preço do carrinho*/
function carTotalUpdate() {
    precoTotal = 0.00
    const produtoCar = document.getElementsByClassName("car-product")
    for (var i = 0; i < produtoCar.length; i++) {
        const produtoPreco = produtoCar[i]
            .getElementsByClassName("car-price")[0]
            .innerText
            .replace("R$","")
            .replace(",",".")
        const produtoQntd = produtoCar[i]
            .getElementsByClassName("car-qntd")[0]
            .value
        precoTotal += produtoPreco * produtoQntd
    }
    precoTotal = precoTotal.toFixed(2)
    precoTotal = precoTotal.replace(".",",")
    document.querySelector(".cont-total span")
        .innerText = "R$" + precoTotal
}

    const addCar = document.getElementsByClassName("botao")
    for (var i = 0; i <addCar.length; i++) {
        addCar[i].addEventListener("click", addProduto)
    }
    function removeProduto(evento) {
        evento.target.parentElement.parentElement.remove()
        carTotalUpdate()
    }

    const comprar = document.getElementsByClassName("comprar")[0]
    comprar.addEventListener("click", finalizaCompra)

    function finalizaCompra() {
        if(precoTotal == "R$0,00") {
            alert("Seu carrinho está vazio")
        } else {
            alert (
            `
            Obrigado pela sua compra!
            Valor do pedido: R$${precoTotal}
            Volte Sempre!!
            `
          )
        }
        document.querySelector(".car tbody").innerHTML = ""
        carTotalUpdate()
    }

   


