let mainBody = document.getElementById("mainBody");

let objects = [
    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
];

for(i = 0; i < objects.length; i++){
    let rectObj = document.createElement("div");
    rectObj.style.height = objects[i].height;
    rectObj.style.width = objects[i].width;
    rectObj.style.backgroundColor = objects[i].color;

    mainBody.appendChild(rectObj)
}