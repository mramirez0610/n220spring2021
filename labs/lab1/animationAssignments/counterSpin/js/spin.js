var angle = 1;

var backBlue = "#90A1E0"
var darkBlue = "#435CB6"
var greenGreeeen = "#06952C"
var darkerBlue = "#152D87"

function setup()
{
    createCanvas(800, 800)
}

function draw()
{
    background(backBlue)


    push();
    translate(400, 400);
    rotate(angle);
    fill(greenGreeeen)
    rect(1, 200, 100, 100);
    fill(darkBlue)
    circle(100, 100, 20)
    circle(50, 50, 15)
    noFill();
    line(50, 50, 100, 100)
    for(var i=0; i<9; i++) 
    {
        circle(30, 30, 50)
        rect(40, 40, 10, 10)
        circle(100, 100, 20)
    }    
    circle(10, 100, 20)
    rectMode(CORNERS);
    angle++;
    pop();

    for( let t = 1; t <= 900; t++ ) {
        console.log(t)
    }

    textSize(28)
    text('putting the counter above 900 makes it go really really slow', 20, 600)
    text('check console for the counter :]', 75, 700)
}

