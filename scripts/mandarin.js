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
  mandarinInfo.innerHTML =  `<h1>${mandarinName}</h1>
  <br>
  <div class="container">
  
  <div class="col-sm">
  <h2>NOTABLE PEOPLE</h2>
  ${addNotablePeople()}
  </div>
  
  <br>
  <br>
  <div class="col-sm">
  <h2>FUN FACTS</h2>
  <br>
  <h3>Related Languages</h3>
  ${addFunFactsFactsLanguage()}
  <br>
  <h3>Letters in the Alphabet</h3>
  <li>${letters}</li>
  <h3>Number of Speakers</h3>
  <li>${speakers}</li>
  <br>
  <h3>Area Dialects</h3>
  <li>${dialectInformation}</li>
  <li>${addDialects()}</li>
  </div>
  
  <div class="col-sm">
  <h2>COUNTRIES SPOKEN</h2>
  ${buildcountryspokenlist()}
  </div>
  </div>
  `
  })
  
  




//build list of languages


function addFunFactsFactsLanguage(FunfactsLanguagesArray){
  
  let languageIterations = ""
 for (i = 0; i < mandarinData.funFacts.relatedLanguages.length; i++) {
  languageIterations += `<p>${mandarinData.funFacts.relatedLanguages[i]}</p>`
 }
   return languageIterations

}
//build remaining funfacts






//build list of speakers
function addNotablePeople(notablePeopleArray){
  let peopleIterations = ""
 for (i = 0; i < mandarinData.notablePeople.length; i++) {
  peopleIterations += `<p>${mandarinData.notablePeople[i]}</p>`
 }
  return peopleIterations

}



  
//build list of countries in which its spoken
function addCountries(countriesArray){
  let countriesIterations = "<h3>Countries in which its spoken: </h3>"
 for (i = 0; i < mandarinData.countriesSpoken.length; i++) {
  countriesIterations += `<p>${mandarinData.countriesSpoken[i]}</p>`
 }
   return countriesIterations

}
 
function addDialects(dialectsArray){
  let dialectsIterations = "<h4>Chinese Dialects: </h4>"
 for (i = 0; i < mandarinData.funFacts.mandrinInfo.chineseDialects.length; i++) {
  dialectsIterations += `<p>${mandarinData.funFacts.mandrinInfo.chineseDialects[i]}</p>`
 }
   return dialectsIterations

}
 

 
 const letters=mandarinData.funFacts.lettersInAlphabet
 const dialectInformation=mandarinData.funFacts.mandrinInfo.dialectInfo
 const mandarinName = mandarinData.name
 
   





 
//Parking Lot 
// let factsRelatedLanguage = mandarinData.funFacts.relatedLanguages




  


  


 