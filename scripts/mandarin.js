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

  <fieldset>
  <div class="row">
  <div class="col textbox">  
  <label id="translator-label" for="translator">Translator App</label>
  <input type="text" id="mandarin-translator" class="textbox" placeholder="Input Text Here" />
  <button id="mandarin-translate-entry">Translate!</button>
  </fieldset>
  <p id="mand-answer" class=textbox></p>
  </section>
  </div>
  `
})

//build translator function

  document.querySelector("body").addEventListener("click", function() {   
  if(event.target.id === "mandarin-translate-entry"){  
    console.log("You clicked the translate button from the mandarin event listener")  
    document.querySelector("#mand-answer").innerHTML = answerToTranslationMand()
  }
})

// Create a function that translates the word typed into the "input" element into the hindi word.

const answerToTranslationMand = () => {

  const inputValue = document.querySelector("#mandarin-translator").value

  if ( inputValue === "Hello" || inputValue === "hello" ){
    return mandarinData.dictionary.hello
  } else if (inputValue === "Goodbye" || inputValue === "goodbye"){
    return mandarinData.dictionary.goodbye
  } else if (inputValue === "Thank you"|| inputValue === "thank you"){
    return mandarinData.dictionary.thankYou
  } else if (inputValue === "Good evening" || inputValue === "good morning"){
    return mandarinData.dictionary.goodEvening
  }else if (inputValue === "How are you" || inputValue === "how are you"){
    return mandarinData.dictionary.howAreYou
  }else if (inputValue === "Whats your name"|| inputValue === "whats your name" || inputValue === "what's your name" || inputValue === "What's your name"){
    return mandarinData.dictionary.whatsYourName
} else {
   return `Sorry, not in dictionary.` 
}
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


