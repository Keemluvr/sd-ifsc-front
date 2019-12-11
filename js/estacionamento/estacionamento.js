

APIESTACIONAMENTO.get(`/dashboard/`)
    .then(function (response) {
        // Sucesso
        console.log(response.data)
    })
    .catch(function (error) {
        // Erro
        alertify.warning('Erro');
    });



// APIESTACIONAMENTO.post('/occupySlot/2')
//     .then(function (response) {
//         //console.log(response.data)
//     })
//     .catch(function (error) {
//         alertify.error('Erro!');
//     });

// APIESTACIONAMENTO.post('/freeSlot/2')
//         .then(function (response) {
//             //console.log(response.data)
//         })
//         .catch(function (error) {
//             alertify.error('Erro!');
//         });