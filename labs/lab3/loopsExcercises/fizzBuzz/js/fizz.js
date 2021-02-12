var nicePurple = "#98258A"
var forestGreen = "#45B72D"
var squareBlue = "#0E1D63"

function setup()
{
    createCanvas(625, 625);
    background(60);
}

function draw() 
{
    //background design ..... which also happens to be code from my other assignment//
    for ( var j = 0; j<50; j++)
    {
        noFill()
        stroke(500 - j*14)

        circle(312.5, 312.5, j * 10)
    }

    //twenty five circles//
    for (var i = 0; i<25; i++)
    {   
        //filling 3 & 5 iterand circles//
        fill(0)
        if (i%3 == 0)
        {
            fill(nicePurple)
        }
        
        if (i%5 == 0)
        {
            fill(forestGreen)
        }

        stroke(300)
        circle(72 + i*20, 312.5, 10)

        //square time babey//
        if (i == 15)
        {
            fill(squareBlue)
            rect(61 + i*20, 301.5, 20, 20)
        }
    }    
}