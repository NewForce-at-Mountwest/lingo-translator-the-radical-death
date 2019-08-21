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
  mandarinInfo.innerHTML =  `${addNotablePeople()} <h3>Fun Facts</h3> ${addFunFactsFactsLanguage()} ${addCountries()}`
  
  

})

//build list of languages

function addFunFactsFactsLanguage(FunfactsLanguagesArray){
  
  let languageIterations = "<h4>Related Languages</h4>"
 for (i = 0; i < mandarinData.funFacts.relatedLanguages.length; i++) {
  languageIterations += `<p>${mandarinData.funFacts.relatedLanguages[i]}</p>`
 }
   return languageIterations

}



//build list of speakers
function addNotablePeople(notablePeopleArray){
  let peopleIterations = "<h3>Notable speakers: </h3>"
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
 



 
//Parking Lot 
// let factsRelatedLanguage = mandarinData.funFacts.relatedLanguages


  


  


 