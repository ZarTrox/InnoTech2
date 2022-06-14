const ArrayWithVariablesForHochregalLager = [
    "Lichtschranke Innen",
    "Referenztaster vertikal",
    "Referenztaster Ausleger vorne",
    "B-Motor Foerderband vorwaerts", //Wo ist rückwerts?
    "H-horizontal",
    "H-vertikal"
]

const ArrayWithVariablesForBearbeitungsstationMitBrennofen = [

]

const ArrayWithVariablesForSortierstreckeMitFarberkennung = [

]

const ArrayWithVariablesForVakuumSauggreifer = [

]

function getData() {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            updateSvgWithData(data);
        })

}

async function updateSvgWithData(data) {
    for (element in data) {
        //Check time here
        await sleep(1000)
        if (data[element]) {
            if (element != 0) {
                if (data[element]["werte"] != data[element - 1]["werte"]) {
                    var diffBetweenObjects = compareJSONObject(data[element]["werte"], data[element - 1]["werte"])
                    if (diffBetweenObjects.length != 0) {
                        updateHochregalLager(diffBetweenObjects);
                    }
                }
            } else {
                createSvg(data[element]["werte"]);
            }
        } else {
            console.log("Element is empty!")
        }
    }
}


async function generateTable(dataArray) {
    var tableBeginning = "<table>\n<tr>\n<th>Name</th>\n<th>Value</th>\n</tr>\n";
    var tableContent = "";
    var tableElementInHTML = document.getElementById("tableForHochregalLager")
    for (element in dataArray){
        var variableName = dataArray[element][0];
        var variableValue = dataArray[element][1];
        tableContent += "<tr>\n<td>" + variableName + "</td>\n<td>" + variableValue + "</td></tr>\n"
    }
    var tableString = tableBeginning + tableContent + "</table>";
    tableElementInHTML.innerHTML = tableString;
}

function compareJSONObject(currentObject, previousObject) {
    var arrayWithResults = new Array();
    //Zeit oben hinzufügen?
    for (x in currentObject) {
        if (currentObject[x] != previousObject[x]) {
            arrayWithResults.push([x, currentObject[x]])
        }
    }
    return arrayWithResults;
}


//Übergebe ein Array. Je mehr daten desto mehr striche. Das Grundgerüst sollte immer gleich bleiben
function createSvg() {
    var width = 300;
    var height = 300;
    //Create SVG element
    var svg = d3.select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    //Create and append rectangle element
    svg.append("rect")
        .attr("x", 20)
        .attr("y", 20)
        .attr("width", 200)
        .attr("height", 100)
        .attr("fill", "grey");
    svg.append("line")
        .attr("x1", 100)
        .attr("y1", 100)
        .attr("x2", 200)
        .attr("y2", 200)
        .style("stroke", "rgb(0,0,0)")
        .style("stroke-width", 2);
}

function updateHochregalLager(diffBetweenObjects) {
    var variablesThatAreChanged = getVariablesThatAreUsedForThisStep(diffBetweenObjects, ArrayWithVariablesForHochregalLager);
    if (variablesThatAreChanged.length != 0) {
        generateTable(variablesThatAreChanged);
    }
}

function getVariablesThatAreUsedForThisStep(diffBetweenObjects, variableArray) {
    var variablesThatAreUsed = [];
    for (entry in diffBetweenObjects) {
        for (variable in variableArray) {
            if (diffBetweenObjects[entry].includes(variableArray[variable])) {
                variablesThatAreUsed.push(diffBetweenObjects[entry]);
            }
        }
    }
    return variablesThatAreUsed;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}