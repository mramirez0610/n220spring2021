var neoColor = ["#F288BA", "#FFE48F", "#4A2E28"]

function setup()
{
    createCanvas(600, 600)
}

function draw() {
    for (i = 0; i < neoColor.length; i++)
    {
        noStroke();
        fill(neoColor[i])
        rect(0, 200 * i, 600, 200)
    }
}
