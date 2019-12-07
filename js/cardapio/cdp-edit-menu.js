// ****************************************************************************************************************************
// **************************************************** Editar um cardápio ****************************************************
// ****************************************************************************************************************************

// procura o cardápio a ser editado
function putSearchFields(responseSearchId) {
    // Procura o cardápio com aquele id
    APICARDAPIO.get(`/cardapio/id/${responseSearchId}`)
        .then(function (response) {
            // Sucesso
            if (response.data.dia == "") {
                alertify.error(`Cardápio do dia ${response.data.dia}/${response.data.mes} não disponível para edição!`);
            } else {
                showEdit()
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
                        <input type="button" id="button-cancel-edit" value="Cancelar" class="btn-cancel" onclick="returnCardList()">
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
            console.log(error)

            if (response.data.dia == "") {
                alertify.error(`Campo do cardápio do dia está vazio!`);
            } else {
                alertify.error(`Cardápio do dia ${response.data.dia}/${response.data.mes} ainda não cadastrado ou indisponível!`);
            }
        });

}

// envia o cardápio editado
function submitEdit(id, dia, mes, ano) {
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
    APICARDAPIO.put('/cardapio', JSONCardapioEdit)
        .then(function (response) {
            returnCardList() 
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
    document.getElementById('sub-edit').innerHTML = `` // some com os forms
}

// Retorna para a visualização dos cards para modificar
function returnCardList() {
    clearField()
    showModify()
}