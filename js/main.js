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
        messageStyle: 'text-success display-1 font-weight-bold',
        inputName: '',
        inputSurname: '',
        randomImage: ''
    },
    
    methods: {
        generateName: function () {
            this.name= this.inputName + ' ' + this.inputSurname;
            //voglio che il testo sia in maiuscolo
            this.name = this.name.toUpperCase();
        },
        generateImage: function() {
            this.randomImage = 'https://picsum.photos/600/400';
        },
        removeImage: function() {
            this.randomImage = '';
        }
    },
});