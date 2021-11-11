//alert("Hello World!")

//inserisco immagine nella colonna di sinistra
const myImage = document.querySelector(".col-sx");

let myFirst = `<img src="img/01.jpg" alt="img01">`
myImage.innerHTML = myFirst;

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
    myThumbnail.innerHTML += `<img src="${imagesArray[i]}" alt="img01">` 
}