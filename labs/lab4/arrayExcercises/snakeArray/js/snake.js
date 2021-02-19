var snakeXpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var snakeYpos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function setup()
{
    createCanvas(800, 800)
}

function draw()
{
    background(150);
    snakeXpos.push(mouseX);
    snakeYpos.push(mouseY);
    snakeXpos.shift();
    snakeYpos.shift();

    for (i = 0; i < snakeXpos.length; i++)
    {
        circle(snakeXpos[i], snakeYpos[i], 40)
    }
}