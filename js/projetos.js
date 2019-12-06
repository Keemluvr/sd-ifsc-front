// Variáveis globais
const APIPROJETO = axios.create({
    baseURL: 'https://projetos-pesquisa-api.herokuapp.com/api/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

APIESTACIONAMENTO.get(`/dashboard/`)
    .then(function (response) {
        // Sucesso
        //console.log(response.data)
    })
    .catch(function (error) {
        // Erro
        alertify.warning('Erro');
    });

    APIESTACIONAMENTO.post('/projetosSituacao/2')
    .then(function (response) {
        //console.log(response.data)
    })
    .catch(function (error) {
        alertify.error('Erro!');
    });