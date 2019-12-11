// Variáveis globais
const APIPROJETOS = axios.create({
    baseURL: 'https://projetos-pesquisa-api.herokuapp.com/api/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});


