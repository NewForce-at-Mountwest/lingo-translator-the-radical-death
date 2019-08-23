
  const hindiData = {
    name: "Hindi  ",
    notablePeople: [
      "Nelly Furtado",
      "John Cena",
      "Natalie Di Luccio",
      "Anush Stepanyan",
      "Will Smith",
      "Hugh Jackman",
      "Julia Roberts",
      "Ben Kingsley",
      "Dev Patel"

    ],
    funFacts: {
      relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
      lettersInAlphabet: 50,
      numberOfSpeakers: "about 341 million"
    },
    countriesSpoken: [
      "India",
      "Nepal",
      "Fiji",
      "Pakistan",
      "Trinidad and Tobago",
      "Singapore",
      "South Africa",
      "Mauritius",
      "Guyana",
      "Suriname"
    ],
    dictionary: {
      hello: {
        hindi: "नमस्ते",
        englishPronunciation: "namaste"},
      goodbye: {
        hindi: "अलविदा",
        englishPronunciation:"alavida"
      },
      thankYou: {
        hindi: "धन्यवाद",
        englishPronunciation: "dhanyavaad"

      },
      goodEvening: {
        hindi: "सुसंध्या",
        englishPronunciation: "susandhya"
      },
      howAreYou: {
        hindi: "क्या हाल है",
        englishPronunciation: "kya haal hai"
      },
      whatsYourName: {
        hindi: "तुम्हारा नाम क्या हे",
        englishPronunciation: "tumhaara naam kya he"
    }
    }
  };


  // Function to build a component that will print the name of the language to theDOM.

const createNameComponent = () => {
  return `

  
  <section class="header">
  <h1 id="hindi-name-heading" class="header">${hindiData.name}</h1>
  </section>
  `
}

// Function to build a component that will print a heading called "Notable People" to the Dom, then create a list of notable people under that heading. The list will come from the array called notablePeople in the above object.

const notablePeopleComponent = () => {

  // create a variable that you can use to "add excitement", or in other words, add each item that the loop produces to the one before it.

  let buildMeUp = ""

  // create a loop that runs through the notablePeople array 

  for (let i = 0; i < hindiData.notablePeople.length; i++){
    
    // and then make buildMeUp equal each item the loop produces added to the one before it and placed into an html string that will eventually print to the DOM when the function is called in the event listener.

     buildMeUp = buildMeUp + " " +  `
     
     
       <li>${hindiData.notablePeople[i]}</li>
     
   
     `
     
}

// below is where you will actually return the information built in the loop, but before that, you will place the html string created to make the heading for this section, called "Notable People"

return `<div class="notable-people-hindi"><h2>Notable People</h2><ul>` + buildMeUp + `</ul></div>`
  
}


// // Function to build a component that will print a heading called "Fun Facts" to the Dom, then create a list of fun facts under that heading. The list will come from the array called funFacts in the above object.

const createFunFactComponent = () => {
  return `
  <div class="fun-fact-hindi">
  <h2 id="hindi-fun-heading">Fun Facts</h2>
  <h4 id="hindi-fun-sub-heading">Related Languages</h4>
  <li>${hindiData.funFacts.relatedLanguages}</li>
  <h4 id="hindi-fun-sub-heading">Letter In Alphabet</h4>
  <li>${hindiData.funFacts.lettersInAlphabet}</li>
  <h4 id="hindi-fun-sub-heading">Number of Speakers</h4>
  <li>${hindiData.funFacts.numberOfSpeakers}</li>
  </div>
  `
  
}

// write a function to be called in the event listener that will show countries where the language is spoken. Use the "notable people" code as starter code because it is the exact same premise.

const countriesSpokenComponent = () => {

  let buildMeUp = ""

  for (let i = 0; i < hindiData.countriesSpoken.length; i++){

     buildMeUp = buildMeUp + " " +  `
     
    
       <li>${hindiData.countriesSpoken[i]}</li>
    
   
     `
     
}

return `<div class="countries-hindi"><h2 id="hindi-countries-heading">Countries Spoken</h2><ul>` + buildMeUp + `</ul></div>`
  
}


// Create a function that will print the html inside the function to the DOM when you call the function in the main event listener at the very bottom.


const createTranslatorComponent = () => {

  return `
 
  <section class="sec-form-hindi">
  <fieldset>
    <h3 id="translator-label" for="translator">Translator App</h3>
    <input type="text" id="translator" class="translate-form-input" placeholder="Input Text Here" />
    <button id="hindi-translate-entry">Translate!</button>
  </fieldset>
  <p id="answer"></p>
  </section>
  `

  }


  // Create a function that translates the word typed into the "input" element into the hindi word.

  const answerToTranslation = () => {

    const inputValue = document.querySelector("#translator").value

    if ( inputValue === "hello"){
      return hindiData.dictionary.hello.hindi
    }
    else if (inputValue === "goodbye"){
      return hindiData.dictionary.goodbye.hindi
    }
    else if (inputValue === "thank you"){
      return hindiData.dictionary.thankYou.hindi
    }
    else if (inputValue === "good evening"){
      return hindiData.dictionary.goodEvening.hindi
    }
    else if (inputValue === "how are you"){
      return hindiData.dictionary.howAreYou.hindi
    }
    else if (inputValue === "what's your name"){
      return hindiData.dictionary.whatsYourName.hindi
    }
    else {
      return `This word does not exist in the translator app!`
    }
  }


// Create an event listener that makes it to when you click on the "Translate!" button, it adds the answer to the <p> element you referenced from the html string written above.

  document.querySelector("#language-container").addEventListener("click", function (){


    if(event.target.id === "hindi-translate-entry"){
      
      document.querySelector("#answer").innerHTML = answerToTranslation()

    }
  })



// create a variable that will represent the section in the html file with an id of "#hindi", which is the button that you will eventually push that will make all this code take place.
  const hindiNavButton = document.querySelector("#hindi");

  // create a variable that will represent the location where we want all of the information in our code to print to the DOM.
  const container = document.querySelector("#language-container");


  // add an event listener to the hindiNavButton that calls each function above when the button is clicked. Each function above creates information about each property in the above object named "hindiData" to be printed to the DOM.
  hindiNavButton.addEventListener("click", function(){

    container.innerHTML = createNameComponent();

    container.innerHTML += notablePeopleComponent();

    container.innerHTML += createFunFactComponent();

    container.innerHTML += countriesSpokenComponent();

    container.innerHTML += createTranslatorComponent();

  }
  )