//Arrays with all variables in them

const ArrayWithVariablesForHochregalLager = [
    "Lichtschranke Innen",
    "Lichtschranke aussen",
    "Referenztaster vertikal",
    "Referenztaster horizontal",
    "Referenztaster Ausleger vorne",
    "Referenztaster Ausleger hinten",
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
    "V-Referenzschalter vertikal",
    "V-Referenzschalter horizontal",
    "V-Referenzschalter drehen",
    "V-vertikal",
    "V-drehen",
    "V-horizontal"
]

/*
Farben
*/
const farbeSchalterTransformation = "#fec3ff";

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
            //Todo fall für 0 einfuegen
            if (element != 0) {
                updateStationen(data[element]["werte"], data[element]["datum"], data[element - 1]["werte"]);
            }

        } else {
            console.log("Element is empty!")
        }
    }
}

function createSvgUebersicht(dataArray, Zeit, dataArrayVorher) {
    /*
        Selber erstellen oder bild hernehmen?
    */
}

function createSvgHochregallager(dataArray, Zeit, dataArrayVorher) {
    d3.xml("./media/img/HochregallagerNew8.svg",
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
                //Direkt am anfang mappen und den maximalen wert anchfragen
                var x = d3.scaleLinear()
                    .domain([0, 2370])
                    .range([0, document.getElementById('Hochregallager').offsetWidth - 150])
                var y = d3.scaleLinear()
                    .domain([0, 1108])
                    .range([100, document.getElementById('Hochregallager').offsetHeight])
                hochregallager_update_svg(dataArray, Zeit, dataArrayVorher, x, y);

                //Und evtl mit lichtschranke aussen verbinden?
                //Blinkt sehr selten? Gehört das so?
                // if (dataArray[ArrayWithVariablesForHochregalLager[0]] == " false") {
                // svg.select("#LichtschrankeInnen")
                //     .transition()
                //     .attr("class", "lichtschranke")

                //     .transition()
                //     .duration(1000)
                //     .attr("class", "lichtschrankeTransform")
                // // }

                // // if (dataArray[ArrayWithVariablesForHochregalLager[0]] == " true") {
                // svg.select("#B-MotorFoerderbandvorwaerts")
                //     .transition()
                //     .attr("class", "motor")

                //     .transition()
                //     .duration(1000)
                //     .attr("class", "motorTransform")
                // // }
                // if ((dataArray[ArrayWithVariablesForHochregalLager[5]] != 1) || (dataArray[ArrayWithVariablesForHochregalLager[4]] != 2)) {
                //     svg.selectAll(".turm")
                //         .transition()
                //         .duration(1000)
                //         .attr("x", dataArray[ArrayWithVariablesForHochregalLager[7]] / 2)
                //         .attr("y", dataArray[ArrayWithVariablesForHochregalLager[8]] / 2)
                // }
                /*svg.selectAll("rect.Hochregallager").remove();
                svg.selectAll("circle.Hochregallager").remove();
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
                }*/
            }

        });
}

function hochregallager_update_svg(dataArray, Zeit, dataArrayVorher, x, y) {
    //Hhori & HVerti
    var scaledHHorizontal = x(dataArray[ArrayWithVariablesForHochregalLager[7]]);
    var scaledHHorizontalVorher = x(dataArrayVorher[ArrayWithVariablesForHochregalLager[7]]);
    var scaledHvert = y(dataArray[ArrayWithVariablesForHochregalLager[8]]);
    var scaledHvertVorher = y(dataArrayVorher[ArrayWithVariablesForHochregalLager[8]]);

    var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;
    var diffHvert = scaledHvertVorher - scaledHvert;
    svg.selectAll(".turmBewegen").each(function (d, i) {
        var oldvalueX = d3.select(this).attr("x");
        var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("x", newvalueX)
    })
    svg.selectAll(".greiferBewegen").each(function (d, i) {
        var oldvalueY = d3.select(this).attr("y");
        var newvalueY = parseFloat(oldvalueY) + diffHvert;
        var oldvalueX = d3.select(this).attr("x");
        var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("y", newvalueY)
            .attr("x", newvalueX)
    })
    //Referenztastervertikal
    if (dataArray[ArrayWithVariablesForHochregalLager[2]] == " false") {
        /* Split and join        */
        // var oldClasses = d3.select("#Referenztastervertikal").attr("class");
        // console.log(oldClasses);
        // var newClasses = "";
        // if (!oldClasses.includes("Transform")) {
        //     newClasses = oldClasses.replace("taster", "tasterTransform")
        // } else if (oldClasses.includes("Transform")) {

        // }
        // svg.select("#Referenztastervertikal")
        //     .transition()
        //     .duration(1000)
        //     .attr("class", "tasterTransform turmBewegen")
        //     .transition()
        //     .attr("class", "taster turmBewegen")
    }
}

function hochregallager_Referenztaster_Vertikal(dataArray, Zeit) {
    //"Referenztaster vertikal"
    //Wert aus array verwenden und leerzeichen entfernen

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

// function createSvgVakuumSauggreif(dataArray, Zeit) {
//     d3.xml("./media/img/vakuum_skaliert.svg",
//         function (error, documentFragment) {
//             if (error) { console.log(error); return; }
//             var svgNode = documentFragment
//                 .getElementsByTagName("svg")[0];
//             var main_chart_svg = d3.select("#Vakuum")
//             if (document.getElementById('Vakuum').getElementsByTagName('svg').length == 0) {
//                 main_chart_svg.node().appendChild(svgNode);
//             }
//             svg = main_chart_svg.select("svg")
//             if (dataArray != "") {
//                 svg.selectAll("rect.Vakuum").remove();
//                 svg.append("rect") //"V-Referenzschalter horizontal"
//                     .attr("class", "Hochregallager")
//                     .attr("x", 350)
//                     .attr("y", 500)
//                     .attr("width", 50)
//                     .attr("height", 50)
//                     .attr('stroke', 'red')
//                     .attr("fill", "#ddd")
//             }
//         });
// }
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

function updateStationen(dataArray, Zeit, dataArrayVorher) {
    createSvgUebersicht(dataArray, Zeit, dataArrayVorher);
    createSvgHochregallager(dataArray, Zeit, dataArrayVorher);
    //createSvgVakuumSauggreif(dataArray, Zeit);
    //createSvgWipphebel(dataArray, Zeit)
    //createSvgBrennofen(dataArray, Zeit);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}