//Arrays with all variables in them

const ArrayWithVariablesForHochregalLager = [
    "Lichtschranke Innen",
    "Referenztaster vertikal",
    "Referenztaster Ausleger vorne",
    "B-Motor Foerderband vorwaerts", //Wo ist rückwerts?
    "H-horizontal",
    "H-vertikal"
]

const ArrayWithVariablesForBearbeitungsstationMitBrennofen = [
    "B-Referenzschalter Drehkranz (Pos. Sauger)",
    "B-Referenzschalter Drehkranz (Pos. Foerderband)",
    "B-Referenzschalter Drehkranz (Pos. Saege)",
    "B-Referenzschalter Sauger (Pos. Drehkranz)",
    "B-Lichtschranke Ende Foerderband",
    "B-Referenzschalter Ofenschieber Innen",
    "B-Referenzschalter Ofenschieber Aussen",
    "B-Referenzschalter Sauger (Pos. Brennofen)",
    "B-Lichtschranke Brennofen",
    "B-Motor Drehkranz im Uhrzeigersinn",
    "B-Motor Drehkranz gegen Uhrzeigersinn",
    "B-Motor Foerderband vorwaerts",
    "B-Motor Saege",
    "B-Motor Ofenschieber Einfahren",
    "B-Motor Ofenschieber Ausfahren",
    "B-Motor Sauger zum Ofen",
    "B-Motor Sauger zum Drehkranz",
    "B-Leuchte Ofen"
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
            //testSvg(data);
        })

}
/*Idee:

in updatesvgwithdata direkt alle infos mitgeben und die grafik immer neu gerneriern
*/
async function updateSvgWithData(data) {
    for (element in data) {
        //Check time here
        await sleep(1000)
        if (data[element]) {
            if (element != 0) {
                if (data[element]["werte"] != data[element - 1]["werte"]) {
                    var diffBetweenObjects = compareJSONObject(data[element]["werte"], data[element - 1]["werte"])
                    if (diffBetweenObjects.length != 0) {
                        updateStationen(data[element]["werte"], diffBetweenObjects);
                        //updateHochregalLager(diffBetweenObjects);
                    }
                }
            } else {
                createSvgOrig(data[element]["werte"]);
            }
        } else {
            console.log("Element is empty!")
        }
    }
}

function updateStationen(dataArray, diffBetweenObjects) {
    updateHochregalLager(dataArray, diffBetweenObjects);
    updateBearbeitungsstationMitBrennofen(dataArray, diffBetweenObjects);
}

function createSvgOrig(dataArrayOrig, dataArray, elementID) {
    d3.xml("./media/img/Hochregallager.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#svgcontainer")
            // if (document.getElementById("div"))
            if (document.getElementById('svgcontainer').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")

            if (elementID === "tableForHochregalLager") {
                for (element in dataArray) {
                    for (variable in ArrayWithVariablesForHochregalLager)
                        if ((dataArray[element][0] == ArrayWithVariablesForHochregalLager[5]) || 1) { //H-vertikal & Horizontal
                            //TODO: Map the values to the max size of the svg
                            svg.selectAll("rect#hverti").remove();
                            svg.append("rect")
                                .attr("id", "hverti")
                                .attr("x", dataArray[element][1])
                                .attr("y", 50)
                                .attr("width", 100)
                                .attr("height", 100)
                                .attr('stroke', 'red')
                                .attr("fill", "#ddd")
                        }

                    // if (dataArray[element][0] == ArrayWithVariablesForHochregalLager[5]) { //H-vertikal & Horizontal
                    //     //TODO: Map the values to the max size of the svg
                    //     svg.selectAll("rect#hverti").remove();
                    //     svg.append("rect")
                    //         .attr("id", "hverti")
                    //         .attr("x", dataArray[element][1])
                    //         .attr("y", 50)
                    //         .attr("width", 100)
                    //         .attr("height", 100)
                    //         .attr('stroke', 'red')
                    //         .attr("fill", "#ddd")
                    // } else if (dataArray[element][0] == ArrayWithVariablesForHochregalLager[4]) { //H-horizontal
                    //     svg.selectAll("rect#hhori").remove();
                    //     svg.append("rect")
                    //         .attr("id", "hhori")
                    //         .attr("x", 100)
                    //         .attr("y", 100)
                    //         .attr("width", 100)
                    //         .attr("height", 100)
                    //         .attr('stroke', 'black')
                    //         .attr("fill", "#ddd")
                    // } else if (dataArray[element][0] == ArrayWithVariablesForHochregalLager[3]){}
                    //Usw. vlt eine eigene funktion hierfür
                }

                svg.transition().duration(1000).delay(1000)
                    .selectAll(".pimmelfurz")
                    .attr("height", 100);
            }


        });
}

async function generateTable(dataArrayOrig, dataArray, elementID) {
    var tableBeginning = "<table>\n<tr>\n<th>Name</th>\n<th>Value</th>\n</tr>\n";
    var tableContent = "";
    var tableElementInHTML = document.getElementById(elementID)
    for (element in dataArray) {
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

function updateHochregalLager(dataArray, diffBetweenObjects) {
    //Alle daten übergeben und nur die neuen highlighten?
    //ODer: Geb zurück ob etwas verändert wird. dann übergebe die gesamte datei
    var variablesThatAreChanged = getVariablesThatAreUsedForThisStep(diffBetweenObjects, ArrayWithVariablesForHochregalLager);
    if (variablesThatAreChanged.length != 0) {
        generateTable(dataArray, variablesThatAreChanged, "tableForHochregalLager");
        createSvgOrig(dataArray, variablesThatAreChanged, "tableForHochregalLager")
    }
}

function updateBearbeitungsstationMitBrennofen(dataArray, diffBetweenObjects) {
    var variablesThatAreChanged = getVariablesThatAreUsedForThisStep(diffBetweenObjects, ArrayWithVariablesForBearbeitungsstationMitBrennofen);
    if (variablesThatAreChanged.length != 0) {
        generateTable(dataArray, variablesThatAreChanged, "tableForBearbeitungstation");
        //update(variablesThatAreChanged);
    }
}

//
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

/*
function createSvgOrig2() {
    //Var for svg graphic
    console.log("!!!");
    var width = 600;
    var height = 500;
    const svg = d3.select("#svgcontainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    //Create and append rectangle element
    svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height)
        .attr('stroke', 'black')
        .attr("fill", "#ddd")
    svg.append("text")
        .attr('x', 5)
        .attr('y', 5)
        .attr('stroke', 'green')
        .style("font-size", 20)
        .text("Allgemeines Feld")
    svg.append("rect")
        .attr("x", 395)
        .attr("y", 5)
        .attr("width", 200)
        .attr("height", 490)
        .attr("fill", "#efefef")
    svg.append("text")
        .attr('x', 400)
        .attr('y', 10)
        .attr('stroke', 'green')
        .style("font-size", 10)
        .text("Bereich für Regal und Lager")
    svg.append("rect")
        .attr("x", 405)
        .attr("y", 100)
        .attr("width", 80)
        .attr("height", 290)
        .attr("fill", "#aaa")
    svg.append("text")
        .attr('x', 410)
        .attr('y', 105)
        .attr('stroke', 'green')
        .style("font-size", 20)
        .text("Hochregallager")
    svg.append("circle")
        .attr('cx', 550)
        .attr('cy', 250)
        .attr('r', 25)
        .attr('stroke', 'black')
        .attr('fill', 'blue')
    svg.append("text")
        .attr('x', 555)
        .attr('y', 35)
        .attr('stroke', 'green')
        .style("font-size", 8)
        .text("Der greifer halt")
}*/