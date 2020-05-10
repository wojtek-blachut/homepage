const name = "Wojtek";
const surname = "Blachut";

console.log(
  `Siemka z tej strony ${name} ${surname}. Życzę miłego przeglądania strony. Pozdrawiam!`
);

let footer = document.querySelector('.inner-js');

footer.innerHTML = 'Tekst dodany przez JS\'a';