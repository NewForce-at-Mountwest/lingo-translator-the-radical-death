const mandarinData = {
  name: "Mandarin",
  notablePeople: [
    "Herbert Hoover",
    "Koji Yano",
    "Mark Henry Rowswell",
    "Mark Zuckerberg",
    "Ming Na Wen",
    "John Cena",
    "Kevin Rudd",
    "Park Geun-hye",
    "Vanessa Branch",
    "Mira Sorvino",
    "Bob Woodruff",
    "Takeshi Kaneshiro",
    "Lou Jing"
  ],
  funFacts: {
    relatedLanguages: ["Korean", "Japanese"],
    lettersInAlphabet: 50000,
    numberOfSpeakers: "about 900 million",
    mandrinInfo: {
      dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
      chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
    }
  },
  countriesSpoken: [
    "China",
    "Singapore",
    "Taiwan"
  ],
  dictionary: {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    goodEvening: "晚上好",
    howAreYou: "你好吗",
    whatsYourName: " 你叫什么名字"
  }
}

//Listens for click events and grabs correct HTML section
const navigation = document.querySelector("#mandarin").addEventListener("click", function () {
  const mandarinInfo = document.querySelector("#language-container")
  //inserts the lists into the correct HTML.
  mandarinInfo.innerHTML = `<div class=header><h1>${mandarinName}</h1></div>

  <br>
  <div class="container">
    <div class="row">
      <div class="col-sm">
      <h2>NOTABLE PEOPLE</h2>
      ${addNotablePeople()}
      </div>
  
      <br>
      <br>

      <div class="col-sm">
      <h2>FUN FACTS</h2>
      <br>
      <h4>Related Languages</h4>
      ${addFunFactsFactsLanguage()}
      <br>
      <h4>Letters in the Alphabet</h4>
      <li>${letters}</li>
      <br><br>
      <h4>Number of Speakers</h4>
      <li>${speakers}</li>
      <br><br>
      <h4>Area Dialects</h4>
      <li>${dialectInformation}</li>
      <br><br>
      ${addDialects()}
      </div>
  
      <div class="col-sm">
      <h2>COUNTRIES SPOKEN</h2>
      ${addCountries()}
      </div>
    </div>

    <br><br>

  
  <div class="row">
  <div class="col">
  <section class=textbox>
  <input>Enter Text</input> <button class=translate_button>Translate</button>
  </section>
  </div>
  `
})

//build translator function
const xlate= function buildTranslatorButton(){
  const xlateBtn = document.querySelector("body").addEventListener("click", function () {
    //compare input text to language object
    //get user input, make variable
    //if statements for all words as strings
    //print translated 
  
  console.log("xlate button clicked")
})
}


//build list of languages
function addFunFactsFactsLanguage(FunfactsLanguagesArray) {

  let languageIterations = ""
  for (i = 0; i < mandarinData.funFacts.relatedLanguages.length; i++) {
    languageIterations += `<p><li>${mandarinData.funFacts.relatedLanguages[i]}</li></p>`
  }
  return languageIterations

}

//build list of speakers
function addNotablePeople(notablePeopleArray) {
  let peopleIterations = ""
  for (i = 0; i < mandarinData.notablePeople.length; i++) {
    peopleIterations += `<p><li>${mandarinData.notablePeople[i]}</li></p>`
  }
  return peopleIterations

}

//build list of countries in which its spoken
function addCountries(countriesArray) {
  let countriesIterations = "<h3></h3>"
  for (i = 0; i < mandarinData.countriesSpoken.length; i++) {
    countriesIterations += `<p><li>${mandarinData.countriesSpoken[i]}</li></p>`
  }
  return countriesIterations

}
//build list of Chinese dialect information
function addDialects(dialectsArray) {
  let dialectsIterations = "<h4>Chinese Dialects </h4>"
  for (i = 0; i < mandarinData.funFacts.mandrinInfo.chineseDialects.length; i++) {
    dialectsIterations += `<p><li>${mandarinData.funFacts.mandrinInfo.chineseDialects[i]}</li></p>`
  }
  return dialectsIterations

}


//create variables for letters in alphabet, dialect information, and language name.
const letters = mandarinData.funFacts.lettersInAlphabet
const dialectInformation = mandarinData.funFacts.mandrinInfo.dialectInfo
const mandarinName = mandarinData.name


