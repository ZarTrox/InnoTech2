function getData() {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            updateSvgWithData(data);
        })

}

function updateSvgWithData(data) {
    for (element in data) {
        if (data[element]) {
            if (element != 0) {
                if (data[element]["werte"] != data[element - 1]["werte"]) {
                    var diffBetweenObjects = compareJSONObject(data[element]["werte"], data[element - 1]["werte"])
                    if (diffBetweenObjects.length != 0) {
                        /* Idee:
                            if(x. includes(y) || x.includes(z) || ...){
                                updateHochregalLager();
                            }

                        */
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

function compareJSONObject(currentObject, previousObject) {
    var arrayWithResults = [];
    for (x in currentObject) {
        if (currentObject[x] != previousObject[x]) {
            arrayWithResults.push(x + "; " + currentObject[x])
        }
    }
    console.log(arrayWithResults)
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

function updateHochregalLager(arrayWithChangedElements) {
    //TODO
   createSvg();//Was soll dann passieren
}