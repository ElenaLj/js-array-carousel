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

// 2) inserisco array in thumbnail

    // 2.1) indico a JS dove andare ad inserire array creando una variabile per il mio div di punta
const myThumbnail = document.querySelector(".thumbnail");

    // 2.2) uso un ciclo for per insierire le diverse immagini così da non ripetere stesso codice 


    // ************** PARTE CHE NON FUNZIONA PERCHE' NASCONDE LE MIE FRECCE

    // 2.2b) creo una variabile let vuota che andrò ad inserire nel ciclo
// let thumbnailContent = "";

 for (let i = 0; i < imagesArray.length; i++) {
    myThumbnail.innerHTML += `
     <div class="img-container">
         <img src="${imagesArray[i]}" alt="">
     </div>
     `
 }
//  console.log(thumbnailContent);

    // 2.3) ora vado ad inserire nel div di punta il contenuto dinamico creato col ciclo for
// myThumbnail.innerHTML = thumbnailContent;



    // 2.4) devo aggiungere anche la classe active 
// const imgActive = document.querySelector(".img-container");
// imgActive.className = "img-container active";

//selezioniamo tutto per rendere il primo attivo
const imgContainer = document.getElementsByClassName("img-container");
console.log(imgContainer);

// creo una variabile per incrememntare l'indice di volta in volta
let imgActive = 0; 
imgContainer[imgActive].classList.add("active");
    
//Quando clicco sulla freccia cambia immagine
const up = document.querySelector(".arrow-up");
const down = document.querySelector(".arrow-down");

down.addEventListener("click", function() {
   if (imgActive < imagesArray.length - 1) {
        //rimuovere classe active al primo elemento
        imgContainer[imgActive].classList.remove("active");

        //incrememnto
        imgActive++;

        //aggiugno classe all'elemento incremmentato
        imgContainer[imgActive].classList.add("active");
   }

});

up.addEventListener("click", function (){

    if (imgActive > 0) {
        //togliere la classe active
    imgContainer[imgActive].classList.remove("active");

    //incremento l'indice 
    imgActive--;

    //aggiungo la classe active all'elemento incrementato
    imgContainer[imgActive].classList.add("active");
    }
});