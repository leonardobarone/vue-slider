// Rifare l'esercizio dello slider come fatto assieme in classe.
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
const app = new Vue({
    el: "#root",
    data: {
        immagini: [
        "./img/aldo_baglio.jpg",
        "./img/giovanni_storti.jfif",
        "./img/giacomo_poretti.jpg"
        ],
        indexImmagine: 0,
    },
    methods: {
        avanti: function(){
            this.indexImmagine++
            if (this.indexImmagine >= this.immagini.length) {
                this.indexImmagine = 0;
            }
        },
        indietro: function() {
          this.indexImmagine--
            if (this.indexImmagine == -1) {
                this.indexImmagine = this.immagini.length - 1
            }
        }
    }
})




// ./img/giovanni_storti.jfif
// ./img/giacomo_poretti.jpg
// ./img/aldo_baglio.jpg