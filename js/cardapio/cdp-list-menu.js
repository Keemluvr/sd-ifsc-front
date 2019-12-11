// ****************************************************************************************************************************
// ************************************************** Lista cardápios *********************************************************
// ****************************************************************************************************************************
APICARDAPIO.get("/cardapios")
    .then(function (response) {
        response.data.forEach(cardapio => {
            document.getElementById('cards-list').innerHTML += `
                    <div class="card">
                        <p class="date"></p>
                        <p class="title-card">Almoço - ${cardapio.dia}/${cardapio.mes}/${cardapio.ano}</p>
                        <p id="dishOne" class="item">- ${cardapio.primeiroPrato}</p>
                        <p id="dishTwo" class="item">- ${cardapio.segundoPrato}</p>
                        <p id="dishThree" class="item">- ${cardapio.terceiroPrato}</p>
                        <p id="dishFour" class="item">- ${cardapio.quartoPrato}</p>
                        <p id="dishFive" class="item">- ${cardapio.quintoPrato}</p>
                        <p id="dishSix" class="item">- ${cardapio.sextoPrato}</p>
                        <p id="dishSeven" class="item">- ${cardapio.setimoPrato}</p>
                     </div>
            `
        });
    })
    .catch(function (error) {
        console.error(error)
        document.getElementById('list-menu').innerHTML += `
            <p class="title">Erro: ${error}</p>
            <p class="date"> Favor reiniciar a página ou aguardar a resposta do servidor! </p>
        `
    });