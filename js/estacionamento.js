// Variáveis globais
const APIESTACIONAMENTO = axios.create({
    baseURL: 'https://ifsc-parking-ws.herokuapp.com/parking/',
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

APIESTACIONAMENTO.get(`/slots/`)
    .then(function (response) {
        // Sucesso
        //console.log(response.data)
    })
    .catch(function (error) {
        // Erro
        alertify.warning('Erro');
    });

    APIESTACIONAMENTO.get(`/allSlots/`)
    .then(function (response) {
        // Sucesso
        //console.log(response.data)
    })
    .catch(function (error) {
        // Erro
        alertify.warning('Erro');
    });

    APIESTACIONAMENTO.post('/occupySlot/2')
    .then(function (response) {
        //console.log(response.data)
    })
    .catch(function (error) {
        alertify.error('Erro!');
    });

APIESTACIONAMENTO.post('/freeSlot/2')
        .then(function (response) {
            //console.log(response.data)
        })
        .catch(function (error) {
            alertify.error('Erro!');
        });