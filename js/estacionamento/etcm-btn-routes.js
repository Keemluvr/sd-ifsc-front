// ****************************************************************************************************************************
// ******************************************** Troca de telas dos botões *****************************************************
// ****************************************************************************************************************************
function showListSlots() {
    // Abrir conteúdo
    document.getElementById("list-slots").style.display = "flex";
    document.getElementById("situation-slot").style.display = "none";
    // Botões acionados
    document.getElementById("list-slots").classList.add("btn-selected")
    document.getElementById("consult-situation").classList.remove("btn-selected")
}
