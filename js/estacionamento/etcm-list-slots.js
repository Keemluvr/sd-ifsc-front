listSlots()

function listSlots() {
    showListSlots()
    APIESTACIONAMENTO.get(`/allSlots/`)
        .then(function (response) {
            // Sucesso
            console.log(response.data)

            response.data.forEach(vaga => {

                document.getElementById('cards-slots').innerHTML += `
                    <div class="card-slot">
                    <svg class="icon-slot" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 468 468" style="enable-background:new 0 0 468 468; " xml:space="preserve">
                        <g>
                            <g>
                                <path style="fill: ${available[vaga.Ocupada]};" d="M450.1,187.5l-10.2-10.8l-35.8-96.5C398,63.9,382.4,53.1,365,53H109.3c-17.4,0-33,10.9-39.1,27.2l-35.3,95.3l-14.7,13.6
                                    C7.4,200,0,216,0,232.8v140.6c0.1,23,18.8,41.6,41.8,41.6h26.4c23,0,41.7-18.6,41.8-41.6V353h248v20.4c0.1,23,18.8,41.6,41.8,41.6
                                    h26.4c23,0,41.7-18.6,41.8-41.6V229.1C467.9,213.4,461.5,198.4,450.1,187.5z M89,87c3.2-8.5,11.3-14,20.3-14h255.8
                                    c9,0,17.1,5.6,20.3,14l31.2,84h-23.3c-5.5-37.5-40.4-63.4-77.9-57.8c-29.9,4.4-53.4,27.9-57.8,57.8H57.8L89,87z M372.9,171h-95.1
                                    c5.5-26.3,31.3-43.1,57.6-37.6C354.2,137.4,368.9,152.1,372.9,171z M90,373.4c-0.1,12-9.8,21.6-21.8,21.6H41.8
                                    c-12,0-21.7-9.6-21.8-21.6v-26.2c6,3.9,13.9,5.8,21.8,5.8H90V373.4z M448,373.4c-0.1,12-9.8,21.6-21.8,21.6h-26.4
                                    c-12,0-21.7-9.7-21.8-21.6V353h48.2c7.9,0,15.8-1.9,21.8-5.8V373.4z M426.2,333H41.8c-11.9,0.1-21.7-9.4-21.8-21.4v-78.8
                                    c0-11,4.9-21.5,13.3-28.6c0.1-0.1,0.3-0.3,0.4-0.4L47.3,191H426l9.6,10.3c0.1,0.2,0.4,0.3,0.5,0.5c7.5,7.1,11.8,17,11.8,27.3v82.5
                                    h0.1C447.9,323.5,438.1,333.1,426.2,333z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill: ${available[vaga.Ocupada]};" d="M132,231H57c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C142,235.5,137.5,231,132,231z M122,283
                                    H67v-32h55V283z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill: ${available[vaga.Ocupada]};" d="M411,231h-75c-5.5,0-10,4.5-10,10v52c0,5.5,4.5,10,10,10h75c5.5,0,10-4.5,10-10v-52C421,235.5,416.5,231,411,231z
                                        M401,283h-55v-32h55V283z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill: ${available[vaga.Ocupada]};" d="M282.3,273h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,273,282.3,273z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path style="fill: ${available[vaga.Ocupada]};" d="M282.3,242h-96.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h96.6c5.5,0,10-4.5,10-10S287.8,242,282.3,242z"/>
                            </g>
                        </g>
                        <g>
                    </svg>
                        <p><strong>Vaga</strong>: ${vaga.Numero}</p>
                        <p><strong>Disponibilidade</strong>: ${ (vaga.Ocupada==true)  ? 'Disponível' : 'Ocupada' }</p>
                    </div>
                `


            });


        })
        .catch(function (error) {
            // Erro
            alertify.warning('Erro ao carregar vagas!');
        });

}

let available = {
    true: '#32A041',
    false: '#C8191E',
}