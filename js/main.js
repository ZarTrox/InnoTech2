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
            createSvgOrig(data[element]["werte"], data[element]["datum"]);
        } else {
            console.log("Element is empty!")
        }
    }
}

function createSvgOrig(dataArray, Zeit) {
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
            if (dataArray != "") {
                updateStationen(svg, dataArray);
            }

        });
}

function updateHochregallager(svg, dataArray) {
    svg.selectAll("rect.Hochregallager").remove();
    //Objekten wie dem turm oder dem motor eine id zuweise und diese dann bewegen
    //hannah im Meeting zum motorhäuschen fragen
    svg.append("rect")//H-vert&hori
        .attr("class", "Hochregallager")
        .attr("x", dataArray[ArrayWithVariablesForHochregalLager[5]])
        .attr("y", dataArray[ArrayWithVariablesForHochregalLager[4]])
        .attr("width", 100)
        .attr("height", 100)
        .attr('stroke', 'red')
        .attr("fill", "#ddd")
    svg.append("circle")//Lichtschranke Innen
        .attr("class", "Hochregallager")
        .attr("cx", 290)
        .attr("cy", 420)
        .attr("r", 15)
        .attr('stroke', 'black')
        .attr("fill", "#000")
    svg.append("circle")//Referenztaster vertikal
        .attr("class", "Hochregallager")
        .attr("cx", 240)
        .attr("cy", 130)
        .attr("r", 15)
        .attr('stroke', 'black')
        .attr("fill", "#000")
    svg.append("circle") //Referenztaster Ausleger vorne
        .attr("class", "Hochregallager")
        .attr("cx", 200)
        .attr("cy", 420)
        .attr("r", 15)
        .attr('stroke', 'black')
        .attr("fill", "#000")
    svg.append("rect") //Motorförderband
        .attr("class", "Hochregallager")
        .attr("x", 240)
        .attr("y", 500)
        .attr("width", 50)
        .attr("height", 50)
        .attr('stroke', 'red')
        .attr("fill", "#ddd")
}

function updateBearbeitungsstationMitBrennofen(svg, dataArray) {
    svg.selectAll("rect.Brennofen").remove();
    var colorForLichtschalterA = "back";
    if (!dataArray[ArrayWithVariablesForBearbeitungsstationMitBrennofen[4]]) {
        colorForLichtschalterA = "green";
        console.log("FARBE HAT SICH GEÄNDET DAS IST GUT")
    }
    svg.append("rect")
        .attr("class", "Hochregallager")
        .attr("x", 500)
        .attr("y", 500)
        .attr("width", 100)
        .attr("height", 100)
        .attr('stroke', colorForLichtschalterA)
        .attr("fill", colorForLichtschalterA)
}

function updateStationen(svg, dataArray) {
    updateHochregallager(svg, dataArray);
    updateBearbeitungsstationMitBrennofen(svg, dataArray);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}