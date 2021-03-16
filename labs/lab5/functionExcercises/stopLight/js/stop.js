function setup()
{
    createCanvas(400, 600)
    background(175)
    drawStop(200, 100, 100)
    
}

function drawStop(xPos, yPos, cSize) 
{   
    stopColors = ["#4fff6c", "#f6ff4f", "#ff4f4f"]
    for (i = 0; i < drawStop.length; i++)
    {
        fill(stopColors[i]);
        circle(xPos, yPos * i + 200, cSize);
    }
}