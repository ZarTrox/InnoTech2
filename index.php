<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Aufgabe 1 - Innovation Technology II
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
                <div class="col-12 col-xl-6">
                    <img class="overview_pic" src="./media/img/Gesamtübersicht.png" alt="Gesamtübersicht der Anlage">
                </div>
                <div class="col-12 col-xl-6">
                    <table class="overview_table">
                        <tr>
                            <th>Beschreibung</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Hochregallager</td>
                            <td>O.k.</td>
                        </tr>
                        <tr>
                            <td>Sauggreifer</td>
                            <td>Error</td>
                        </tr>
                        <tr>
                            <td>Brennofen</td>
                            <td>Error</td>
                        </tr>
                        <tr>
                            <td>Sortierstrecke</td>
                            <td>O.k.</td>
                        </tr>
                        <tr>
                            <td>Wipp-Hebel</td>
                            <td>O.k.</td>
                        </tr>
                    </table>
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
                        <img class="single_pic" src="./media/img/Hochregallager.svg" alt="Part Hochregallager">
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
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>O.k.</td>
                                </tr>
                            </table>
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
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>O.k.</td>
                                </tr>
                            </table>
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
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>O.k.</td>
                                </tr>
                            </table>
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
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>O.k.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- End 4. -->

        <!-- 5. -->
        <div id="Wipp-Hebel" class="container_single_part header_placeholder">
            <h2>
                Wipp-Hebel
            </h2>

            <div class="container pt-5 pb-5">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <img class="single_pic" src="./media/img/Wipp-Hebel.png" alt="Part Wipp-Hebel">
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
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sensor 1</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 2</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 3</td>
                                    <td>Error</td>
                                </tr>
                                <tr>
                                    <td>Sensor 4</td>
                                    <td>O.k.</td>
                                </tr>
                                <tr>
                                    <td>Sensor 5</td>
                                    <td>O.k.</td>
                                </tr>
                            </table>
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