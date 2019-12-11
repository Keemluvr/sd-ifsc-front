// ****************************************************************************************************************************
// ******************************************** Troca de telas dos botões *****************************************************
// ****************************************************************************************************************************
function showProjects() {
    // Abrir conteúdo
    document.getElementById("projects").style.display = "flex";
    document.getElementById("situation-project").style.display = "none";
    // Botões acionados
    document.getElementById("all-projects").classList.add("btn-selected")
    document.getElementById("situation").classList.remove("btn-selected")
    document.getElementById("consult-situation").classList.remove("btn-selected")
}

function showSituation() {
    // Abrir conteúdo
    document.getElementById("projects").style.display = "none";
    document.getElementById("situation-project").style.display = "flex";
    // Botões acionados
    document.getElementById("all-projects").classList.remove("btn-selected")
    document.getElementById("situation").classList.remove("btn-selected")
    document.getElementById("consult-situation").classList.add("btn-selected")
}