var userTxt = document.getElementById("userTxt");
var scrambleResult = document.getElementById("scrambleResult");
var backgroundTheme = document.getElementById("mainBody");
var mainTheme = document.getElementById("shuffleMain");

function scrambleSentence()
{
    //what the user has typed in, turned into an array
    let userSent = userTxt.value;
    let splitSent = userSent.split(" ");
    console.log(splitSent);

    //scramble algorithm
    for ( i = 0; i < splitSent.length; i++) 
    {  
        scrambleResult.innerHTML = "";
        //creates an index number which decides which word to take out
        let randPos = Math.floor(Math.random() * splitSent.length);
        console.log(randPos);

        //placement loop
        for ( j = 0; j < splitSent.length; j++) 
        {
            let lastWord = splitSent.shift();

            //first value is where it'll go
            //splices the third value into the sentence
            splitSent.splice(randPos, 0, lastWord);
            console.log(splitSent);

            //joins arrays together to make sentences
            let finishScramb = splitSent.join(" ")
            scrambleResult.innerHTML += finishScramb + "<br>"
        }
        break; 
    }
}

//theme changer functions
function changeTheme0() 
{
    backgroundTheme.style.backgroundColor = "#277552";
    mainTheme.style.backgroundColor = "#76B096";
    mainTheme.style.border = "8px inset #0F5837";
}

function changeTheme1()
{
    backgroundTheme.style.backgroundColor = "#949494";
    mainTheme.style.backgroundColor = "#BFBFBF";
    mainTheme.style.border = "8px inset #666666";
}