// ****************************************************************************************************************************
// ************************************************** Lista cardápios *********************************************************
// ****************************************************************************************************************************
APICARDAPIO.get("/cardapios")
    .then(function (response) {
        for (i = 0; i < response.data.length; i++) {
            // Sucesso
            document.getElementById('list-menu').innerHTML += `
                    <p class="date"></p>
                    <p class="title">Almoço</p>
                    <p id="dishOne" class="item">- ${response.data[i].primeiroPrato}</p>
                    <hr>
                    <p id="dishTwo" class="item">- ${response.data[i].segundoPrato}</p>
                    <hr>
                    <p id="dishThree" class="item">- ${response.data[i].terceiroPrato}</p>
                    <hr>
                    <p id="dishFour" class="item">- ${response.data[i].quartoPrato}</p>
                    <hr>
                    <p id="dishFive" class="item">- ${response.data[i].quintoPrato}</p>
                    <hr>
                    <p id="dishSix" class="item">- ${response.data[i].sextoPrato}</p>
                    <hr>
                `
            if (response.data[i].setimoPrato != "") {
                document.getElementById('list-menu').innerHTML += `
                    <p id="dishSeven" class="item">- ${response.data[i].setimoPrato}</p>
                    <hr>
                `
            }
        }
    })
    .catch(function (error) {
        console.error(error)
        document.getElementById('list-menu').innerHTML += `
            <p class="title">Erro: ${error}</p>
            <p class="date"> Favor reiniciar a página ou aguardar a resposta do servidor! </p>
        `
    });