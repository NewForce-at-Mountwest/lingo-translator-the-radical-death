
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
  <h4 id="hindi-name">${hindiData.name}</h4>
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
     
     <ul id="hindi-notable-people">
       <li>${hindiData.notablePeople[i]}</li>
     </ul>
   
     `
     
}

// below is where you will actually return the information built in the loop, but before that, you will place the html string created to make the heading for this section, called "Notable People"

return `<h4 id="notable-header">Notable People</h4>` + buildMeUp
  
}










// create a variable that will represent the section in the html file with an id of "#hindi", which is the button that you will eventually push that will make all this code take place.
  const hindiNavButton = document.querySelector("#hindi");

  // create a variable that will represent the location where we want all of the information in our code to print to the DOM.
  const container = document.querySelector("#language-container");


  // add an event listener to the hindiNavButton that calls each function above when the button is clicked. Each function above creates information about each property in the above object named "hindiData" to be printed to the DOM.
  hindiNavButton.addEventListener("click", function(){

    container.innerHTML = createNameComponent();

    container.innerHTML += notablePeopleComponent();

  }
  )