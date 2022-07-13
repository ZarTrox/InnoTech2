<?php
$lang = array(

   /* <?php echo $lang['...'] ?> */

   /* NOTE Title */
   "title" => "Team 1 - Aufgabe 1 - Innovation Technology II",


   /* NOTE Header */
   "header1" => "Gesamtübersicht",
   "header2" => "Live Status",
   "header3" => "Einzelübersicht",
   "header4" => "Legende Einzelansicht",
   "header_logo_subtitle" => "Grünes Licht<br>für Ihre Produktion.",

   /* NOTE Module */
   "module1" => "Hochregallager",
   "module2" => "Sauggreifer",
   "module3" => "Brennofen",
   "module4" => "Sortierstrecke",
   "module5" => "Umsetzer",


   /* NOTE Sensoren & Aktoren Module */
   "module1.1" => "Referenztaster horizontal",
   "module1.2" => "Lichtschranke innen",
   "module1.3" => "Lichtschranke aussen",
   "module1.4" => "Referenztaster vertikal",
   "module1.5" => "Referenztaster Ausleger vorne",
   "module1.6" => "Referenztaster Ausleger hinten",
   "module1.7" => "H-vertikal",
   "module1.8" => "H-horizontal",

   "module2.1" => "V-Referenzschalter vertikal",
   "module2.2" => "V-Referenzschalter horizontal",
   "module2.3" => "V-Referenzschalter drehen",
   "module2.4" => "V-vertikal",
   "module2.5" => "V-horizontal",
   "module2.6" => "V-drehen",

   "module3.1" => "B-Referenzschalter Drehkranz (Pos. Sauger)",
   "module3.2" => "B-Referenzschalter Drehkranz (Pos. Foerderband)",
   "module3.3" => "B-Lichtschranke Ende Foerderband",
   "module3.4" => "B-Referenzschalter Drehkranz (Pos. Saege)",
   "module3.5" => "B-Referenzschalter Sauger (Pos. Drehkranz)",
   "module3.6" => "B-Referenzschalter Ofenschieber Innen",
   "module3.7" => "B-Referenzschalter Ofenschieber Aussen",
   "module3.8" => "B-Referenzschalter Sauger (Pos. Brennofen)",
   "module3.9" => "B-Lichtschranke Brennofen",
   "module3.10" => "B-Motor Drehkranz im Uhrzeigersinn",
   "module3.11" => "B-Motor Drehkranz gegen Uhrzeigersinn",
   "module3.12" => "B-Motor Foerderband vorwaerts",
   "module3.13" => "B-Motor Saege",
   "module3.14" => "B-Motor Ofenschieber Einfahren",
   "module3.15" => "B-Motor Ofenschieber Ausfahren",
   "module3.16" => "B-Motor Sauger zum Ofen",
   "module3.17" => "B-Motor Sauger zum Drehkranz",
   "module3.18" => "B-Leuchte Ofen",

   "module4.1" => "S-Lichtschranke Eingang",
   "module4.2" => "S-Lichtschranke nach Farbsensor",
   "module4.3" => "S-Lichtschranke weiss",
   "module4.4" => "S-Lichtschranke rot",
   "module4.5" => "S-Lichtschranke blau",
   "module4.6" => "S-Motor Foerderband",

   "module5.1" => "Umsetzer Endanschlag 1 (3B1)",
   "module5.2" => "Umsetzer Endanschlag 2 (3B2)",


   /* NOTE Gesamtübersicht */
   "overview_description" => "Klicken Sie auf ein Anlagemodul, um in die Einzelansicht zu gelangen.",


   /* NOTE Live Status */
   "table_h1" => "Sensor / Aktor:",
   "table_h2" => "Inaktiv / Aktiv",


   /* NOTE Einzelübersicht */
   "single_view_h1" => "Ansicht:",
   "single_view_h1.1" => "Draufsicht",
   "single_view_h1.2" => "Seitenansicht",
   "single_view_h1.3" => "Drauf- und Seitenansicht",

   "single_view_h2" => "Beschreibung:",
   "single_view_h3" => "Status der Sensoren & Aktoren:",



   /* NOTE Einzelübersicht Beschreibungen */
   "module1_desc" => "Ein Hochregallager ist ein Grundfläche sparendes Lager, das computergestützt die Ein- und Auslagerung von Waren ermöglicht. In den meisten Fällen sind Hochregallager als Palettenregallager ausgeführt. Diese Standardisierung ermöglicht einen hohen Automatisierungsgrad und die Anbindung an ein ERP-System (Enterprise-Resource-Planning). Hochregallager zeichnen sich dabei durch eine hohe Raumnutzung und einen hohen Investitionsbedarf aus.",

   "module2_desc" => "Industrieroboter sind universell einsetzbare Bewegungsautomaten mit mehreren Achsen, deren Bewegungen hinsichtlich Bewegungsfolge und Wegen bzw. Winkeln frei (d. h. ohne mechanischen bzw. menschlichen Eingriff) programmierbar und gegebenenfalls sensorgeführt sind. Sie sind mit Greifern, Werkzeugen oder anderen Fertigungsmitteln ausrüstbar und können Handhabungs- und/oder Fertigungsaufgaben ausführen.",

   "module3_desc" => "Bei der Multi-Bearbeitungsstation mit Brennofen durchläuft das Werkstück automatisiert mehrere Stationen, die verschiedene Prozesse simulieren. Dabei kommen verschiedene Fördertechniken, wie zum Beispiel ein Förderband, ein Drehtisch und ein Vakuumsauggreifer, zum Einsatz. Der Bearbeitungsprozess beginnt mit dem Brennofen. Die Bearbeitung soll eingeleitet werden, sobald man ein Werkstück auf den Ofenschieber legt. Dabei wird die Lichtschranke unterbrochen, was dazu führen soll, dass das Tor des Ofens geöffnet und der Ofenschieber eingezogen wird.",

   "module4_desc" => "Die Sortierstrecke mit Farberkennung dient der automatisierten Trennung verschiedenfarbiger Bausteine. Dabei werden geometrisch gleiche, jedoch verschiedenfarbige Bauteile einem Farbsensor, mit Hilfe eines Förderbands zugeführt und dann, entsprechend ihrer Farbe, getrennt. Das Förderband wird von einem S-Motor angetrieben und der Förderweg wird mit Hilfe eines Impulstasters gemessen. Der Auswurf der Werkstücke erfolgt mit Pneumatikzylindern, die den entsprechenden Lagerstellen zugeordnet sind und von Magnetventilen betätigt werden. Mehrere Lichtschranken kontrollieren den Fluss der Werkstücke und ob sich Werkstücke in den Lagerstellen befinden.",

   "module5_desc" => "Das Stapelmagazin verfügt über ein Magazinrohr mit Kapazität für maximal acht Werkstücke, die vereinzelt dem Wertschöpfungsprozess zugeführt werden können. Dies erfolgt durch einen doppeltwirkenden Zylinder, der die Werkstücke einzeln aufschiebt. Die Endlagen werden dabei über Sensoren erfasst.
   Der Wipphebel ist Bestandteil des Modul Umsetzen und sorgt für die Übernahme der vereinzelten Werkstücke aus der Endposition des Stapelmagazin.",


   /* NOTE PopUp Legende */
   "legende_h" => "Legende zu den Bildfarben",
   "legende_subtitle" => "Definition der Farben in den Einzelansichten",

   "legende_table_header1" => "Bezeichnung Aktor / Sensor",
   "legende_table_header2" => "Farbe",

   "legende1.1" => "Lichtschranke",
   "legende2.1" => "Motor",
   "legende3.1" => "Taster/Anschlag",
   "legende4.1" => "Schalter",
   "legende5.1" => "Leuchte",
   "legende6.1" => "Farbsensor",


   /* NOTE Footer */
   "footer1" => "Copyright",
   "footer2" => "Repräsentiert durch",


);
