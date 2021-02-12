xPos = 0;
yPos = 300;
ySpeed = 0;
xSpeed = 0;

xPos = xPos + xSpeed;
yPos = yPos + ySpeed;

function setup()
{
    createCanvas(800, 600);
    for ( var i = 0; i < 5; i++)
    {
        xSpeed = i;
    }
}

function draw()
{
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    background(220);
    fill(59, 97, 48)
    circle(xPos, yPos, 50);
    
    if (xPos > 855){
        xPos = -55
    }
}


