// Variáveis globais
const APICARDAPIO = axios.create({
    baseURL: 'https://cardapio-ifsc.herokuapp.com/api',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

let btnCadastroCardapio = document.getElementById('btn-cadastro-cardapio')
let btnEditarCardapio = document.getElementById('btn-editar-cardapio')

let todayMenu = document.getElementById('today-menu')


let data = document.getElementsByClassName('data')

dataAtual = new Date


APICARDAPIO.get(`/cardapio/${dataAtual.getDate()}`)
    .then(function (response) {
        // Sucesso

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
        console.log(response)

    })
    .catch(function (error) {
        // Erro
        alertify.warning('Cardápio do dia ainda não cadastrado ou indisponível!');
    });


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


// 