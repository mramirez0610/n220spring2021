function setup()
{
    createCanvas(800, 300);
}

function draw()
{
    background(150)
    mouseChase("#000000", "#ff2929", pmouseX, pmouseY);
}

/* not sure if its following it at 3 pixels per frame,
but i tried my hardest */

function mouseChase(red, black, xPos, yPos)
{
    circle(xPos - 3, yPos - 3, 20);
    if ( mouseX - xPos == 7){
        fill(black)
    } else {
        fill(red)
    }
}
