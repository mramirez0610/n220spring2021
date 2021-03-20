function setup() 
{
    createCanvas(600, 400)
}

function draw() 
{
    background(175)
    /* calling the function */
    ballMouse(300, mouseY)
}

function ballMouse(xPos, yPos)
{
    fill (20)
    /* loops ten times for each ball. the i that's being added to yPos is multiplied by 30 to 
    evenly spread out each ball. the radius is set to 25, but is subracted by i * 2 in order
    to make them ascend by size */
    for (i = 0; i < 10; i++)
    {
        circle(xPos, yPos + i * 30, 25 - i * 2)
        fill(i * 35)
    }
    /* moves balls down towards the bottom of the canvas */
    if (mouseIsPressed){
        yPos = mouseY++
        console.log(yPos)
    }

    /* here lies my awful attempt at keeping the balls from crossing the bottom. how sad.
    if (yPos > 595){
        // yPos.push(595);
        // yPos = 
    }
    hunk of junk */
}