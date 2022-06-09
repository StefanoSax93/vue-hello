/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const appVue = new Vue({
    //seleziono l'elemento html dove avviare vue
    el: '#main',

    data: {
        message: 'Hello Vue!',
        messageStyle: 'text-success display-1 font-weight-bold',
        randomImage: 'https://picsum.photos/800/600'
    }
});