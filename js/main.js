// variabili globali
const generalContainer = document.getElementById("img-container");
let square;

// creare array con immagini
let listImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
console.log(listImg);

// cicliamo l'inserimento delle immagini
for (i = 0; i < listImg.length; i++){

    // creo i div da inserire nel generalContainer
    square = document.createElement("div");
    generalContainer.append(square);

    // inserisco le immagini nel rispettivo div 
    square.innerHTML = `<img src="img/${listImg[i]}">`;
    
    // aggiunta classe stile css
    square.classList.add("item");
    
}

// assegno al primo "div" contenente l'immagine la classe active
const activeImg = document.querySelector("div > .item");
activeImg.classList.add("active");

// seleziono il pulsante per far scorrere le immagini
let forward = document.querySelector('.forward');

// gestisco l'evento sul click sul pulsante forward
let activeItem = 0;

forward.addEventListener('click',

    function(){
        // seleziono tutte le immagini tramite la classe item
        let items = document.querySelectorAll(".item");
        console.log(items);

        // rimuovo a tutte le immagini la classe active
        items[activeItem].classList.remove("active");

        if (activeItem === listImg.length - 1) {
            activeItem = -1;
        }

        // incremento il valore di posizionamento
        activeItem++;
        
        // aggiungo la classe per rendere l'immagine visibile
        items[activeItem].classList.add("active");
        
    }

)

// eseguo il procedimento inverso per il bottone back
let back = document.querySelector(".back");

back.addEventListener('click',

    function(){
        // seleziono tutte le immagini tramite la classe item
        let items = document.querySelectorAll(".item");
        console.log(items);

        // rimuovo a tutte le immagini la classe active
        items[activeItem].classList.remove("active");

        if (activeItem === 0) {
            activeItem = listImg.length;
        }

        // decremento il valore di posizionamento
        activeItem--;
        
        // aggiungo la classe per rendere l'immagine visibile
        items[activeItem].classList.add("active");
        
    }

)





