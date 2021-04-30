var numValues = document.getElementById("numTxt");
var calcResults = document.getElementById("calcResult");

function calcNum()
{
    var strings = numValues.value;
    let values = strings.split(",");
    let sum = 0;

    //calculating sum
    for(i = 0; i < values.length; i++)
    {
        sum += Number(values[i]);
    }
    //using sum for average
    let average = sum / values.length;

    calcResults.innerHTML = "sum: " + sum + " average: " + average ;

    numValues.value = "";
}