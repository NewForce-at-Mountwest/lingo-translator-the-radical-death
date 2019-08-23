const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// will print the title of french
const frenchtitle = frenchData.name

// build notable people list
const thepeople = frenchData.notablePeople

function buildpeoplelist (){
  let peoplehtmlstring= " "
for (let i = 0; i < thepeople.length; i++){
peoplehtmlstring = peoplehtmlstring + `<li>` + thepeople[i]
}
return peoplehtmlstring
}
// will build language list
const factsLanguage= frenchData.funFacts.relatedLanguages

function buildlanguagelist (){
  let languagehtmlstring = " "
  for (let i= 0; i < factsLanguage.length; i++){
languagehtmlstring = languagehtmlstring + `<li>` + factsLanguage[i]
  }
  return languagehtmlstring
}

// will build countries spoken function
const countryspoken = frenchData.countriesSpoken

function buildcountryspokenlist (){
  let countryspokenhtmlstring = " "
  for (let i= 0; i < countryspoken.length; i++){
    countryspokenhtmlstring = countryspokenhtmlstring + `<li>` + countryspoken[i]
  }
  return countryspokenhtmlstring
}

// will display alphabet number

const alphabet= frenchData.funFacts.lettersInAlphabet

// will display number of speakers
const speakers= frenchData.funFacts.numberOfSpeakers

// will call the button to display french facts
const frenchbutton= document.querySelector("#french")

// will call the translate button
const translatebtn= document.querySelector("#language-container")

// logic for translator input
const answerToTrany = () => {

  const inputValue = document.querySelector("#mytext").value

  if ( inputValue === "hello"){
    return frenchData.dictionary.hello
  }
else if ( inputValue === "goodbye"){
  return frenchData.dictionary.goodbye
}
else if ( inputValue === "thank you"){
  return frenchData.dictionary.thankYou
}
else if ( inputValue === "good evening"){
  return frenchData.dictionary.goodEvening
}
else if ( inputValue === "how are you"){
  return frenchData.dictionary.howAreYou
}
else if ( inputValue === "whats your name"){
  return frenchData.dictionary.whatsYourName
}
else {
  return `<br> YOU IZ STUPID!!!`
}
}
// event listener for the translator 

translatebtn.addEventListener("click",function(){
  document.querySelector("#mytext")
 if  (event.target.id === "translatebutton"){
   document.querySelector("#translatedword").innerHTML= answerToTrany()
  }
})

// event listener creating the html to the DOM

frenchbutton.addEventListener("click",function(){
document.querySelector("#language-container").innerHTML= 
`<div class= "header">
<h1>${frenchtitle}</h1>
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
</div>
<br>
</div>


<div class="textbox">
<h3>FRENCH TRANSLATOR</h3>
<br>
<form>
TRANSLATE FRENCH: <input id="mytext">

<button id="translatebutton">TRANSLATE</button>

<div id= "translatedword">
</div>
</form>
<br>
</div>
</div>
`
})

