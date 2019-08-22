const spanishData = {
  name: "Spanish",
  notablePeople: [
    "Antonio Banderas",
    "John Cena",
    "Enrique Iglesias",
    "Rita Moreno",
    "Penelope Cruz"
  ],
  funFacts: {
    relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
    lettersInAlphabet: 27,
    numberOfSpeakers: "more than 437 million"
  },
  countriesSpoken: [
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominican Republic",
    "Equador",
    "El Salvador",
    "Equatorial Guinea",
    "Guetemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Mali",
    "Monaco",
    "Paraguay",
    "Peru",
    "Puerto Rico",
    "Spain",
    "Uruguay",
    "Venezuela"
  ],
  dictionary: {
    hello: "Hola",
    goodbye: "Adiós",
    thankYou: "Gracias",
    goodEvening: "Buena noches",
    howAreYou: "¿cómo estás?",
    whatsYourName: "cuál es tu nombre?"
  }
};

// will print the title of spanish
const spanishtitle = spanishData.name

// build notable people list
const theSpanishpeople = spanishData.notablePeople 

function buildpeoplelist (){
let peoplehtmlstring= " "
for (let i = 0; i < theSpanishpeople.length; i++){
peoplehtmlstring = peoplehtmlstring + `<li>` + theSpanishpeople[i]
}
return peoplehtmlstring
} 

// will build language list
const factsLanguageSP = spanishData.funFacts.relatedLanguages

function buildlanguagelist (){
let languagehtmlstring = " "
for (let i= 0; i < factsLanguageSP.length; i++){
languagehtmlstring = languagehtmlstring + `<li>` + factsLanguageSP[i]
}
return languagehtmlstring
}

// will build countries spoken function
const countryspokenSP = spanishData.countriesSpoken 

function buildcountryspokenlist (){
let countryspokenhtmlstring = " "
for (let i= 0; i < countryspokenSP.length; i++){
  countryspokenhtmlstring = countryspokenhtmlstring + `<li>` + countryspokenSP[i]
}
return countryspokenhtmlstring
}

// will display alphabet number

const SPalphabet= spanishData.funFacts.lettersInAlphabet

// will display number of speakers
const SPspeakers= spanishData.funFacts.numberOfSpeakers

// will call the button to display french facts
const spanishbutton= document.querySelector("#spanish")

// event listener creating the html to the DOM

spanishbutton.addEventListener("click",function(){
document.querySelector("#language-container").innerHTML=
`<h1>${spanishtitle}</h1>
<br>
<div class="container"> 

<div class="col-sm">
<h2>NOTABLE PEOPLE</h2>
${buildpeoplelist()}
</div>

<br>
<br>
<div class="col-sm">
<h2>FUN FACTS</h2>
<br>
<h3>Related Languages</h3>
${buildlanguagelist()}
<br>
<h3>Letters in the Alphabet</h3>
<li>${alphabet}</li>
<h3>Number of Speakers</h3>
<li>${speakers}</li>
<br>
</div>

<div class="col-sm">
<h2>COUNTRIES SPOKEN</h2>
${buildcountryspokenlist()}
</div id ="Translator">

<h1> Spanish Translator </h1>

<form>
input id = "translation-input" type=text>

<button id= " translatebutton"> 

</form>
<br>
</div>
</div>

`
})  















