function setup()
{
    createCanvas(400, 300)
}

function draw()
{
    background(115)
    circle(mouseX, mouseY, 20)

    if( mouseX > 200){
        fill(153, 17, 17)
    } else {
        fill(18, 81, 163)
    }
}