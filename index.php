<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Team 1 - Aufgabe 1 - Innovation Technology II
    </title>

    <meta name="robots" content="noindex, nofollow, nosnippet">

    <!--
   <meta name="robots" content="index, follow">
   <meta name="robots" content="all">
   <meta name="revisit-after" content="7 days">
    -->

    <meta name="keywords" content="">
    <meta name="description" content="">

    <script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
    <script src="./js/main.js"></script>


    <!-- Loadings -->
    <?php include('./incl/loadfiles.php') ?>
    <?php include('./incl/cards.php'); ?>


</head>

<body>
    <!-- NOTE Header -->
    <?php include('./incl/header.php') ?>


    <!-- NOTE overview -->
    <div id="overview" class="container_overview header_placeholder">


        <h1>
            Gesamtübersicht
        </h1>

        <div class="container pt-5 pb-5">
            <div class="row">
                <div class="col-12">
                    <img class="overview_pic" src="./media/img/Gesamtübersicht.png" alt="Gesamtübersicht der Anlage">
                </div>
            </div>
        </div>



    </div>


    <!-- NOTE single_view -->
    <div id="single_view" class="container_single_view ">
        <h1 style="margin-bottom: -70px;">
            Einzelübersicht
        </h1>

        <!-- 1. -->
        <div id="Hochregallager" class="container_single_part header_placeholder">
            <h2>
                Hochregallager
            </h2>
            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <!--<img class="single_pic" src="./media/img/Hochregallager.svg" alt="Part Hochregallager">-->
                        <div id = "HochregallagerSvg" alt="Part Hochregallager"></div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Beschreibung:
                        </p>

                        <div class="mt-5">
                            <p>
                                Status der Sensoren & Aktoren:
                            </p>
                            <table class="">
                                <tr>
                                    <th>Beschreibung</th>
                                    <th>Aktiv</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Ja</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>Nein</td>
                                </tr>
                            </table>

<!--
                            <a href="#legende" data-toggle="modal" class="animated-button">
                                <div class="mt-3 mb-3">
                                    <button class="learn-more">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">
                                            Legende Einzelansicht
                                        </span>
                                    </button>
                                </div>
                            </a>
-->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 1. -->

        <!-- 2. -->
        <div id="Sauggreifer" class="container_single_part header_placeholder">
            <h2>
                Sauggreifer
            </h2>

            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="single_pic" src="./media/img/Sauggreifer.png" alt="Part Sauggreifer">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Beschreibung:
                        </p>
                        <div class="mt-5">
                            <p>
                                Status der Sensoren & Aktoren:
                            </p>
                            <table class="">
                                <tr>
                                    <th>Beschreibung</th>
                                    <th>Aktiv</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Ja</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>Nein</td>
                                </tr>
                            </table>

                            <!-- 
                            <a href="#legende" data-toggle="modal" class="animated-button">
                                <div class="mt-3 mb-3">
                                    <button class="learn-more">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">
                                            Legende Einzelansicht
                                        </span>
                                    </button>
                                </div>
                            </a>
                            -->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 2. -->

        <!-- 3. -->
        <div id="Brennofen" class="container_single_part header_placeholder">
            <h2>
                Brennofen
            </h2>

            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="single_pic" src="./media/img/Brennofen.png" alt="Part Brennofen">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Beschreibung:
                        </p>
                        <div class="mt-5">
                            <p>
                                Status der Sensoren & Aktoren:
                            </p>
                            <table class="">
                                <tr>
                                    <th>Beschreibung</th>
                                    <th>Aktiv</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Ja</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>Nein</td>
                                </tr>
                            </table>

                            <!-- 
                            <a href="#legende" data-toggle="modal" class="animated-button">
                                <div class="mt-3 mb-3">
                                    <button class="learn-more">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">
                                            Legende Einzelansicht
                                        </span>
                                    </button>
                                </div>
                            </a>
                            -->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 3. -->

        <!-- 4. -->
        <div id="Sortierstrecke" class="container_single_part header_placeholder">
            <h2>
                Sortierstrecke
            </h2>

            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="single_pic" src="./media/img/Sortierstrecke.png" alt="Part Sortierstrecke">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Beschreibung:
                        </p>
                        <div class="mt-5">
                            <p>
                                Status der Sensoren & Aktoren:
                            </p>
                            <table class="">
                                <tr>
                                    <th>Beschreibung</th>
                                    <th>Aktiv</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Ja</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>Nein</td>
                                </tr>
                            </table>

                            <!-- 
                            <a href="#legende" data-toggle="modal" class="animated-button">
                                <div class="mt-3 mb-3">
                                    <button class="learn-more">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">
                                            Legende Einzelansicht
                                        </span>
                                    </button>
                                </div>
                            </a>
                            -->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 4. -->

        <!-- 5. -->
        <div id="Wipphebel" class="container_single_part header_placeholder">
            <h2>
                Wipphebel
            </h2>

            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="single_pic" src="./media/img/WWipphebel.svg" alt="Part Wipphebel">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Beschreibung:
                        </p>
                        <div class="mt-5">
                            <p>
                                Status der Sensoren & Aktoren:
                            </p>
                            <table class="">
                                <tr>
                                    <th>Beschreibung</th>
                                    <th>Aktiv</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Ja</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>Nein</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>Nein</td>
                                </tr>
                            </table>

                            <!-- 
                            <a href="#legende" data-toggle="modal" class="animated-button">
                                <div class="mt-3 mb-3">
                                    <button class="learn-more">
                                        <span class="circle" aria-hidden="true">
                                            <span class="icon arrow"></span>
                                        </span>
                                        <span class="button-text">
                                            Legende Einzelansicht
                                        </span>
                                    </button>
                                </div>
                            </a>
                            -->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 5. -->




    </div>



    <!-- NOTE live_status -->
    <div id="live_status" class="container_live_status">




    </div>

    <div id="svgcontainer"> </div>
    <script>
        getData();
    </script>

    <!-- Footer -->
    <?php include('./incl/footer.php') ?>



</body>

</html>