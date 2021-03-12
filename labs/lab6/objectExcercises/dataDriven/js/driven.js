var wowCool = [
    {x: 200, y: 200, r: 450},
    {x: 200, y: 200, r: 350},
    {x: 200, y: 200, r: 250},
    {x: 200, y: 200, r: 150},
    {x: 200, y: 200, r: 50},
]

function setup()
{
    createCanvas(400, 400)
}

function draw()
{   
    background(150)
    noStroke();
    for( i = 0; i < wowCool.length; i++)
    { 
        circle(wowCool[i].x, wowCool[i].y, wowCool[i].r)
        fill(5 * i, 40 * i, 10)
        
    }

   
}