angle = .2
purble = "#48029e"
lPurble = "#6e41a6"
ltPurble = "#866aa8"
lttPurble = "#9784ad"
ltttPurble = "#a59bb0"
ltterPurble = "#aba7b0"
lttererPurble = "#b5b5b5"

function setup()
{
    createCanvas(600, 600)
    background(150)
}

//it doesnt look pretty, but this works//
function draw()
{   
    //isolating these shapes//
    push()
        translate(300, 300)
        rotate(angle)
            for (i = 0; i<20; i++)
            {
                fill(10 * i)
                //circles that appear later//
                //there very well could be a loop that makes 
                //this easier but im not really sure
                circle(15 * i, 25 * i, 15)
                    if (angle >= 1450)
                    {
                        fill(lttererPurble)
                        circle(125, 0, 14)
                    }
                    if (angle >= 1300)
                    {
                        fill(ltterPurble)
                        circle(150, 0, 15)
                    }
                    if (angle >= 1150)
                    {
                        fill(ltttPurble)
                        circle(175, 0, 16)
                    }
                    if (angle >= 1000)
                    {
                        fill(lttPurble)
                        circle(200, 0, 17)
                    }
                    if (angle >= 850)
                    {
                        fill(lttPurble)
                        circle(225, 0, 18)
                    }
                    if (angle >= 700)
                    {
                        fill(ltPurble)
                        circle(250, 0, 19)
                    }
                    if (angle >= 550)
                    {
                        fill(lPurble)
                        circle(275, 0, 20)
                    }
                    if (angle >= 400)
                    {
                        fill(purble)
                        circle(300, 0, 21)
                    }
            }
        angle++
    pop()
}
