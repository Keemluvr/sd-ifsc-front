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