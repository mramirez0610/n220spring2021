function setup() {
    var eyeColor = "#000000"
    var catGrey = "#B0B0AF"
    var earPink = "#FAC8F0"
    var legColor = "#F2D0D0"
    var bottomShoe = "#FCF5F5"
    var topShoe = "#FF3636"

    createCanvas(600, 600)

    fill(legColor)
    rect(215, 350, 35, 150)
    rect(350, 350, 35, 150)
    
    fill(bottomShoe)
    rect(215, 510, 47, 10)
    rect(350, 510, 48, 10)

    fill(topShoe)
    //please dont get mad i tried my absolute hardest to make a half circle but i couldn't. //
    //i borrowed this code from the p5 references!! //
    arc(239, 510, 50, 50, -PI, 0, CHORD)
    arc(375, 510, 50, 50, -PI, 0, CHORD)
        
    fill("none")
    stroke("black")
    strokeWeight(2)
    beginShape()
    curveVertex(200, 550)
    curveVertex(130, 300)
    curveVertex(90, 200)
    curveVertex(95, 1910)
    endShape()

    fill(catGrey)
    ellipse(300, 300, 350, 150)

    stroke(catGrey)
    strokeWeight(5)
    fill(earPink)
    triangle(390, 190, 400, 95, 420, 145)
    triangle(510, 190, 505, 95, 487, 145)   
    
    stroke("black")
    strokeWeight(2)
    fill(catGrey)
    circle(450, 200, 65)

    arc(430, 210, 30, 30, 0.5, PI / 1.1);
    arc(458, 211, 30, 30, 7, PI / 1.1);

    fill(eyeColor)
    circle(425, 175, 5)
    circle(470, 175, 5)
    
    fill(earPink)
    triangle(440, 200, 445, 195, 450, 200)

}