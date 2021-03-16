xPos = 50

function setup()
{
    createCanvas(600, 600)
    background(150)
}

function draw()
{
    translate(300, 300)
    superCool(50, 20)
    superCool(100, 40)
    superCool(250, 15)
}

function superCool(yPos, cSize)
{
    for (i = 0; i < 5; i++)
    {
        circle(xPos * i - 600, yPos * i - 250, cSize);
        xPos++
        if( xPos > 900 )
        {
            xPos = -300
        }
        fill( Math.random() * 255, Math.random() * 255, Math.random() * 255);
    }
}
