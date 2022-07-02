/*  Aufgaben Celina:
- Richtige Skalieren umsetzen
- Über neue Idee die Zeit zutracken denken (Mit der Uhrzeit die mitgeliefert wird arbeiten?)



*/

//Arrays with all variables in them

const ArrayWithVariablesForHochregalLager = [
    "Lichtschranke Innen",
    "Lichtschranke aussen",
    "Referenztaster vertikal",
    "Referenztaster horizontal",
    "Referenztaster Ausleger vorne",
    "Referenztaster Ausleger hinten",
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
    "S-Lichtschranke Eingang",
    "S-Lichtschranke nach Farbsensor",
    "S-Lichtschranke weiss",
    "S-Lichtschranke rot",
    "S-Lichtschranke blau",
    "S-Motor Foerderband"
]

const ArrayWithVariablesForVakuumSauggreifer = [
    "V-Referenzschalter vertikal",
    "V-Referenzschalter horizontal",
    "V-Referenzschalter drehen",
    "V-vertikal",
    "V-drehen",
    "V-horizontal"
]

const ArrayWithVariablesForWippHebel = [
    "Umsetzer Endanschlag 1 (3B1)",
    "Umsetzer Endanschlag 2 (3B2)"
]

const ArrayWithVariablesForAmpel = [
    "Ampel rot",
    "Ampel orange",
    "Ampel gruen",
    "Ampel weiss"
]


function getData() {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            updateSvgWithData(data);
        })

}

async function updateSvgWithData(data) {
    var getDomainMaxRangeHHorizontalXScale = getMaxValue(data, "H-horizontal")
    var getDomainMaxRangeHVertikalYScale = getMaxValue(data, "H-vertikal")
    var getDomainMaxRangeVVertikalYScale = getMaxValue(data, "V-vertikal")
    var getDomainMaxRangeVHorizontalXScale = getMaxValue(data, "V-horizontal")

    for (element in data) {
        //Check time here
        await sleep(1000)
        if (data[element]) {
            //Todo fall für 0 einfuegen
            if (element != 0) {
                var dataArray = data[element]["werte"];
                var Zeit = data[element]["datum"];
                var dataArrayVorher = data[element - 1]["werte"];
                //updateStationen(data[element]["werte"], data[element]["datum"], data[element - 1]["werte"], getDomainMaxRangeHHorizontalXScale);
                createSvgUebersicht(dataArray, Zeit, dataArrayVorher);
                createSvgHochregallager(dataArray, Zeit, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale);
                createSvgVakuumSauggreif(dataArray, Zeit, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale);
                createSvgWipphebel(dataArray, Zeit);
                createSvgSortierstrecke(dataArray, Zeit);
                createSvgAmpel(dataArray);
                //createSvgBrennofen(dataArray, Zeit);
            } else {
                //createAllSVGs();
                //Oder in den FUnktionen pruefen ob dataArrayVorher = null
            }

        } else {
            console.log("Element is empty!")
        }
    }
}

function createSvgUebersicht(dataArray, Zeit, dataArrayVorher) {
    d3.xml("./media/img/grobe_Gesamtansicht5.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#Gesamtuebersicht")
            if (document.getElementById('Gesamtuebersicht').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }


            //svg.select("#HochregallagerLink").appendChild("<a href='www.w3schools.com/html/html_links.asp'></a>")
        });
}

function createSvgHochregallager(dataArray, Zeit, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale) {
    d3.xml("./media/img/HochregallagerNew12.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#HochregallagerSvg")
            if (document.getElementById('HochregallagerSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")

            if (dataArray != "") {
                //Direkt am anfang mappen und den maximalen wert anchfragen
                var widthDiv = document.getElementById('HochregallagerSvg').offsetWidth;
                var heightDiv = document.getElementById('HochregallagerSvg').offsetHeight;
                var widthLastColumn = d3.select("#letzteStrebe").attr("x");
                console.log(parseInt(getDomainMaxRangeHHorizontalXScale) / 10);
                var x = d3.scaleLinear()
                    .domain([0, getDomainMaxRangeHHorizontalXScale])
                    .range([parseInt(getDomainMaxRangeHHorizontalXScale) / 10, widthLastColumn]) //vlt - 1/10. der länge abziehen wegen rahmen elemente?
                var y = d3.scaleLinear()
                    .domain([0, getDomainMaxRangeHVertikalYScale])
                    .range([parseInt(heightDiv) / 10, heightDiv])
                hochregallager_update_svg(dataArray, Zeit, dataArrayVorher, x, y);
            }
            //Update input checkboxes
            // var test = document.getElementsByClassName("test");
            // for( var i = 0; i < test.length; i++){
            //     if (!test[i].hasAttribute('checked')){
            //         //console.log(test[i]);
            //         test[i].setAttribute("checked", "")
            //     } else if (test[i].hasAttribute('checked')){
            //         test[i].removeAttribute('checked')
            //     }
            // }
        });
}

function hochregallager_update_svg(dataArray, Zeit, dataArrayVorher, x, y) {
    //Hhori & HVerti

    if (dataArrayVorher) {
        var scaledHHorizontal = x(dataArray[ArrayWithVariablesForHochregalLager[6]]);
        var scaledHHorizontalVorher = x(dataArrayVorher[ArrayWithVariablesForHochregalLager[6]]);
        var scaledHvert = y(dataArray[ArrayWithVariablesForHochregalLager[7]]);
        var scaledHvertVorher = y(dataArrayVorher[ArrayWithVariablesForHochregalLager[7]]);

        var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;
        var diffHvert = scaledHvertVorher - scaledHvert;
        svg.selectAll(".turmBewegen").each(function (d, i) {
            var oldvalueX = d3.select(this).attr("x");
            var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;
            // if (newvalueX < 0) {
            //     console.log("X alt: " + oldvalueX);
            //     console.log("X neu: " + newvalueX);
            // }
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
            // if (newvalueX < 0) {
            //     console.log("X alt Greifer: " + oldvalueX);
            //     console.log("X neu Greifer: " + newvalueX);
            // }
            // if (newvalueY < 0) {
            //     console.log("Y alt Greifer: " + oldvalueY);
            //     console.log("Y neu Greifer: " + newvalueY);
            // }
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", newvalueY)
                .attr("x", newvalueX)
            //Motor blinken lassen?
        })
    } else {
        svg.selectAll(".turmBewegen").each(function (d, i) {
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("x", x(dataArray[ArrayWithVariablesForHochregalLager[6]]))
        })

        svg.selectAll(".greiferBewegen").each(function (d, i) {
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", y(dataArray[ArrayWithVariablesForHochregalLager[7]]))
                .attr("x", x(dataArray[ArrayWithVariablesForHochregalLager[6]]))
        })
    }
    //Und evtl mit lichtschranke aussen verbinden?
    //Blinkt sehr selten? Gehört das so?
    if (dataArray[ArrayWithVariablesForHochregalLager[0]] == " false") {
        svg.select("#LichtschrankeInnen")
            .transition()
            .attr("class", "lichtschranke")
            .transition()
            .duration(1000)
            .attr("class", "lichtschrankeTransform")
    }
    if (dataArray[ArrayWithVariablesForHochregalLager[1]] == " false") {
        svg.select("#LichtschrankeAussen")
            .transition()
            .attr("class", "lichtschranke")
            .transition()
            .duration(1000)
            .attr("class", "lichtschrankeTransform")
    }

    /*
        "Referenztaster Ausleger vorne" ist immer gegenteil von "Referenztaster Ausleger hinten"
        Also wenn true dann false und umgekehrt -> muss noch validiert werden
    */
    svg.selectAll(".taster").each(function (d, i) {
        var currentId = d3.select(this).attr("id");
        var currentRgbColor = d3.select(this).style('fill');
        if (currentId === "Referenztastervertikal") {
            if (dataArray[ArrayWithVariablesForHochregalLager[2]] == " false") {
                document.getElementById("Referenztastervertikal").style.fill = "blue"
                //Fuer Celina: TODO create blinking effect in svg file
                //Farbe zu Farbe in svg aendern
            } else {
                document.getElementById("Referenztastervertikal").style.fill = currentRgbColor;
            }
            //Validieren ob die IDs richtig zugeordnet sind
        } else if (currentId === "ReferenztasterAuslegerVorne") {
            if (dataArray[ArrayWithVariablesForHochregalLager[4]] == " false") {
                document.getElementById("ReferenztasterAuslegerVorne").style.fill = "blue"
                document.getElementById("ReferenztasterAuslegerHinten").style.fill = "#FD76FF"
                //Fuer Celina: TODO create blinking effect in svg file
                //Farbe zu Farbe in svg aendern
            } else {
                document.getElementById("ReferenztasterAuslegerVorne").style.fill = "#FD76FF"
                document.getElementById("ReferenztasterAuslegerHinten").style.fill = "blue";
            }
        }
    })

}
function createSvgSortierstrecke(dataArray, Zeit) {
    d3.xml("./media/img/Sortierstrecke7.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#Sortierstrecke")
            if (document.getElementById('Sortierstrecke').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")

            if (dataArray != "") {
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[5]] === " true") { //Wenn variable x fuer motor is true dann....
                    svg.selectAll(".foerderband").each(function (d, i) {

                        var classWithNumber = d3.select(this).attr('class').split(' ');
                        var regexResult = classWithNumber[0].match(/\d+/g);
                        if (regexResult.includes("16")) {
                            d3.select(this)
                                .attr("class", "sortierstrecke_st17 foerderband")
                        } else if (regexResult.includes("17")) {
                            d3.select(this)
                                .attr("class", "sortierstrecke_black18 foerderband")
                        } else if (regexResult.includes("18")) {
                            d3.select(this)
                                .attr("class", "sortierstrecke_st16 foerderband")
                        }

                    })
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[0]] === " false") {
                    svg.select("#LichtschrankeEingangSeite")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")

                    svg.select("#LichtschrankeEingangOben")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[1]] === " false") {
                    svg.select("#LichtschrankeNachFarbsensorSeite")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")
                    svg.select("#LichtschrankeNachFarbsensorOben")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")

                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[2]] === " false") {
                    svg.select("#LichtschrankeWeissSeite")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")

                    svg.select("#LichtschrankeWeissOben")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[3]] === " false") {
                    svg.select("#LichtschrankeRotSeite")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")

                    svg.select("#LichtschrankeRotOben")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[4]] === " false") {
                    svg.select("#LichtschrankeBlauSeite")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")

                    svg.select("#LichtschrankeBlauOben")
                        .transition()
                        .attr("class", "sortierstrecke_Lichtschranke")
                        .transition()
                        .duration(1000)
                        .attr("class", "sortierstrecke_Lichtschranke_transform")
                }

            }

        });


}
//Fehler: wenn wipphebel dann gleiche farbklassen verwendet und somit hochregallager andere farbe. aber egal da wir andere seiten verwenden fpr einzelansichten
function createSvgWipphebel(dataArray, Zeit) {
    d3.xml("./media/img/Wipphebel2.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#WipphebelSvg")
            if (document.getElementById('WipphebelSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
                //Evtl muss man den Inhalt hier tauschen falls schalter 1 links und niucht rechts ist
                /*
                    Es gibt nur false false???
                    Warum?
                */

                //Um zu testen ob das flippen funktioniert
                var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)))
                if (madde > 3) {
                    dataArray[ArrayWithVariablesForWippHebel[0]] = " true"
                } else if (madde <= 3) {
                    dataArray[ArrayWithVariablesForWippHebel[1]] = " true"
                }
                //Das als transition umwandeln? Wie würde das funktiuonieren?
                if (dataArray[ArrayWithVariablesForWippHebel[0]] == " true") {
                    document.getElementById("WipphebelSvg").style.transform = "scale(1, 1)";
                } else if (dataArray[ArrayWithVariablesForWippHebel[1]] == " true") {
                    document.getElementById("WipphebelSvg").style.transform = "scale(-1, 1)";
                } else {
                    //Wipper in der Luft?
                }
            }
        });
}

function createSvgVakuumSauggreif(dataArray, Zeit, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale) {
    //TODO: Elemente in svg grupieren
    d3.xml("./media/img/Vakuum-SauggreiferNew3.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#Vakuum")
            if (document.getElementById('Vakuum').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
                //TOdo: Skalieren der Grafik
                var x = d3.scaleLinear()
                    .domain([0, getDomainMaxRangeVHorizontalXScale])
                    .range([0, 0])
                var y = d3.scaleLinear()
                    .domain([0, getDomainMaxRangeVVertikalYScale])
                    .range([768, 0])

                //Flippen wenn der Kran auf der rechten seite ist
                //Hoch und runter fahren
                // if (rechts) {
                //     document.getElementById("Vakuum").style.transform = "scale(-1, 1)";
                // } else {
                //     document.getElementById("Vakuum").style.transform = "scale(1, 1)";
                // }
                var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)))
                // if (madde <= 2) {
                //     dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 0
                // } else 
                // if (madde > 2 && madde <= 4) {
                //     dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 50
                // } else if (madde > 4) {
                //     dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 200
                // }
                if (dataArrayVorher) {
                    var scaledHvert = y(dataArray[ArrayWithVariablesForVakuumSauggreifer[3]]);
                    var scaledHvertVorher = y(dataArrayVorher[ArrayWithVariablesForVakuumSauggreifer[3]]);
                    var diffHvert = scaledHvert - scaledHvertVorher;

                    //  console.log("scaledHvert" + scaledHvert);
                    //  console.log("scaledHvertVorher" + scaledHvertVorher);
                    //  console.log("DiffHvert" + diffHvert);
                    // console.log("------------------------------------");
                    svg.selectAll(".beweglicherArm").each(function (d, i) {
                        if (d3.select(this).attr('id') === "testThisIssue") {
                            var oldvalueY = d3.select(this).attr("y");
                            // console.log("Old: " + oldvalueY);
                            // console.log("Diff: " + diffHvert);
                            // console.log("------------------------------------")
                            var newvalueY = parseFloat(oldvalueY) + diffHvert;
                            d3.select(this)
                                .transition()
                                .duration(1000)
                                .attr("y", newvalueY)
                        } else {

                            var oldvalueY = d3.select(this).attr("y");
                            var newvalueY = parseFloat(oldvalueY) + diffHvert;
                            d3.select(this)
                                .transition()
                                .duration(1000)
                                .attr("y", newvalueY)
                        }
                    })
                } else {
                    svg.selectAll(".beweglicherArm").each(function (d, i) {
                        d3.select(this)
                            .transition()
                            .duration(1000)
                            .attr("y", y(dataArray[ArrayWithVariablesForVakuumSauggreifer[3]]));

                    })
                }
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

function createSvgAmpel(dataArray) {

    if (dataArray[ArrayWithVariablesForAmpel[0]].includes(" true")) {
        document.getElementById("Ampel").src = "./media/img/ampel/Ampelfarbe_rot.svg";
    } else if (dataArray[ArrayWithVariablesForAmpel[1]].includes(" true")) {
        document.getElementById("Ampel").src = "./media/img/ampel/Ampelfarbe_gelb.svg";
    } else if (dataArray[ArrayWithVariablesForAmpel[2]].includes(" true")) {
        document.getElementById("Ampel").src = "./media/img/ampel/Ampelfarbe_grün.svg";
    } else if (dataArray[ArrayWithVariablesForAmpel[3]].includes(" true")) {
        document.getElementById("Ampel").src = "./media/img/ampel/Ampelfarbe_aus.svg";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getMaxValue(dataArray, key) {
    var max;
    for (var i = 0; i < dataArray.length; i++) {
        if (max == null || parseInt(dataArray[i]["werte"][key]) > parseInt(max))
            max = dataArray[i]["werte"][key];
    }
    return max;
}