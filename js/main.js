function getData() {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            zeigeStapelMagazin(data);
            zeigeHochregalLager(data);
            zeigeBrennOfen(data);


        })

}

function zeigeStapelMagazin(data) {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            for (element in data) {
                if (data[element]) {
                    var datumUndUhrzeit = data[element]["datum"];
                    var werteNeu = data[element]["werte"];
                    if (element != 0) {
                        //Wenn es nicht das erste Element ist, dann speicher die daten vom element davor zum Vergleichen in einer Variable ab
                        var werteAlt = data[element - 1]["werte"];
                        //if (werteNeu[StelleX] != werteAlt[StelleX]) {
                        //Wenn sich im Vergelich zur Sekunde zuvor etwas veraendert, dann...
                        /*Relevant für x sind hier:
                            e.g. H-Vertikal;
                        */
                        //}
                    } else {
                        //Wenn es das erste Element (Uhrzeit: 12:00:00) ist dann mach ...
                    }
                } else {
                    console.log("Element is empty!")
                }
            }
        });
}

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

function zeigeHochregalLager(data) {
    fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
        .then(response => response.json())
        .then(data => {
            for (element in data) {
                if (data[element]) {
                    //var datumUndUhrzeit = data[element]["datum"];
                    //var werteNeu = data[element]["werte"];
                    if (element != 0) {
                        //Wenn es nicht das erste Element ist, dann speicher die daten vom element davor zum Vergleichen in einer Variable ab
                        //var werteAlt = data[element - 1]["werte"];
                        //Oder: wertNeu[StelleX] != werteAlt[StelleX]
                        if (data[element]["werte"] != data[element - 1]["werte"]) {
                            //Wenn sich im Vergelich zur Sekunde zuvor etwas veraendert, dann...
                            /*Relevant für HochregalLager sind hier:
                                LichtschrankeInnen: I2
                                Referenztaster vertikal : I4
                                Referenztaster Ausleger vorne : I5
                                Spursensor oben: A1 (Ausgegraut!)
                                Spursensor unten: A2 (Ausgegraut!)
                                Encoder horizontal Impuls 1: B1 (Ausgegraut!)
                                Encoder horizontal Impuls 2: B2 (Ausgegraut!)
                                Encoder vertikal Impuls 1: B3 (Ausgegraut!)
                                Encoder vertikal Impuls 2: B4 (Ausgegraut!)
                                Motor Förderband vorwärts: Q1 (M1)
                                Motor Förderband rückwarts: Q2 (M1)
                                Motor horizontal zum Regal: Q3 (M2)
                                Motor horizontal zum Förderband: Q4 (M2)
                                Motor vertikal runter: Q5 (M3)
                                Motor vertikal hoch: Q6 (M3)
                            */
                            var lichtschrankeInnen = data[element]["werte"]["Lichtschranke innen"];
                            var referenztasterVertikal = data[element]["werte"]["Referenztaster vertikal"];
                            var referenztasterAuslegerVorne = data[element]["werte"]["Referenztaster Ausleger vorne"];
                            //Was hat es mit H-Vertikal & H-Horizointal in der beschreibung auf sich?
                        }
                    } else {
                        //Wenn es das erste Element (Uhrzeit: 12:00:00) ist dann mach ...
                    }
                } else {
                    console.log("Element is empty!")
                }
            }
        });
}
function zeigeBrennOfen(data) {

}