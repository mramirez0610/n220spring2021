var inputTxt = document.getElementById("inputTxt");
var readResult = document.getElementById("readResult");

var badWords = ["clear", "water", "tires"];

function readInput()
{
    let sentence = inputTxt.value;
    let splitSentence = sentence.split(" ");

    console.log(splitSentence)
    
    //loops through the input sentence, then loops through bad words
    for(i = 0; i < splitSentence.length; i++) {
        for(j = 0; j < badWords.length; j++) {
            if (splitSentence[i] == badWords[j])
            {
                //if bad words are found, this happens     
                readResult.innerHTML = "hey!! i can't believe you would say that!!";
                let tallyResult = document.createElement("div");
                readResult.appendChild(tallyResult);
                tallyResult.innerHTML = "bad words detected: " + j;
                //really couldn't find a way to make the program read out the bad words that were said.
            }
        }   
    }

    inputTxt.value = ""
    console.log(splitSentence[i] == badWords[j])
}