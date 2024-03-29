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

// will call the button to display Spanish facts
const spanishbutton= document.querySelector("#spanish")

const languageContainer= document.querySelector("#language-container") 


// logic for the translator button //
const answerToSpanishTranslation = () => {

  const inputValue = document.querySelector("#transinput").value 

if ( inputValue === "hello"){
  return spanishData.dictionary.hello
}

else if (inputValue === "goodbye"){
  return spanishData.dictionary.goodbye 
}

else if (inputValue === "thank you"){
  return spanishData.dictionary.thankYou 
}

else if ( inputValue === "good evening"){
return spanishData.dictionary.goodEvening
}

else if (inputValue === "how are you"){
  return spanishData.dictionary.howAreYou
}

else if ( inputValue === "whats your name"){
  return spanishData.dictionary.whatsYourName
}



}

// event listener for the translator 
languageContainer.addEventListener("click",function(){
  console.log("you clicked anywhere in the container")
  document.querySelector("#transinput")
  
  if (event.target.id === "translatebutton"){
    
    document.querySelector("#Translate-Language").innerHTML=answerToSpanishTranslation()
  }
})


// event listener creating the html to the DOM

spanishbutton.addEventListener("click",function(){
document.querySelector("#language-container").innerHTML=

`<div class = "header"> 
<h1>${spanishtitle}</h1>
</div>
<br>
<div class="textbox">

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
<input id = "transinput">

<button id= "translatebutton">Translate</button> 

<div id= "Translate-Language"> 
</div>

</form>
<br>
</div>
</div>

`
})  

