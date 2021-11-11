//alert("Hello World!")

//inserisco immagine nella colonna di sinistra
const slider = document.querySelector(".col-sx");

let myFirst = `<img src="img/01.jpg" alt="img01">`
slider.innerHTML = myFirst;

//inserisco immagine nella colonna di destra

//creo un array
const imagesArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

let myThumbnail = document.querySelector(".col-dx");

//creo ciclo 
for (let i = 0; i < imagesArray.length; i++) {
    myThumbnail.innerHTML += `<img src="${imagesArray[i]}" alt="">` 
}

//Quando clicco sulla freccia cambia immagine
let up = document.querySelector(".arrow-up");
let down = document.querySelector(".arrow-up");
// myArrow.addEventListener("click", function() {
//     for (var i = 0 ; )
// })