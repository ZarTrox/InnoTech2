/*  Aufgaben Celina:
- d3.ease verwenden?
- Hearmap fuer Gesameuebersicht?


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

const ArrayWithVariablesForUmsetzer = [
    "Umsetzer Endanschlag 1 (3B1)",
    "Umsetzer Endanschlag 2 (3B2)"
]

const ArrayWithVariablesForAmpel = [
    "Ampel rot",
    "Ampel orange",
    "Ampel gruen",
    "Ampel weiss"
]

const arrayHochregallagerCheckboxIds = [
    "checkboxHochregallagerReferenztasterhorizontal",
    "checkboxHochregallagerLichtschrankeinnen",
    "checkboxHochregallagerLichtschrankeaussen",
    "checkboxHochregallagerReferenztastervertikal",
    "checkboxHochregallagerReferenztasterauslegervorne",
    "checkboxHochregallagerReferenztasterauslegerhinten"
]

const arraySauggreiferCheckboxIds = [
    "checkboxSauggreiferReferenzschaltervertikal",
    "checkboxSauggreiferReferenzschalterhorizontal",
    "checkboxSauggreiferReferenzschalterdrehen",
]

const arrayUmsetzerCheckboxIds = [
    "checkboxUmsetzerUmsetzerendanschlag1",
    "checkboxUmsetzerUmsetzerendanschlag2"
]

const arrayBearbeitungsstationMitBrennofenCheckboxIds = [
    "checkboxBrennofenReferenzschalterdrehkreuzsauger",
    "checkboxBrennofenReferenzschalterdrehkreuzfoerderband",
    "checkboxBrennofenLichtschrankeendefoerderband",
    "checkboxBrennofenReferenzschalterdrehkreuzsaege",
    "checkboxBrennofenReferenzschaltersaugerdrehkreuz",
    "checkboxBrennofenReferenzschalterOfenschieberinnen",
    "checkboxBrennofenReferenzschalterofenschieberaussen",
    "checkboxBrennofenReferenzschaltersaugerbrennofen",
    "checkboxBrennofenLichtschrankebrennofen",
    "checkboxBrennofenMotordrehkreuzimuhrzeigersinn",
    "checkboxBrennofenMotordrehkreuzgegenuhrzeigersinn",
    "checkboxBrennofenMotorfoerderbandvorwaerts",
    "checkboxBrennofenMotorsaege",
    "checkboxBrennofenMotorofenschiebereinfahrt",
    "checkboxBrennofenMotorofenschieberausfahrt",
    "checkboxBrennofenMotorsaugerzumofen",
    "checkboxBrennofenMotorsaugerzumdrehkreuz",
    "checkboxBrennofenLeutchteofen"
]

const arraySortierstreckeMitFarberkennungCheckboxIds = [
    "checkboxSortierstreckeLichtschrankeeingang",
    "checkboxSortierstreckeLichtschrankenachfarbsensor",
    "checkboxSortierstreckeLichtschrankeweiss",
    "checkboxSortierstreckeLichtschrankerot",
    "checkboxSortierstreckeLichtschrankeblau",
    "checkboxSortierstreckeMotorfoerderband"
]


function getData() {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            updateSvgWithData(data);
        })

}

async function updateSvgWithData(data) {
    var getDomainMaxRangeHHorizontalXScale = getMaxValue(data, "H-horizontal");
    var getDomainMaxRangeHVertikalYScale = getMaxValue(data, "H-vertikal");
    var getDomainMaxRangeVVertikalYScale = getMaxValue(data, "V-vertikal");
    var getDomainMaxRangeVHorizontalXScale = getMaxValue(data, "V-horizontal");
    var getDomainMaxRangeVDrehenZScale = getMaxValue(data, "V-drehen");

    for (element in data) {
        //Check time here
        await sleep(1000)
        //Todo fall für 0 einfuegen
        if (element != 0) {
            var dataArray = data[element]["werte"];
            var dataArrayVorher = data[element - 1]["werte"];
            //updateStationen(data[element]["werte"], data[element]["datum"], data[element - 1]["werte"], getDomainMaxRangeHHorizontalXScale);
            createSvgUebersicht(dataArray, dataArrayVorher);
            createSvgHochregallager(dataArray, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale);
            createSvgVakuumSauggreif(dataArray, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale, getDomainMaxRangeVDrehenZScale);
            createSvgUmsetzer(dataArray);
            createSvgSortierstrecke(dataArray);
            //createSvgStapelmagazin()
            //createSvgAmpel(dataArray);
            createSvgBrennofen(dataArray);
            createSvgFestoUebersicht(dataArray)
        } else {
            //createAllSVGs();
            //Oder in den FUnktionen pruefen ob dataArrayVorher = null
        }
    }
}

function createSvgUebersicht(dataArray, dataArrayVorher) {
    d3.xml("./media/img/Gesamtansicht2.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#GesamtueberblickSvg")
            if (document.getElementById('GesamtueberblickSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }


            //svg.select("#HochregallagerLink").appendChild("<a href='www.w3schools.com/html/html_links.asp'></a>")
        });
}

function createSvgUebersichtFesto() {
    d3.xml("./media/img/Gesamtansicht_Festo2.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#FestoUeberblickSvg")
            if (document.getElementById('FestoUeberblickSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
        });
}

function createSvgHochregallager(dataArray, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale) {
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
                var offsetHeightDevHochregallager = document.getElementById('HochregallagerSvg').offsetHeight;
                var widthLastColumn = d3.select("#letzteStrebe").attr("x");
                //console.log(parseInt(getDomainMaxRangeHHorizontalXScale) / 10);
                var x = d3.scaleLinear()
                    .domain([0, parseInt(getDomainMaxRangeHHorizontalXScale)])
                    .range([0, parseFloat(widthLastColumn)]).clamp(true) //vlt - 1/10. der länge abziehen wegen rahmen elemente?
                var y = d3.scaleLinear()
                    .domain([0, parseInt(getDomainMaxRangeHVertikalYScale)])
                    .range([parseFloat(offsetHeightDevHochregallager) * 0.13, parseFloat(offsetHeightDevHochregallager) * 0.65])

                hochregallager_update_svg(dataArray, dataArrayVorher, x, y);
                var status = "";
                for (id in arrayHochregallagerCheckboxIds) {
                    switch (parseInt(id)) {
                        case 0:
                            status = dataArray["Referenztaster horizontal"];
                            break;
                        case 1:
                            status = dataArray["Lichtschranke innen"];
                            break;
                        case 2:
                            status = dataArray["Lichtschranke aussen"];
                            break;
                        case 3:
                            status = dataArray["Referenztaster vertikal"];
                            break;
                        case 4:
                            status = dataArray["Referenztaster Ausleger vorne"];
                            break;
                        case 5:
                            status = dataArray["Referenztaster Ausleger hinten"];
                            break;
                        default:
                            status = "";
                    }
                    updateInputCheckboxes(arrayHochregallagerCheckboxIds[id], status)
                }
            }
        });
}

function updateInputCheckboxes(checkBoxID, status) {
    if (!status) {
        console.warn("status for checkbox is empty!")
    }
    var inputElements = document.getElementsByClassName(checkBoxID);
    for (checkbox in inputElements) {
        if (typeof inputElements[checkbox] === "object") {
            console.log("Hi");
            if (status === " true") {
                inputElements[checkbox].setAttribute("checked", "")
            } else if (status === " false") {
                inputElements[checkbox].removeAttribute('checked')
            }
        }
    }
}

function hochregallager_update_svg(dataArray, dataArrayVorher, x, y) {
    //Hhori & HVerti
    if (dataArrayVorher) {
        var scaledHHorizontal = x(parseInt(dataArray[ArrayWithVariablesForHochregalLager[6]]));
        var scaledHHorizontalVorher = x(parseInt(dataArrayVorher[ArrayWithVariablesForHochregalLager[6]]));
        var scaledHvert = y(parseInt(dataArray[ArrayWithVariablesForHochregalLager[7]]));
        var scaledHvertVorher = y(parseInt(dataArrayVorher[ArrayWithVariablesForHochregalLager[7]]));

        var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;
        var diffHvert = scaledHvertVorher - scaledHvert;
        svg.selectAll(".turmBewegen").each(function (d, i) {
            var oldvalueX = d3.select(this).attr("x");
            var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("x", newvalueX + "px")
        })

        svg.selectAll(".greiferBewegen").each(function (d, i) {
            var oldvalueY = d3.select(this).attr("y");
            var newvalueY = parseFloat(oldvalueY) + diffHvert;
            var oldvalueX = d3.select(this).attr("x");
            var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", newvalueY + "px")
                .attr("x", newvalueX + "px")
            //Motor blinken lassen?
        })
    } else {
        svg.selectAll(".turmBewegen").each(function (d, i) {
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("x", x(dataArray[ArrayWithVariablesForHochregalLager[6]]) + "px")
        })

        svg.selectAll(".greiferBewegen").each(function (d, i) {
            d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", y(dataArray[ArrayWithVariablesForHochregalLager[7]]) + "px")
                .attr("x", x(dataArray[ArrayWithVariablesForHochregalLager[6]]) + "px")
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
function createSvgSortierstrecke(dataArray) {
    d3.xml("./media/img/Sortierstrecke7.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#SortierstreckeSvg")
            if (document.getElementById('SortierstreckeSvg').getElementsByTagName('svg').length == 0) {
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
                    lichtschrankeBlinken("#LichtschrankeEingangSeite", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                    lichtschrankeBlinken("#LichtschrankeEingangOben", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[1]] === " false") {
                    lichtschrankeBlinken("#LichtschrankeNachFarbsensorSeite", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                    lichtschrankeBlinken("#LichtschrankeNachFarbsensorOben", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[2]] === " false") {
                    lichtschrankeBlinken("#LichtschrankeWeissSeite", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                    lichtschrankeBlinken("#LichtschrankeWeissOben", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[3]] === " false") {
                    lichtschrankeBlinken("#LichtschrankeRotSeite", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                    lichtschrankeBlinken("#LichtschrankeRotOben", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                }
                if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[4]] === " false") {
                    lichtschrankeBlinken("#LichtschrankeBlauSeite", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                    lichtschrankeBlinken("#LichtschrankeBlauOben", "sortierstrecke_Lichtschranke", "sortierstrecke_Lichtschranke_transform");
                }
                var status = "";
                for (id in arraySortierstreckeMitFarberkennungCheckboxIds) {
                    switch (parseInt(id)) {
                        case 0:
                            status = dataArray["S-Lichtschranke Eingang"];
                            break;
                        case 1:
                            status = dataArray["S-Lichtschranke nach Farbsensor"];
                            break;
                        case 2:
                            status = dataArray["S-Lichtschranke weiss"];
                            break;
                        case 3:
                            status = dataArray["S-Lichtschranke rot"];
                            break;
                        case 4:
                            status = dataArray["S-Lichtschranke blau"];
                            break;
                        case 5:
                            status = dataArray["S-Motor Foerderband"];
                            break;
                        default:
                            status = "";
                    }
                    updateInputCheckboxes(arraySortierstreckeMitFarberkennungCheckboxIds[id], status)
                }
            }

        });
}

function lichtschrankeBlinken(lichtschrankeID, classNameNormal, classNameTransform) {
    svg.select(lichtschrankeID)
        .transition()
        .attr("class", classNameNormal)
        .transition()
        .duration(1000)
        .attr("class", classNameTransform)
}



function createSvgUmsetzer(dataArray) {
    d3.xml("./media/img/Umsetzer3.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#UmsetzerSvg")
            if (document.getElementById('UmsetzerSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
                //Evtl muss man den Inhalt hier tauschen falls schalter 1 links und niucht rechts ist
                /*
                    Es gibt nur false false???
                    Warum?
                */

                var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)))
                if (madde > 3) {
                    dataArray[ArrayWithVariablesForUmsetzer[0]] = " true"
                } else if (madde <= 3) {
                    dataArray[ArrayWithVariablesForUmsetzer[1]] = " true"
                }
                if (dataArray[ArrayWithVariablesForUmsetzer[0]] == " true") {
                    document.getElementById("UmsetzerSvg").style.transform = "scale(1, 1)";
                } else if (dataArray[ArrayWithVariablesForUmsetzer[1]] == " true") {
                    document.getElementById("UmsetzerSvg").style.transform = "scale(-1, 1)";
                } else {
                    //Umsetzer in der Luft?
                }
                var status = "";
                for (id in arrayUmsetzerCheckboxIds) {
                    switch (parseInt(id)) {
                        case 0:
                            status = dataArray["Umsetzer Endanschlag 1 (3B1)"];
                            break;
                        case 1:
                            status = dataArray["Umsetzer Endanschlag 2 (3B2)"];
                            break;
                        default:
                            status = "";
                    }
                    updateInputCheckboxes(arrayUmsetzerCheckboxIds[id], status)
                }
            }
        });
}

function createSvgVakuumSauggreif(dataArray, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale, getDomainMaxRangeVDrehenZScale) {
    //TODO: Elemente in svg grupieren
    d3.xml("./media/img/Vakuum-SauggreiferNew8.svg",
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
                var offsetHeightSauggreifDiv = document.getElementById('Vakuum').offsetHeight;
                var maxAusweitungVonAusfahrbarerQuerstrebe = parseFloat(d3.select("#referenzPunktQuerstange").attr("x"));
                var x = d3.scaleLinear()
                    .domain([0, parseInt(getDomainMaxRangeVHorizontalXScale)])
                    .range([0, maxAusweitungVonAusfahrbarerQuerstrebe]).clamp(true)
                var y = d3.scaleLinear()
                    .domain([0, parseInt(getDomainMaxRangeVVertikalYScale)])
                    .range([parseFloat(offsetHeightSauggreifDiv) * 0.245, parseFloat(offsetHeightSauggreifDiv) - (parseFloat(offsetHeightSauggreifDiv) * 0.32)]).clamp(true)

                var z = d3.scaleLinear()
                    .domain([0, parseInt(getDomainMaxRangeVDrehenZScale)])
                    .range([0, 360]).clamp(true)
                var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)))
                if (madde <= 2) {
                    dataArray[ArrayWithVariablesForVakuumSauggreifer[5]] = 0
                } else
                    if (madde > 2 && madde <= 4) {
                        dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 100
                        //dataArray[ArrayWithVariablesForVakuumSauggreifer[4]] = 50
                    } else if (madde > 4) {
                        dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 980
                        //dataArray[ArrayWithVariablesForVakuumSauggreifer[4]] = 1200
                    }
                var drehenSkaliert = z(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[4]]));
                if ((drehenSkaliert > 90) && (drehenSkaliert <= 270)) {
                    document.getElementById("Vakuum").style.transform = "scale(-1, 1)";
                } else {
                    document.getElementById("Vakuum").style.transform = "scale(1, 1)";
                }

                if (dataArrayVorher) {

                    var scaledHvert = y(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[3]]));
                    var scaledHvertVorher = y(parseInt(dataArrayVorher[ArrayWithVariablesForVakuumSauggreifer[3]]));
                    var diffHvert = scaledHvert - scaledHvertVorher;

                    var scaledHHorizontal = x(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[5]]));
                    var scaledHHorizontalVorher = x(parseInt(dataArrayVorher[ArrayWithVariablesForVakuumSauggreifer[5]]));
                    var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;

                    //Celina: Im graphen code verschiedene ebenen erstellen
                    //Hochregallager auf der rechten seite anzeigen
                    svg.selectAll(".beweglicherArm").each(function (d, i) {
                        var oldvalueY = d3.select(this).attr("y");
                        var newvalueY = parseFloat(oldvalueY) + diffHvert;

                        var oldValueX = d3.select(this).attr("x");
                        var newValueX = parseFloat(oldValueX) + diffHHorizontal;
                        var classesSauggreiferElement = d3.select(this).attr("class");
                        var idSauggreiferElement = d3.select(this).attr("id");

                        //if ((idSauggreiferElement === "ausfahrbareQuerstange1") || (idSauggreiferElement === "ausfahrbareQuerstange2")) {
                        //Weg finden wie man die Querstrebe am Hauptarm halten kann
                        //var newLength = diffHHorizontal - d3.select(parseFloat(d3.select("#referenzPunktQuerstange").attr("x")));
                        //console.log(typeof parseFloat(d3.select("#referenzPunktQuerstange").attr("x")));
                        // d3.select(this)
                        //     .transition()
                        //     .duration(1000)
                        //     .attr("y", newvalueY + "px")
                        //     .attr("x", newValueX + "px")
                        //     .attr("width", newLength)
                        //} else 
                        if (classesSauggreiferElement.includes("ausfahrbarerGreifer")) {
                            d3.select(this)
                                .transition()
                                .duration(1000)
                                .attr("y", newvalueY + "px")
                                .attr("x", newValueX + "px")
                        } else {
                            d3.select(this)
                                .transition()
                                .duration(1000)
                                .attr("y", newvalueY + "px")
                        }

                    })
                    var status = "";
                    for (id in arraySauggreiferCheckboxIds) {
                        switch (parseInt(id)) {
                            case 0:
                                status = dataArray["V-Referenzschalter vertikal"];
                                break;
                            case 1:
                                status = dataArray["V-Referenzschalter horizontal"];
                                break;
                            case 2:
                                status = dataArray["V-Referenzschalter drehen"];
                                break;
                            default:
                                status = "";
                        }
                        updateInputCheckboxes(arraySauggreiferCheckboxIds[id], status)
                    }
                }
            }
        });
}

function createSvgStapelmagazin() {
    d3.xml("./media/img/Stapelmagazin.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }
            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#StapelmagazinSvg")
            if (document.getElementById('StapelmagazinSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            svg = main_chart_svg.select("svg")
        });
}
function createSvgBrennofen(dataArray) {
    d3.xml("./media/img/Brennofen2.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#BrennOfenSvg")
            // if (document.getElementById("div"))
            if (document.getElementById('BrennOfenSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
            }
        });
}

function createSvgFestoUebersicht(dataArray) {
    d3.xml("./media/img/Gesamtübersicht_Festo2.svg",
        function (error, documentFragment) {
            if (error) { console.log(error); return; }

            var svgNode = documentFragment
                .getElementsByTagName("svg")[0];
            var main_chart_svg = d3.select("#FestoUebersichtSvg")
            // if (document.getElementById("div"))
            if (document.getElementById('FestoUebersichtSvg').getElementsByTagName('svg').length == 0) {
                main_chart_svg.node().appendChild(svgNode);
            }
            svg = main_chart_svg.select("svg")
            if (dataArray != "") {
            }
        });
}

function createHeaderAmpel(dataArray) {

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