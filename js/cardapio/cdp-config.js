// Variáveis globais
const APICARDAPIO = axios.create({
    baseURL: 'https://cardapio-ifsc.herokuapp.com/api',
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

