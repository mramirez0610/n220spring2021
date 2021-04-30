var changeColor = document.getElementById("squareChange");
changeColor.addEventListener("click", colorSwap);

for(i = 0; i < 3; i++)
{
    changeColor.style.width = "200px";
    changeColor.style.height = "200px";
    changeColor.style.margin = "5px";
    changeColor.style.backgroundColor = "#200";
    changeColor.style.float = "left";
    

}

function colorSwap(event)
{
    let newColor = Number(event.target.getAttribute("data-color"));
    event.target.style.backgroundColor = newColor;
}