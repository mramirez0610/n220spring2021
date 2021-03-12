var angle = 1;

var coolCirc = 
{
    x : 40,
    y : 40,
    r : 70,
    main : function ()
    {
        stroke(0, 255, 42)
        circle(this.x, this.y, this.r)
    }
}

var coolRect = 
{
    x: 200,
    y: 200,
    w: 100,
    h: 200,
    main: function() 
    {   
        noStroke();
        translate(250, 350)
        rotate(angle)
        for( i = 0; i < 10; i++) 
        {
            fill( i * 10, i)
            rect(this.x, this.y, this.w, this.h)
        }
        angle++
    }
}

function setup() 
{
    createCanvas(500, 700)
    background(200)
}

function draw() 
{
    coolRect.main();
    coolCirc.main();
}