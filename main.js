const name = "Wojtek";
const surname = "Blachut";

console.log(
  `Siemka z tej strony ${name} ${surname}. Życzę miłego przeglądania strony. Pozdrawiam!`
);

let footer = document.querySelector(".inner-js");

footer.innerHTML = "Tekst dodany przez JS'a";

function showWelcomeMessage(name, surname) {
  console.log(`Hej, jestem ${name} ${surname}, witam na mojej stronie domowej`);
}

const showWelcomeMessageArrow = (name, age) => {
  console.log(`Hej, jestem ${name} ${age}, witam na mojej stronie domowej`);
};

showWelcomeMessageArrowT = (name, age) => {
  console.log(
    `Hej, jestem ${name} ${age}, witam na mojej stronie domowej TESTSSS`
  );
};

showWelcomeMessageArrowT("Wojtek", "32");

welcomeFormula = {
  name: "Wacek",
  age: 32,
  sayHello: (name) => {
    console.log(`${name} saying hello from the object`)
  },
};

welcomeFormula.sayHello(welcomeFormula.name);

showMeProperty = (myProperty) =>{
  console.log(welcomeFormula[myProperty])
}

showMeProperty('age')