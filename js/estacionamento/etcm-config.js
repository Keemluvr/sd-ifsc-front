// Variáveis globais
const APIESTACIONAMENTO = axios.create({
    baseURL: 'https://ifsc-parking-ws.herokuapp.com/parking/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});