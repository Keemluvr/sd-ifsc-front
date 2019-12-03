// Variáveis globais
const APICARDAPIO = axios.create({
    baseURL: 'https://cardapio-ifsc.herokuapp.com/api',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

dataAtual = new Date

// ****************************************************************************************************************************
// **************************************************** Cardápio do dia *******************************************************
// ****************************************************************************************************************************

APICARDAPIO.get(`/cardapio/${dataAtual.getDate()}`)
    .then(function (response) {
        // Sucesso
        let todayMenu = document.getElementById('today-menu')
        if (response.data == "") {
            alertify.warning('Cardápio do dia ainda não cadastrado!')

            todayMenu.innerHTML = `
            <p class="date">${dataAtual.getDate()}/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}</p>
            <p class="title">Almoço do dia</p>
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

// ****************************************************************************************************************************
// ************************************************* Registrar um cardápio ****************************************************
// ****************************************************************************************************************************
function submitRegister() {
    let date = new Date(`${document.getElementById("inputDate").value} 01:00:00`);
    let JSONCardapio = {
        "dia": `${date.getDate()}`,
        "mes": `${date.getMonth()}`,
        "ano": `${date.getFullYear()}`,
        "primeiroPrato": `${document.getElementById("inputDishOne").value}`,
        "segundoPrato": `${document.getElementById("inputDishTwo").value}`,
        "terceiroPrato": `${document.getElementById("inputDishThree").value}`,
        "quartoPrato": `${document.getElementById("inputDishFour").value}`,
        "quintoPrato": `${document.getElementById("inputDishFive").value}`,
        "sextoPrato": `${document.getElementById("inputDishSix").value}`,
        "setimoPrato": `${document.getElementById("inputDishSeven").value}`,
    }
    console.log(JSONCardapio);
    APICARDAPIO.post('/cardapio', JSONCardapio)
        .then(function (response) {
            alertify.success('Cardápio cadastrado com sucesso!');

            // Limpa os campos
            document.getElementById("inputDishOne").value = ""
            document.getElementById("inputDishTwo").value = ""
            document.getElementById("inputDishThree").value = ""
            document.getElementById("inputDishFour").value = ""
            document.getElementById("inputDishFive").value = ""
            document.getElementById("inputDishSix").value = ""
            document.getElementById("inputDishSeven").value = ""
        })
        .catch(function (error) {
            alertify.error('Erro ao cadastrar cardápio!');
        });
}

// ****************************************************************************************************************************
// **************************************************** Editar um cardápio ****************************************************
// ****************************************************************************************************************************

// procura o cardápio a ser editado
function putSearchFields() {
    let diaProcurado = document.getElementById('inputEdit').value
    APICARDAPIO.get(`/cardapio/${diaProcurado}`)
        .then(function (response) {
            // Sucesso
            if (response.data == "") {
                alertify.error(`Cardápio do dia ${diaProcurado}/${dataAtual.getMonth()+1} ainda não cadastrado ou indisponível!`);
            } else {
                let id = response.data.id
                let dia = response.data.dia
                let mes = response.data.mes
                let ano = response.data.ano

                document.getElementById('sub-edit').innerHTML = `
                <p class="title">Edite os valores abaixo</p>

                <label>1º Prato *</label>
                <input type="text" id="inputDishOneEdit" autocomplete="on">

                <label>2º Prato *</label>
                <input type="text" id="inputDishTwoEdit" autocomplete="on">

                <label>3º Prato *</label>
                <input type="text" id="inputDishThreeEdit" autocomplete="on">

                <label>4º Prato *</label>
                <input type="text" id="inputDishFourEdit" autocomplete="on">

                <label>5º Prato *</label>
                <input type="text" id="inputDishFiveEdit" autocomplete="on">

                <label>6º Prato *</label>
                <input type="text" id="inputDishSixEdit" autocomplete="on">

                <label>7º Prato</label>
                <input type="text" id="inputDishSevenEdit" autocomplete="on">

                <div class="submits">
                    <input type="button" id="button-submit-edit" value="Reenviar" class="btn-submit" onclick="submitEdit(${id}, ${dia}, ${mes}, ${ano})">
                    <input type="button" id="button-cancel-edit" value="Cancelar" class="btn-cancel" onclick="clearField()">
                </div>
            `
                document.getElementById('inputDishOneEdit').value = response.data.primeiroPrato
                document.getElementById('inputDishTwoEdit').value = response.data.segundoPrato
                document.getElementById('inputDishThreeEdit').value = response.data.terceiroPrato
                document.getElementById('inputDishFourEdit').value = response.data.quartoPrato
                document.getElementById('inputDishFiveEdit').value = response.data.quintoPrato
                document.getElementById('inputDishSixEdit').value = response.data.sextoPrato
                document.getElementById('inputDishSevenEdit').value = response.data.setimoPrato
            }
        }).catch(function (error) {
            if (diaProcurado == "") {
                alertify.error(`Campo do cardápio do dia está vazio!`);
            } else {
                alertify.error(`Cardápio do dia ${diaProcurado}/${dataAtual.getMonth} ainda não cadastrado ou indisponível!`);
            }
        });
}
// envai o cardápio editado
function submitEdit(id,dia, mes, ano) {
    let JSONCardapioEdit = {
        "id": `${id}`,
        "dia": `${dia}`,
        "mes": `${mes}`,
        "ano": `${ano}`,
        "primeiroPrato": `${document.getElementById("inputDishOneEdit").value}`,
        "segundoPrato": `${document.getElementById("inputDishTwoEdit").value}`,
        "terceiroPrato": `${document.getElementById("inputDishThreeEdit").value}`,
        "quartoPrato": `${document.getElementById("inputDishFourEdit").value}`,
        "quintoPrato": `${document.getElementById("inputDishFiveEdit").value}`,
        "sextoPrato": `${document.getElementById("inputDishSixEdit").value}`,
        "setimoPrato": `${document.getElementById("inputDishSevenEdit").value}`,
    }
    console.log("Editado: " + JSONCardapioEdit);
    APICARDAPIO.put('/cardapio', JSONCardapioEdit)
        .then(function (response) {
            // Retira os campos
            clearField()
            alertify.success('Cardápio editado com sucesso!');
        })
        .catch(function (error) {
            alertify.error('Erro ao editar cardápio!');
        });
}
// reseta os campos e some com os forms
function clearField() {
    document.getElementById('inputDishOneEdit').value = ""
    document.getElementById('inputDishTwoEdit').value = ""
    document.getElementById('inputDishThreeEdit').value = ""
    document.getElementById('inputDishFourEdit').value = ""
    document.getElementById('inputDishFiveEdit').value = ""
    document.getElementById('inputDishSixEdit').value = ""
    document.getElementById('inputDishSevenEdit').value = ""
    document.getElementById('inputEdit').value = "" // limpa o campo de procura
    document.getElementById('sub-edit').innerHTML = `` // some com os forms
}

// ****************************************************************************************************************************
// **************************************************** Deletar um cardápio ***************************************************
// ****************************************************************************************************************************



// ****************************************************************************************************************************
// ************************************************** Procurar um cardápio ****************************************************
// ****************************************************************************************************************************



// ****************************************************************************************************************************
// ******************************************** Troca de telas das funções ****************************************************
// ****************************************************************************************************************************
function showRegister() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "flex";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("delete-menu").style.display = "none";
    document.getElementById("find-menu").style.display = "none";
    // Botões acionados
    document.getElementById("register").classList.add("btn-selected")
    document.getElementById("edit").classList.remove("btn-selected");
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("search").classList.remove("btn-selected")
}

function showEdit() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "flex";
    document.getElementById("delete-menu").style.display = "none";
    document.getElementById("find-menu").style.display = "none";
    // Botões acionados
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("edit").classList.add("btn-selected");
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("search").classList.remove("btn-selected")
}

function showDelete() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("delete-menu").style.display = "flex";
    document.getElementById("find-menu").style.display = "none";
    // Botões acionados
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("edit").classList.remove("btn-selected");
    document.getElementById("delete").classList.add("btn-selected")
    document.getElementById("search").classList.remove("btn-selected")
}

function showSearch() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("delete-menu").style.display = "none";
    document.getElementById("find-menu").style.display = "flex";
    // Botões acionados
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("edit").classList.remove("btn-selected");
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("search").classList.add("btn-selected")
}