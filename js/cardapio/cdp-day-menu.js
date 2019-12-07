// ****************************************************************************************************************************
// **************************************************** Cardápio do dia *******************************************************
// ****************************************************************************************************************************
dataAtual = new Date

menuDay()

function menuDay() {
    showMenuDay()
    APICARDAPIO.get(`/cardapio/dia/${dataAtual.getDate()}`)
        .then(function (response) {
            // Sucesso
            let todayMenu = document.getElementById('today-menu')
            if (response.data == "") {
                alertify.warning('Cardápio do dia ainda não cadastrado!')

                todayMenu.innerHTML = `
                    <p class="date">${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}</p>
                    <p class="title">Almoço do dia</p>
                    <div class="alert-menu">
                        <p class="alert">Cardápio ainda não cadastrado!</p>
                        <input type="button" value="Cadastrar cardápio do dia!" class="btn" onclick="showRegister()">
                    </div>
                `
            } else {
                todayMenu.innerHTML = `
                    <p class="date">${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}</p>
                    <p class="title">Almoço do dia</p>
                    <p id="dishOne" class="item">- ${response.data.primeiroPrato}</p>
                    <hr>
                    <p id="dishTwo" class="item">- ${response.data.terceiroPrato}</p>
                    <hr>
                    <p id="dishThree" class="item">- ${response.data.terceiroPrato}</p>
                    <hr>
                    <p id="dishFour" class="item">- ${response.data.quartoPrato}</p>
                    <hr>
                    <p id="dishFive" class="item">- ${response.data.quintoPrato}</p>
                    <hr>
                    <p id="dishSix" class="item">- ${response.data.sextoPrato}</p>
                    <hr>
                    <p id="dishSeven" class="item">- ${response.data.setimoPrato}</p>
                `
            }
        })
        .catch(function (error) {
            // Erro
            alertify.warning('Cardápio do dia ainda não cadastrado ou indisponível!');
        });
}

