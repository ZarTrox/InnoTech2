/*  Aufgaben Celina:
- d3.ease verwenden?
- Hearmap fuer Gesameuebersicht?

*/
/* Open Issues

Wenn beim 0. element andere werte als 0 sind (e.g. H-Horizontal) werden diese nicht angezeigt

*/


//Arrays mit den Variablennamen von dem Datensatz

const ArrayWithVariablesForHochregalLager = [
  "Lichtschranke Innen",
  "Lichtschranke aussen",
  "Referenztaster vertikal",
  "Referenztaster horizontal",
  "Referenztaster Ausleger vorne",
  "Referenztaster Ausleger hinten",
  "H-horizontal",
  "H-vertikal"
];

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
];

const ArrayWithVariablesForSortierstreckeMitFarberkennung = [
  "S-Lichtschranke Eingang",
  "S-Lichtschranke nach Farbsensor",
  "S-Lichtschranke weiss",
  "S-Lichtschranke rot",
  "S-Lichtschranke blau",
  "S-Motor Foerderband"
];

const ArrayWithVariablesForVakuumSauggreifer = [
  "V-Referenzschalter vertikal",
  "V-Referenzschalter horizontal",
  "V-Referenzschalter drehen",
  "V-vertikal",
  "V-drehen",
  "V-horizontal"
];

const ArrayWithVariablesForUmsetzer = [
  "Umsetzer Endanschlag 1 (3B1)",
  "Umsetzer Endanschlag 2 (3B2)"
];

const ArrayWithVariablesForAmpel = [
  "Ampel rot",
  "Ampel orange",
  "Ampel gruen",
  "Ampel weiss"
];


// Arrays mit den checkbox IDs

const arrayHochregallagerCheckboxIds = [
  "checkboxHochregallagerReferenztasterhorizontal",
  "checkboxHochregallagerLichtschrankeinnen",
  "checkboxHochregallagerLichtschrankeaussen",
  "checkboxHochregallagerReferenztastervertikal",
  "checkboxHochregallagerReferenztasterauslegervorne",
  "checkboxHochregallagerReferenztasterauslegerhinten"
];

const arraySauggreiferCheckboxIds = [
  "checkboxSauggreiferReferenzschaltervertikal",
  "checkboxSauggreiferReferenzschalterhorizontal",
  "checkboxSauggreiferReferenzschalterdrehen"
];

const arrayUmsetzerCheckboxIds = [
  "checkboxUmsetzerUmsetzerendanschlag1",
  "checkboxUmsetzerUmsetzerendanschlag2"
];

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
];

const arraySortierstreckeMitFarberkennungCheckboxIds = [
  "checkboxSortierstreckeLichtschrankeeingang",
  "checkboxSortierstreckeLichtschrankenachfarbsensor",
  "checkboxSortierstreckeLichtschrankeweiss",
  "checkboxSortierstreckeLichtschrankerot",
  "checkboxSortierstreckeLichtschrankeblau",
  "checkboxSortierstreckeMotorfoerderband"
];


function getData() {
  fetch(`https://it2wi1.if-lab.de/rest/ft_ablauf`)
    .then((response) => response.json())
    .then((data) => {
      updateSvgWithData(data);
    });
}

//Unterfunktionen fuer einzelne bausteine aufrufen mit dem Datensatz
async function updateSvgWithData(data) {
  var getDomainMaxRangeHHorizontalXScale = getMaxValue(data, "H-horizontal");
  var getDomainMaxRangeHVertikalYScale = getMaxValue(data, "H-vertikal");
  var getDomainMaxRangeVVertikalYScale = getMaxValue(data, "V-vertikal");
  var getDomainMaxRangeVHorizontalXScale = getMaxValue(data, "V-horizontal");
  var getDomainMaxRangeVDrehenZScale = getMaxValue(data, "V-drehen");

  for (element in data) {
    await sleep(1000);
    //Todo fall für 0 einfuegen
    var dataArray = data[element]["werte"];
    var dataArrayVorher = null;
    if (element != 0) {
      var dataArrayVorher = data[element - 1]["werte"];
    }
    createSvgUebersicht();
    createSvgFestoUebersicht();
    createHeaderAmpel(dataArray);
    createSvgHochregallager(dataArray, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale);
    createSvgVakuumSauggreif(dataArray, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale, getDomainMaxRangeVDrehenZScale);
    createSvgUmsetzer(dataArray);
    createSvgSortierstrecke(dataArray);
    createSvgBrennofen(dataArray);
  }
}

function createSvgUebersicht() {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Gesamtansicht_de.svg", function (error, documentFragment) {
    if (error) {
      console.log(error);
      return;
    }

    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    var main_chart_svg = d3.select("#GesamtueberblickSvg");
    if (
      document.getElementById("GesamtueberblickSvg").getElementsByTagName("svg")
        .length == 0
    ) {
      main_chart_svg.node().appendChild(svgNode);
    }
  });
}

function createSvgHochregallager(dataArray, dataArrayVorher, getDomainMaxRangeHHorizontalXScale, getDomainMaxRangeHVertikalYScale) {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/HochregallagerNew12.svg",
    function (error, documentFragment) {
      if (error) {
        console.log(error);
        return;
      }

      var svgNode = documentFragment.getElementsByTagName("svg")[0];
      var main_chart_svg = d3.select("#HochregallagerSvg");
      if (document.getElementById("HochregallagerSvg").getElementsByTagName("svg").length == 0) {
        main_chart_svg.node().appendChild(svgNode);
      }
      svg = main_chart_svg.select("svg");

      if (dataArray != "") {

        //Direkt am anfang mappen und den maximalen wert anchfragen

        //Skalieren der Daten

        var offsetWidthDevHochregallager = document.getElementById('HochregallagerSvg').offsetWidth;
        var offsetHeightDevHochregallager = document.getElementById('HochregallagerSvg').offsetHeight;
        var x = d3.scaleLinear()
          .domain([0, parseInt(getDomainMaxRangeHHorizontalXScale)])
          .range([0, parseInt(offsetWidthDevHochregallager) * 0.64]).clamp(true)
        var y = d3.scaleLinear()
          .domain([0, parseInt(getDomainMaxRangeHVertikalYScale)])
          .range([parseFloat(offsetHeightDevHochregallager) * 0.13, parseFloat(offsetHeightDevHochregallager) * 0.65])

        //Bewegen des Greifarms und Turms
        hochregallager_update_svg(dataArray, dataArrayVorher, x, y);

        //Checkboxen updaten

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

function hochregallager_update_svg(dataArray, dataArrayVorher, x, y) {
  if (dataArrayVorher) {

    //Differenz zum vorherigen Moment berechnen
    var scaledHHorizontal = x(parseInt(dataArray[ArrayWithVariablesForHochregalLager[6]]));
    var scaledHHorizontalVorher = x(parseInt(dataArrayVorher[ArrayWithVariablesForHochregalLager[6]]));
    var scaledHvert = y(parseInt(dataArray[ArrayWithVariablesForHochregalLager[7]]));
    var scaledHvertVorher = y(parseInt(dataArrayVorher[ArrayWithVariablesForHochregalLager[7]]));

    var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;
    var diffHvert = scaledHvertVorher - scaledHvert;

    svg.selectAll(".turmBewegen").each(function () {

      //Neue koordinaten berechnen
      var oldvalueX = d3.select(this).attr("x");
      var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;

      d3.select(this)
        .transition()
        .duration(1000)
        .attr("x", newvalueX + "px");
    });

    svg.selectAll(".greiferBewegen").each(function () {

      //Neue koordinaten berechnen
      var oldvalueY = d3.select(this).attr("y");
      var newvalueY = parseFloat(oldvalueY) + diffHvert;
      var oldvalueX = d3.select(this).attr("x");
      var newvalueX = parseFloat(oldvalueX) + diffHHorizontal;

      d3.select(this)
        .transition()
        .duration(1000)
        .attr("y", newvalueY + "px")
        .attr("x", newvalueX + "px");
      //Motor blinken lassen?
    });
  }
  //Und evtl mit lichtschranke aussen verbinden?
  //Blinkt sehr selten? Gehört das so?

  //Lichtschranke blinken lassen
  if (dataArray[ArrayWithVariablesForHochregalLager[0]] == " false") {
    svg
      .select("#LichtschrankeInnen")
      .transition()
      .attr("class", "lichtschranke")
      .transition()
      .duration(1000)
      .attr("class", "lichtschrankeTransform");
  }
  if (dataArray[ArrayWithVariablesForHochregalLager[1]] == " false") {
    svg
      .select("#LichtschrankeAussen")
      .transition()
      .attr("class", "lichtschranke")
      .transition()
      .duration(1000)
      .attr("class", "lichtschrankeTransform");
  }

  /*
        "Referenztaster Ausleger vorne" ist immer gegenteil von "Referenztaster Ausleger hinten"
        Also wenn true dann false und umgekehrt -> muss noch validiert werden
    */
  svg.selectAll(".taster").each(function () {
    var currentId = d3.select(this).attr("id");
    var currentRgbColor = d3.select(this).style("fill");
    if (currentId === "Referenztastervertikal") {
      if (dataArray[ArrayWithVariablesForHochregalLager[2]] == " false") {
        document.getElementById("Referenztastervertikal").style.fill = "blue";
        //Fuer Celina: TODO create blinking effect in svg file
        //Farbe zu Farbe in svg aendern
      } else {
        document.getElementById("Referenztastervertikal").style.fill =
          currentRgbColor;
      }
      //Validieren ob die IDs richtig zugeordnet sind
    } else if (currentId === "ReferenztasterAuslegerVorne") {
      if (dataArray[ArrayWithVariablesForHochregalLager[4]] == " false") {
        document.getElementById("ReferenztasterAuslegerVorne").style.fill =
          "blue";
        document.getElementById("ReferenztasterAuslegerHinten").style.fill =
          "#FD76FF";
        //Fuer Celina: TODO create blinking effect in svg file
        //Farbe zu Farbe in svg aendern
      } else {
        document.getElementById("ReferenztasterAuslegerVorne").style.fill =
          "#FD76FF";
        document.getElementById("ReferenztasterAuslegerHinten").style.fill =
          "blue";
      }
    }
  });
}


function createSvgSortierstrecke(dataArray) {
  //SVG erstellen/auswaehlen
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

        //Wenn foerderband motor laeuft dann "Bewegungseffekt" einbauen
        if (dataArray[ArrayWithVariablesForSortierstreckeMitFarberkennung[5]] === " true") { //Wenn variable x fuer motor is true dann....
          svg.selectAll(".foerderband").each(function () {

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
    })
}


function createSvgUmsetzer(dataArray) {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Umsetzer3.svg", function (error, documentFragment) {
    if (error) {
      console.log(error);
      return;
    }
    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    var main_chart_svg = d3.select("#UmsetzerSvg");
    if (
      document.getElementById("UmsetzerSvg").getElementsByTagName("svg")
        .length == 0
    ) {
      main_chart_svg.node().appendChild(svgNode);
    }
    svg = main_chart_svg.select("svg");
    if (dataArray != "") {
      //Evtl muss man den Inhalt hier tauschen falls schalter 1 links und niucht rechts ist
      /*
                    Es gibt nur false false???
                    Warum?
                */

      var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)));
      if (madde > 3) {
        dataArray[ArrayWithVariablesForUmsetzer[0]] = " true";
      } else if (madde <= 3) {
        dataArray[ArrayWithVariablesForUmsetzer[1]] = " true";
      }
      if (dataArray[ArrayWithVariablesForUmsetzer[0]] == " true") {
        document.getElementById("UmsetzerSvg").style.transform = "scale(1, 1)";
      } else if (dataArray[ArrayWithVariablesForUmsetzer[1]] == " true") {
        document.getElementById("UmsetzerSvg").style.transform = "scale(-1, 1)";
      } else {
        //Umsetzer in der Luft?
      }

      //Checkboxen updaten
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
        updateInputCheckboxes(arrayUmsetzerCheckboxIds[id], status);
      }
    }
  });
}

function createSvgVakuumSauggreif(dataArray, dataArrayVorher, getDomainMaxRangeVHorizontalXScale, getDomainMaxRangeVVertikalYScale, getDomainMaxRangeVDrehenZScale) {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Vakuum-SauggreiferNew8.svg",
    function (error, documentFragment) {
      if (error) {
        console.log(error);
        return;
      }
      var svgNode = documentFragment.getElementsByTagName("svg")[0];
      var main_chart_svg = d3.select("#Vakuum");
      if (document.getElementById("Vakuum").getElementsByTagName("svg").length == 0) {
        main_chart_svg.node().appendChild(svgNode);
      }
      svg = main_chart_svg.select("svg");
      if (dataArray != "") {

        //Skalieren der Daten
        var offsetHeightSauggreifDiv = document.getElementById("Vakuum").offsetHeight;
        var maxAusweitungVonAusfahrbarerQuerstrebe = parseFloat(d3.select("#referenzPunktQuerstange").attr("x"));
        
        var x = d3.scaleLinear()
          .domain([0, parseInt(getDomainMaxRangeVHorizontalXScale)])
          .range([0, maxAusweitungVonAusfahrbarerQuerstrebe]).clamp(true);
        var y = d3.scaleLinear()
          .domain([0, parseInt(getDomainMaxRangeVVertikalYScale)])
          .range([parseFloat(offsetHeightSauggreifDiv) * 0.245, parseFloat(offsetHeightSauggreifDiv) - parseFloat(offsetHeightSauggreifDiv) * 0.32]).clamp(true);
        var z = d3.scaleLinear()
          .domain([0, parseInt(getDomainMaxRangeVDrehenZScale)])
          .range([0, 360]).clamp(true);

        //Test daten erstellen
        var madde = Math.floor(Math.random() * (Math.ceil(6) - Math.floor(0)));
        if (madde <= 2) {
          dataArray[ArrayWithVariablesForVakuumSauggreifer[5]] = 0;
        } else if (madde > 2 && madde <= 4) {
          dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 100;
          //dataArray[ArrayWithVariablesForVakuumSauggreifer[4]] = 50
        } else if (madde > 4) {
          dataArray[ArrayWithVariablesForVakuumSauggreifer[3]] = 1200;
          //dataArray[ArrayWithVariablesForVakuumSauggreifer[4]] = 1200
        }

        //Bild um 180 grad flippen
        var drehenSkaliert = z(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[4]]));
        if (drehenSkaliert > 90 && drehenSkaliert <= 270) {
          document.getElementById("Vakuum").style.transform = "scale(-1, 1)";
        } else {
          document.getElementById("Vakuum").style.transform = "scale(1, 1)";
        }

        if (dataArrayVorher) {

          //Differenz zum vorherigen Moment berechnen
          var scaledHvert = y(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[3]]));
          var scaledHvertVorher = y(parseInt(dataArrayVorher[ArrayWithVariablesForVakuumSauggreifer[3]]));
          var diffHvert = scaledHvert - scaledHvertVorher;

          var scaledHHorizontal = x(parseInt(dataArray[ArrayWithVariablesForVakuumSauggreifer[5]]));
          var scaledHHorizontalVorher = x(parseInt(dataArrayVorher[ArrayWithVariablesForVakuumSauggreifer[5]]));
          var diffHHorizontal = scaledHHorizontal - scaledHHorizontalVorher;

          svg.selectAll(".beweglicherArm").each(function () {

            //Neue koordinaten berechnen
            var oldvalueY = d3.select(this).attr("y");
            var newvalueY = parseFloat(oldvalueY) + diffHvert;

            var oldValueX = d3.select(this).attr("x");
            var newValueX = parseFloat(oldValueX) + diffHHorizontal;
            var classesSauggreiferElement = d3.select(this).attr("class");

            if (classesSauggreiferElement.includes("ausfahrbarerGreifer")) {
              d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", newvalueY + "px")
                .attr("x", newValueX + "px");
            } else {
              d3.select(this)
                .transition()
                .duration(1000)
                .attr("y", newvalueY + "px");
            }
          });

          //Checkboxen updaten
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
            updateInputCheckboxes(arraySauggreiferCheckboxIds[id], status);
          }
        }
      }
    }
  );
}

function createSvgStapelmagazin() {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Stapelmagazin.svg", function (error, documentFragment) {
    if (error) {
      console.log(error);
      return;
    }
    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    var main_chart_svg = d3.select("#StapelmagazinSvg");
    if (
      document.getElementById("StapelmagazinSvg").getElementsByTagName("svg")
        .length == 0
    ) {
      main_chart_svg.node().appendChild(svgNode);
    }
    svg = main_chart_svg.select("svg");
  });
}


function createSvgBrennofen(dataArray) {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Brennofen2.svg", function (error, documentFragment) {
    if (error) {
      console.log(error);
      return;
    }

    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    var main_chart_svg = d3.select("#BrennOfenSvg");
    if (document.getElementById("BrennOfenSvg").getElementsByTagName("svg").length == 0) {
      main_chart_svg.node().appendChild(svgNode);
    }
    svg = main_chart_svg.select("svg");
    if (dataArray != "") {

      //Checkboxen updaten
      var status = "";
      for (id in arrayBearbeitungsstationMitBrennofenCheckboxIds) {
        switch (parseInt(id)) {
          case 0:
            status = dataArray["B-Referenzschalter Drehkranz (Pos. Sauger)"];
            break;
          case 1:
            status =
              dataArray["B-Referenzschalter Drehkranz (Pos. Foerderband)"];
            break;
          case 2:
            status = dataArray["B-Lichtschranke Ende Foerderband"];
            break;
          case 3:
            status = dataArray["B-Referenzschalter Drehkranz (Pos. Saege)"];
            break;
          case 4:
            status = dataArray["B-Referenzschalter Sauger (Pos. Drehkranz)"];
            break;
          case 5:
            status = dataArray["B-Referenzschalter Ofenschieber Innen"];
            break;
          case 6:
            status = dataArray["B-Referenzschalter Ofenschieber Aussen"];
            break;
          case 7:
            status = dataArray["B-Referenzschalter Sauger (Pos. Brennofen)"];
            break;
          case 8:
            status = dataArray["B-Lichtschranke Brennofen"];
            break;
          case 9:
            status = dataArray["B-Motor Drehkranz im Uhrzeigersinn"];
            break;
          case 10:
            status = dataArray["B-Motor Drehkranz gegen Uhrzeigersinn"];
            break;
          case 11:
            status = dataArray["B-Motor Foerderband vorwaerts"];
            break;
          case 12:
            status = dataArray["B-Motor Saege"];
            break;
          case 13:
            status = dataArray["B-Motor Ofenschieber Einfahren"];
            break;
          case 14:
            status = dataArray["B-Motor Ofenschieber Ausfahren"];
            break;
          case 15:
            status = dataArray["B-Motor Sauger zum Ofen"];
            break;
          case 16:
            status = dataArray["B-Motor Sauger zum Drehkranz"];
            break;
          case 17:
            status = dataArray["B-Leuchte Ofen"];
            break;
          default:
            status = "";
        }
        updateInputCheckboxes(arrayBearbeitungsstationMitBrennofenCheckboxIds[id], status);
      }
    }
  });
}

function createSvgFestoUebersicht() {
  //SVG erstellen/auswaehlen
  d3.xml("./media/img/Gesamtübersicht_Festo_de.svg", function (error, documentFragment) {
    if (error) {
      console.log(error);
      return;
    }

    var svgNode = documentFragment.getElementsByTagName("svg")[0];
    var main_chart_svg = d3.select("#FestoUebersichtSvg");
    // if (document.getElementById("div"))
    if (
      document
        .getElementById("FestoUebersichtSvg")
        .getElementsByTagName("svg").length == 0
    ) {
      main_chart_svg.node().appendChild(svgNode);
    }
    svg = main_chart_svg.select("svg");
  }
  );
}

function createHeaderAmpel(dataArray) {
  //Klassen fuer Header ampel je nach Status anpassen
  if (dataArray[ArrayWithVariablesForAmpel[0]] === " true") {
    d3.select("#ampel_header_1").attr("class", "header_light1");
    d3.select("#ampel_header_2").attr("class", "header_light0");
    d3.select("#ampel_header_3").attr("class", "header_light0");
    d3.select("#ampel_header_4").attr("class", "header_light0");
  } else if (dataArray[ArrayWithVariablesForAmpel[1]] === " true") {
    d3.select("#ampel_header_1").attr("class", "header_light0");
    d3.select("#ampel_header_2").attr("class", "header_light2");
    d3.select("#ampel_header_3").attr("class", "header_light0");
    d3.select("#ampel_header_4").attr("class", "header_light0");
  } else if (dataArray[ArrayWithVariablesForAmpel[2]] === " true") {
    d3.select("#ampel_header_1").attr("class", "header_light0");
    d3.select("#ampel_header_2").attr("class", "header_light0");
    d3.select("#ampel_header_3").attr("class", "header_light3");
    d3.select("#ampel_header_4").attr("class", "header_light0");
  } else if (dataArray[ArrayWithVariablesForAmpel[3]] === " true") {
    d3.select("#ampel_header_1").attr("class", "header_light0");
    d3.select("#ampel_header_2").attr("class", "header_light0");
    d3.select("#ampel_header_3").attr("class", "header_light0");
    d3.select("#ampel_header_4").attr("class", "header_light4");
  }
}

//Helfer funktion um lichtschranken zum blinken zu bringen
function lichtschrankeBlinken(lichtschrankeID, classNameNormal, classNameTransform) {
  svg.select(lichtschrankeID)
    .transition()
    .attr("class", classNameNormal)
    .transition()
    .duration(1000)
    .attr("class", classNameTransform)
}


//Helfer funktion zum aendern der checkbox stati
function updateInputCheckboxes(checkBoxID, status) {
  if (!status) {
    console.warn("status for checkbox is empty!");
  }
  var inputElements = document.getElementsByClassName(checkBoxID);
  for (checkbox in inputElements) {
    if (typeof inputElements[checkbox] === "object") {
      if (status === " true") {
        inputElements[checkbox].setAttribute("checked", "");
      } else if (status === " false") {
        inputElements[checkbox].removeAttribute("checked");
      }
    }
  }
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getMaxValue(dataArray, key) {
  var max;
  for (var i = 0; i < dataArray.length; i++) {
    if (max == null || parseInt(dataArray[i]["werte"][key]) > parseInt(max))
      max = dataArray[i]["werte"][key];
  }
  return max;
}
