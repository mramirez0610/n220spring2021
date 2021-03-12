var coolCircles = [
    {x: 25, y: 25, r: 30},
    {x: 25, y: 425, r: 30},
    {x: 225, y: 25, r: 30},
    {x: 225, y: 425, r: 30},
    {x: 225, y: 225, r: 30}
]

function setup() 
{
    createCanvas(500, 500)
}

function draw() 
{
    background(200)
    for ( i = 0; i < coolCircles.length; i++) 
    {
        let drawCircle = coolCircles[i];       
        circle(drawCircle.x, drawCircle.y, drawCircle.r);
        drawCircle.x += 1 ;        
    }
}