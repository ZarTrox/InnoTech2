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
            updateStationen(data[element]["werte"], data[element]["datum"]);
        } else {
            console.log("Element is empty!")
        }
    }
}

function createSvgUebersicht(dataArray, Zeit) {
    /*
        Selber erstellen oder bild hernehmen?
    */
}

function createSvgHochregallager(dataArray, Zeit) {
    d3.xml("./media/img/Hochregallager.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#Hochregallager")
            if (document.getElementById('Hochregallager').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
                var colorReferenztasterVertikal = "red";
                if (!dataArray[ArrayWithVariablesForHochregalLager[1]] == " true"){
                    colorReferenztasterVertikal = "green";
                }
                var colorLichtschrankeInnen = "red";
                if (!dataArray[ArrayWithVariablesForHochregalLager[0]] == " true"){
                    colorLichtschrankeInnen = "green";
                }
                svg.selectAll("rect.Hochregallager").remove();
                //Objekten wie dem turm oder dem motor eine id zuweise und diese dann bewegen
                //hannah im Meeting zum motorhäuschen fragen
                svg.append("rect")//H-vert&hori
                    .attr("class", "Hochregallager")
                    .attr("id", "ausrichtung")
                    .attr("x", dataArray[ArrayWithVariablesForHochregalLager[5]])
                    .attr("y", dataArray[ArrayWithVariablesForHochregalLager[4]])
                    .attr("width", 100)
                    .attr("height", 100)
                    .attr('stroke', 'red')
                    .attr("fill", "#ddd")
                //Vergleiche ob sich etwas zum vorherigen verändert hat (Fkt aus alter Datei nehmen)
                //Bzw den vergleich nicht hier sondern in einer funktion und nunr wahr oder falsch uebermitteln
                if ((dataArray[ArrayWithVariablesForHochregalLager[5]] != 1) || (dataArray[ArrayWithVariablesForHochregalLager[4]] != 2)){
                    svg.select("#ausrichtung")
                    .transition()
                    .duration(500)
                    .attr("fill", "red")
                }
                
                svg.append("circle")//Lichtschranke Innen
                    .attr("class", "Hochregallager")
                    .attr("cx", 290)
                    .attr("cy", 420)
                    .attr("r", 15)
                    .attr('stroke', colorLichtschrankeInnen)
                    .attr("fill", colorLichtschrankeInnen)
                svg.append("circle")//Referenztaster vertikal
                    .attr("class", "Hochregallager")
                    .attr("cx", 240)
                    .attr("cy", 130)
                    .attr("r", 15)
                    .attr('stroke', colorReferenztasterVertikal)
                    .attr("fill", colorReferenztasterVertikal)
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

        });
}

//Fehler: wenn wipphebel dann gleiche farbklassen verwendet und somit hochregallager andere farbe. aber egal da wir andere seiten verwenden fpr einzelansichten
function createSvgWipphebel(dataArray, Zeit) {
    d3.xml("./media/img/Wipphebel.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#Wipphebel")
             if (document.getElementById('Wipphebel').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
                svg.selectAll("rect.Wipphebel").remove();
            }
        });
}

// function createSvgBrennofen(dataArray, Zeit) {
//     d3.xml("./media/img/Wipphebel.svg",
//         function (error, documentFragment) {
//             if (error) { console.log(error); return; }

//             var svgNode = documentFragment
//                 .getElementsByTagName("svg")[0];
//             var main_chart_svg = d3.select("#Wipphebel")
//             // if (document.getElementById("div"))
//             if (document.getElementById('Wipphebel').getElementsByTagName('svg').length == 0) {
//                 main_chart_svg.node().appendChild(svgNode);
//             }
//             svg = main_chart_svg.select("svg")
//             if (dataArray != "") {
//                 svg.selectAll("rect.Wipphebel").remove();
//             }
//         });
// }

function updateStationen(dataArray, Zeit) {
    createSvgUebersicht(dataArray, Zeit);
    createSvgHochregallager(dataArray, Zeit);
    //createSvgWipphebel(dataArray, Zeit)
    //createSvgBrennofen(dataArray, Zeit);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}