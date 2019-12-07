// ****************************************************************************************************************************
// ******************************************** Troca de telas dos botões *****************************************************
// ****************************************************************************************************************************
function showMenuDay() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "flex";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("modify-menu").style.display = "none";
    document.getElementById("list-menu").style.display = "none";
    // Botões acionados
    document.getElementById("menu-day").classList.add("btn-selected")
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("list").classList.remove("btn-selected")
}

function showRegister() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "flex";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("modify-menu").style.display = "none";
    document.getElementById("list-menu").style.display = "none";
    // Botões acionados
    document.getElementById("menu-day").classList.remove("btn-selected")
    document.getElementById("register").classList.add("btn-selected")
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("list").classList.remove("btn-selected")
}

function showEdit() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "flex";
    document.getElementById("modify-menu").style.display = "none";
    document.getElementById("list-menu").style.display = "none";
    // Botões acionados
    document.getElementById("menu-day").classList.remove("btn-selected")
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("list").classList.remove("btn-selected")
}

function showModify() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("modify-menu").style.display = "block";
    document.getElementById("list-menu").style.display = "none";
    // Botões acionados    
    document.getElementById("menu-day").classList.remove("btn-selected")
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("delete").classList.add("btn-selected")
    document.getElementById("list").classList.remove("btn-selected")
}

function showList() {
    // Abrir conteúdo
    document.getElementById("today-menu").style.display = "none";
    document.getElementById("register-menu").style.display = "none";
    document.getElementById("edit-menu").style.display = "none";
    document.getElementById("modify-menu").style.display = "none";
    document.getElementById("list-menu").style.display = "block";
    // Botões acionados
    document.getElementById("menu-day").classList.remove("btn-selected")
    document.getElementById("register").classList.remove("btn-selected")
    document.getElementById("delete").classList.remove("btn-selected")
    document.getElementById("list").classList.add("btn-selected")
}