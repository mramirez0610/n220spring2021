
var squareFill = ["#9078AD", "#6D4E90", "#4D2C73", "#331456", "#1D053A"]

function setup()
{
    createCanvas(800, 800)
}

function draw()
{
    background(20, 1);
    translate(400, 400);
    
    for (k = 0; k < 5; k++)
    {
        noFill();
        strokeWeight(4);
        stroke(20);
        rect(k * 100, k * 100, 400, 400);
        rect(k * -100, k * -100, 400, 400);
    }

    for (i = 0; i < squareFill.length; i++)
    {
        noStroke();
        fill(squareFill[i]);
        rect(i * -30, i * -30, 120, 120);
    }
}