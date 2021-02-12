function setup() 
{
    createCanvas(400, 400);
    background(150)
}

function draw()
{
    //does the noFill count as a line in the loop?//
    //or should i leave it out of the loop?//
    for (i = 1; i<40; i++)
    {
        noFill()
        circle(200, 200, i*5)
    }
}
