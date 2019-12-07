// ****************************************************************************************************************************
// ********************************************* Deletar cardápio *************************************************************
// ****************************************************************************************************************************

function deleteMenu(menuId) {
    
    APICARDAPIO.delete(`/cardapio/${menuId}`)
        .then(function (response) {
            console.log(response)
            alertify.success('Cardápio excluído com sucesso!');
            reload()
        })
        .catch(function (error) {
            console.error(error)
            alertify.warning('Erro ao deletar cardápio!');
        });
}

function reload() {
    document.getElementById('cards').innerHTML = "";
    modifyMenu()
}