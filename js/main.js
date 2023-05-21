// array di oggeti contenente le proprietà di ogni immagine da inserire nel DOM
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono il container di riferimento presente nel DOM nel quale inseriremo tutte il immagini
const generalContainer = document.getElementById("img-container");

// cicliamo l'inserimento dei div contenente immagine, titolo e testo
images.forEach(element => {
    // creo il blocco composto da 2 div 
    const blocchetto = 
    `<div class="item">
        <img src="${element.image}" alt="">
    </div>

    <div class="card-details hidden">
        <h3>${element.title}</h3>
        <span>${element.text}</span>
    </div>`;

    // li inserisco nel container
    generalContainer.innerHTML += blocchetto;
    
});







