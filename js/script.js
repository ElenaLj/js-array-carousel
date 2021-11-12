//alert("Hello World!")

// ******** THUMBNAIL

// 1) creo un array per le immagini
const imagesArray = [
    "img/01.jpg", // indice 0
    "img/02.jpg", // indice 1
    "img/03.jpg", // indice 2
    "img/04.jpg", // indice 3
    "img/05.jpg", // indice 4
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

// 2) inserisco array in thumbnail

    // 2.1) indico a JS dove andare ad inserire array creando una variabile per il mio div di punta
const myThumbnail = document.querySelector(".thumbnail");

    // 2.2) uso un ciclo for per insierire le diverse immagini così da non ripetere stesso codice 


    // ************** PARTE CHE NON FUNZIONA PERCHE' NASCONDE LE MIE FRECCE

    // 2.2b) creo una variabile let vuota che andrò ad inserire nel ciclo
// let thumbnailContent = "";

// for (let i = 0; i < imagesArray.length; i++) {
//     thumbnailContent += `
//     <div class="img-container">
//         <img src="${imagesArray[i]}" alt="">
//     </div>
//     `
// }
// console.log(thumbnailContent);

    // 2.3) ora vado ad inserire nel div di punta il contenuto dinamico creato col ciclo for
// myThumbnail.innerHTML = thumbnailContent;

// **************/ PARTE CHE NON FUNZIONA PERCHE' NASCONDE LE MIE FRECCE


// ***************** INSERENDO DIRETTAMENTE NEL CICLO SI VEDONO
for (let i = 0; i < imagesArray.length; i++) {
    myThumbnail.innerHTML += `
    <div class="img-container">
        <img src="${imagesArray[i]}" alt="">
    </div>
    `
}

    // 2.4) devo aggiungere anche la classe active 
const imgActive = document.querySelector(".img-container");
imgActive.className = "img-container active";

    

//Quando clicco sulla freccia cambia immagine
// let up = document.querySelector(".arrow-up");
// let down = document.querySelector(".arrow-up");
// myArrow.addEventListener("click", function() {
//     for (var i = 0 ; )
// })