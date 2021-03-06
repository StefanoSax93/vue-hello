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
        name: '',
        messageStyle: 'text-success display-1 font-weight-bold text-uppercase',
        inputName: '',
        inputSurname: '',
        randomImage: ''
    },
    
    methods: {
        generateName: function () {
            this.name= this.inputName + ' ' + this.inputSurname;
        },
        generateImage: function() {
            //genero un numero casuale da 1 a 500
            let randomNumber = Math.floor(Math.random() * 500) + 1;
            this.randomImage = `https://picsum.photos/id/${randomNumber}/600/400`;
        },
        removeImage: function() {
            this.randomImage = '';
        }
    },
});