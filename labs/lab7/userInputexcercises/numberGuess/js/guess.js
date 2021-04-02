let guessTxt = document.getElementById("guessTxt");
let dvOutput = document.getElementById("dvOutput");

function guesser()
{
    let randNum = Math.floor(Math.random() * 20);
    console.log(randNum);
    if (guessTxt.value == randNum)
    {
        dvOutput.innerHTML = "wait no let's try again"
    } 
    if (guessTxt.value > randNum) 
    {
        dvOutput.innerHTML = "haha too high, i win"
    }
    if (guessTxt.value < randNum)
    {
        dvOutput.innerHTML = "haha too low, i win"
    }

    guessTxt.value = "";
}