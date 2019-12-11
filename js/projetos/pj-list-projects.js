// ****************************************************************************************************************************
// *************************************************** Todos os projetos ******************************************************
// ****************************************************************************************************************************
projects()

function projects() {
    showProjects()
    APIPROJETOS.get('/projetos')
        .then(function (response) {
            console.log(response.data.Data)
            response.data.Data.forEach(projeto => {
                document.getElementById('cards-project').innerHTML += `
                    <div class="card-project">
                        <div class="head-card">
                            <p>${projeto.Titulo}</p>
                            <p>${projeto.Codigo}</p>
                        </div>        
                        <div class="body-card">
                            <p><strong>Situação: <span style="background-color: ${situations[projeto.Situacao]}" class="sit-icon"></span> </strong>${situationsName[projeto.Situacao]}</p>
                            <p><strong>Área:</strong> ${projeto.Area}</p>
                            <p><strong>Coordenador:</strong> ${projeto.NomeCoordenador}</p>
                            <p><strong>Email do coordenador:</strong> ${projeto.EmailCoordenador}</p>
                        </div>
                    
                    </div>
                `
            });

        })
        .catch(function (error) {
            alertify.error('Não foi possível retornar todos os projetos!');
        });
}

let situations = {
    0: '#CA9A3E',
    1: '#08B9EC',
    2: '#00AE60',
    3: '#F8F384',
    4: '#FD5D58',
    5: '#E9A931',
    6: '#9BCA54',
    7: '#ECCD46',
    8: '#353334',
    9: '#3B4065',
    10: '#F55E34',
    11: '#C0C1C3',
    12: '#453327',
    13: '#BC7969',
}

let situationsName = {
    0: 'Cadastro em andamento',
    1: 'Submetido',
    2: 'Cadastrado',
    3: 'Distribuído para avaliação (automaticamente)',
    4: 'Avaliação insuficiente',
    5: 'Distribuído para avaliação (manualmente)',
    6: 'Aprovado',
    7: 'Em execução',
    8: 'Finalizado (renovado)',
    9: 'Finalizado',
    10: 'Reprovado',
    11: 'Desativado',
    12: 'Excluído',
    13: 'Finalizado com pendências',
}