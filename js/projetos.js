// Variáveis globais
const APIESTACIONAMENTO = axios.create({
    baseURL: 'https://projetos-pesquisa-api.herokuapp.com/api/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

// ****************************************************************************************************************************
// *************************************************** Todos os projetos de pesquisa ******************************************
// ****************************************************************************************************************************
function showSituation() {
    APIESTACIONAMENTO.get(`/dashBoard/`)
        .then(function (response) {
            // Sucesso
            console.log(response.data)

            document.getElementById('situation-project').innerHTML += `
                <p>Projetos com o cadastro em andamento</p>
                <p>${response.data.Data.QuantidadePorSituacao[0].Quantidade}</p>

                <p>Projetos submetidos</p>
                <p>${response.data.Data.QuantidadePorSituacao[1].Quantidade}</p>

                <p>Projetos cadastrados</p>
                <p>${response.data.Data.QuantidadePorSituacao[2].Quantidade}</p>

                <p>Projetos distribuídos para avaliação (automáticamente)</p>
                <p>${response.data.Data.QuantidadePorSituacao[3].Quantidade}</p>

                <p>Projetos com a avaliação insuficiente</p>
                <p>${response.data.Data.QuantidadePorSituacao[4].Quantidade}</p>

                <p>Projetos distribuídos para avaliação (manualmente)</p>
                <p>${response.data.Data.QuantidadePorSituacao[5].Quantidade}</p>

                <p>Projetos aprovados</p>
                <p>${response.data.Data.QuantidadePorSituacao[6].Quantidade}</p>

                <p>Projetos em execução</p>
                <p>${response.data.Data.QuantidadePorSituacao[7].Quantidade}</p>

                <p>Projetos finalizados (Renovado)</p>
                <p>${response.data.Data.QuantidadePorSituacao[8].Quantidade}</p>

                <p>Projetos finalizados</p>
                <p>${response.data.Data.QuantidadePorSituacao[9].Quantidade}</p>

                <p>Projetos reprovados</p>
                <p>${response.data.Data.QuantidadePorSituacao[10].Quantidade}</p>

                <p>Projetos desativados</p>
                <p>${response.data.Data.QuantidadePorSituacao[11].Quantidade}</p>

                <p>Projetos excluídos</p>
                <p>${response.data.Data.QuantidadePorSituacao[12].Quantidade}</p>

                <p>Projetos finalizados com pendências</p>
                <p>${response.data.Data.QuantidadePorSituacao[13].Quantidade}</p>
            `
        })
        .catch(function (error) {
            // Erro
            alertify.warning('Erro');
        });
}

APIESTACIONAMENTO.post('/projetosSituacao/2')
    .then(function (response) {
        //console.log(response.data)
    })
    .catch(function (error) {
        alertify.error('Erro!');
    });