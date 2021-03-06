<?php session_start(); ?>

<!-- ** Languages ** -->
<?php include('configlanguages.php'); ?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php echo $lang['title'] ?>
    </title>

    <meta name="robots" content="noindex, nofollow, nosnippet">

    <script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
    <script src="./js/main.js"></script>


    <!-- Loadings -->
    <?php include('./incl/loadfiles.php') ?>
    <?php include('./incl/popup.php'); ?>


</head>

<body>
    <!-- NOTE Header -->
    <?php include('./incl/header.php') ?>


    <!-- NOTE Gesamtübersicht -->
    <div id="overview" class="header_placeholder">


        <h1>
            <?php echo $lang['header1'] ?>
        </h1>
        <p class="text-center m-0">
            <?php echo $lang['overview_description'] ?>
        </p>

        <div class="row m-0 p-0">


            <div class="col-12 col-md-6">

                <?php
                if ($_SESSION['lang'] == "de") {
                    echo "<div id=\"GesamtueberblickSvg0\" alt=\"Gesamtübersicht Fischer Technik\"></div>";
                } elseif ($_SESSION['lang'] == "en") {
                    echo "<div id=\"GesamtueberblickSvg1\" alt=\"Gesamtübersicht Fischer Technik\"></div>";
                } elseif ($_SESSION['lang'] == "zh-CN") {
                    echo "<div id=\"GesamtueberblickSvg2\" alt=\"Gesamtübersicht Fischer Technik\"></div>";
                } else {
                    echo "<div id=\"GesamtueberblickSvg3\" alt=\"Gesamtübersicht Fischer Technik\"></div>";
                }
                ?>

            </div>

            <div class="col-12 col-md-6">
                <?php
                if ($_SESSION['lang'] == "de") {
                    echo "<div id=\"FestoUebersichtSvg0\" alt=\"Gesamtübersicht Festo\"></div>";
                } elseif ($_SESSION['lang'] == "en") {
                    echo "<div id=\"FestoUebersichtSvg1\" alt=\"Gesamtübersicht Festo\"></div>";
                } elseif ($_SESSION['lang'] == "zh-CN") {
                    echo "<div id=\"FestoUebersichtSvg2\" alt=\"Gesamtübersicht Festo\"></div>";
                } else {
                    echo "<div id=\"FestoUebersichtSvg3\" alt=\"Gesamtübersicht Festo\"></div>";
                }
                ?>

            </div>




        </div>



    </div>

    <!-- NOTE Live Status -->

    <div id="live_status" class="header_placeholder">
        <h1 style="margin-bottom: -70px;">
            <?php echo $lang['header2'] ?>
        </h1>

        <div class="row m-0 justify-content-center header_placeholder">

            <!-- 1. Hochregallager -->
            <div class="col-12 col-md-6 col-lg-3 large-grid oder-1 order-xl-2 p-0 card_live_status">
                <div class="m-1">
                    <h4>
                        <?php echo $lang['module1'] ?>
                    </h4>
                    <table>
                        <tr>
                            <th>
                                <?php echo $lang['table_h1'] ?>
                            </th>
                            <th id="table_width_one">
                                <?php echo $lang['table_h2'] ?>
                            </th>
                        </tr>
                        <?php include('./incl/module1.php'); ?>
                    </table>
                </div>
            </div>


            <!-- 4. Sortierstrecke -->
            <div class="col-12 col-md-6 col-lg-3 large-grid oder-1 order-xl-2 p-0 card_live_status">
                <div class="m-1">
                    <h4>
                        <?php echo $lang['module4'] ?>
                    </h4>
                    <table>
                        <tr>
                            <th>
                                <?php echo $lang['table_h1'] ?>
                            </th>
                            <th id="table_width_four">
                                <?php echo $lang['table_h2'] ?>
                            </th>
                        </tr>
                        <?php include('./incl/module4.php'); ?>
                    </table>
                </div>
            </div>


            <!-- 2. Sauggreifer -->
            <div class="col-12 col-md-6 col-lg-3 large-grid oder-1 order-xl-2 p-0 card_live_status">
                <div class="m-1">
                    <h4>
                        <?php echo $lang['module2'] ?>
                    </h4>
                    <table>
                        <tr>
                            <th>
                                <?php echo $lang['table_h1'] ?>
                            </th>
                            <th id="table_width_two">
                                <?php echo $lang['table_h2'] ?>
                            </th>
                        </tr>
                        <?php include('./incl/module2.php'); ?>
                    </table>
                </div>
            </div>

            <!-- 5. Umsetzer -->
            <div class="col-12 col-md-6 col-lg-3 large-grid oder-1 order-xl-2 p-0 card_live_status">
                <div class="m-1">
                    <h4>
                        <?php echo $lang['module5'] ?>
                    </h4>
                    <table>
                        <tr>
                            <th>
                                <?php echo $lang['table_h1'] ?>
                            </th>
                            <th id="table_width_five">
                                <?php echo $lang['table_h2'] ?>
                            </th>
                        </tr>
                        <?php include('./incl/module5.php'); ?>
                    </table>
                </div>
            </div>

            <!-- 3. Brennofen -->
            <div class="col-12 oder-2 order-xl-1 large-grid p-0 card_live_status">
                <div class="m-1">
                    <h4>
                        <?php echo $lang['module3'] ?>
                    </h4>
                    <table>
                        <tr>
                            <th>
                                <?php echo $lang['table_h1'] ?>
                            </th>
                            <th id="table_width_three">
                                <?php echo $lang['table_h2'] ?>
                            </th>
                        </tr>
                        <?php include('./incl/module3.php'); ?>
                    </table>
                </div>
            </div>


        </div>


    </div>

    <!-- NOTE Einzelübersicht -->
    <div id="single_view" class="container_single_view header_placeholder">
        <h1 style="margin-bottom: -70px;">
            <?php echo $lang['header3'] ?>
        </h1>

        <!-- 1. Hochregallager -->
        <div id="Hochregal" class="container_single_part header_placeholder">
            <h2 class="mt-5 mb-5">
                <?php echo $lang['module1'] ?>
            </h2>
            <div class="container">
                <div class="row">

                    <!-- Bild -->
                    <div class="col-12 col-lg-6">
                        <div id="HochregallagerSvg" class="single_pic" alt="Part Hochregallager"></div>
                    </div>

                    <!-- Status Sensoren & Aktoren -->
                    <div class="col-12 col-lg-6">

                        <div class="">
                            <h4>
                                <?php echo $lang['single_view_h3'] ?>
                            </h4>
                            <table class="single_view_table">
                                <tr>
                                    <th>
                                        <?php echo $lang['table_h1'] ?>
                                    </th>
                                    <th id="table_width_six">
                                        <?php echo $lang['table_h2'] ?>
                                    </th>
                                </tr>
                                <?php include('./incl/module1.php'); ?>
                            </table>



                        </div>
                    </div>

                    <!-- Beschreibung -->
                    <div class="col-12">
                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h1'] ?>
                        </h4>
                        <p>
                            <?php echo $lang['single_view_h1.2'] ?>
                        </p>

                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h2'] ?>
                        </h4>
                        <p class="text-justify">
                            <?php echo $lang['module1_desc'] ?>
                        </p>
                    </div>


                </div>
            </div>
        </div>

        <!-- End 1. -->

        <!-- 2. Sauggreifer -->
        <div id="Sauggreifer" class="container_single_part header_placeholder">
            <h2 class="mb-5">
                <?php echo $lang['module2'] ?>
            </h2>

            <div class="container">
                <div class="row">

                    <!-- Bild -->
                    <div class="col-12 col-lg-6">
                        <div class="single_pic" id="Vakuum" alt="Part Sauggreifer"></div>
                        <img src="./media/img/Hochregallager seitlich fuer sauggreifer.svg" class="sauggreifer_hochregal_pos">
                    </div>

                    <!-- Status Sensoren & Aktoren -->
                    <div class="col-12 col-lg-6">
                        <div class="">
                            <h4>
                                <?php echo $lang['single_view_h3'] ?>
                            </h4>
                            <table class="single_view_table">
                                <tr>
                                    <th>
                                        <?php echo $lang['table_h1'] ?>
                                    </th>
                                    <th id="table_width_seven">
                                        <?php echo $lang['table_h2'] ?>
                                    </th>
                                </tr>
                                <?php include('./incl/module2.php'); ?>
                            </table>



                        </div>
                    </div>

                    <!-- Beschreibung -->
                    <div class="container">
                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h1'] ?>
                        </h4>
                        <p>
                            <?php echo $lang['single_view_h1.2'] ?>
                        </p>

                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h2'] ?>
                        </h4>
                        <p class="text-justify">
                            <?php echo $lang['module2_desc'] ?>
                        </p>
                    </div>


                </div>
            </div>
        </div>

        <!-- End 2. -->

        <!-- 3. Brennofen -->
        <div id="Brennofen" class="container_single_part header_placeholder">
            <h2 class="mb-5">
                <?php echo $lang['module3'] ?>
            </h2>

            <div class="container ">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <!-- Bild -->
                        <div class="single_pic" id="BrennOfenSvg" alt="Part Brennofen"></div>
                        <!-- Beschreibung -->
                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h1'] ?>
                        </h4>
                        <p>
                            <?php echo $lang['single_view_h1.1'] ?>
                        </p>

                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h2'] ?>
                        </h4>

                        <p class="text-justify">
                            <?php echo $lang['module3_desc'] ?>
                        </p>


                    </div>

                    <!-- Status Sensoren & Aktoren -->
                    <div class="col-12 col-lg-6">
                        <div class="">
                            <h4>
                                <?php echo $lang['single_view_h3'] ?>
                            </h4>
                            <table class="single_view_table">
                                <tr>
                                    <th>
                                        <?php echo $lang['table_h1'] ?>
                                    </th>
                                    <th id="table_width_eight">
                                        <?php echo $lang['table_h2'] ?>
                                    </th>
                                </tr>
                                <?php include('./incl/module3.php'); ?>
                            </table>


                        </div>
                    </div>


                </div>
            </div>
        </div>

        <!-- End 3. -->

        <!-- 4. Sortierstrecke -->
        <div id="Sortier" class="container_single_part header_placeholder">
            <h2 class="mb-5">
                <?php echo $lang['module4'] ?>
            </h2>

            <div class="container ">
                <div class="row">

                    <!-- Bild -->
                    <div class="col-12 col-lg-6">
                        <div class="single_pic" id="SortierstreckeSvg" alt="Part Sortierstrecke"></div>
                    </div>

                    <!-- Status Sensoren & Aktoren -->
                    <div class="col-12 col-lg-6">
                        <div class="single_view_table">
                            <h4>
                                <?php echo $lang['single_view_h3'] ?>
                            </h4>
                            <table class="">
                                <tr>
                                    <th>
                                        <?php echo $lang['table_h1'] ?>
                                    </th>
                                    <th id="table_width_nine">
                                        <?php echo $lang['table_h2'] ?>
                                    </th>
                                </tr>
                                <?php include('./incl/module4.php'); ?>
                            </table>



                        </div>
                    </div>

                    <!-- Beschreibung -->
                    <div class="container">
                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h1'] ?>
                        </h4>
                        <p>
                            <?php echo $lang['single_view_h1.3'] ?>
                        </p>

                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h2'] ?>
                        </h4>
                        <p class="text-justify">
                            <?php echo $lang['module4_desc'] ?>
                        </p>
                    </div>


                </div>
            </div>
        </div>

        <!-- End 4. -->

        <!-- 5. Umsetzer -->
        <div id="Umsetzer" class="container_single_part header_placeholder">
            <h2 class="mb-5">
                <?php echo $lang['module5'] ?>
            </h2>

            <div class="container ">
                <div class="row">

                    <!-- Bild -->
                    <div class="col-12 col-lg-6" style="display: flex;">
                        <div class="col-6">
                            <img src="./media/img/Stapelmagazin.svg" class="single_pic" alt="Stapelmagazin">
                        </div>
                        <div class="col-6">
                            <div class="single_pic" id="UmsetzerSvg" alt="Part Umsetzer"></div>
                        </div>
                    </div>

                    <!-- Status Sensoren & Aktoren -->
                    <div class="col-12 col-lg-6">
                        <div class="">
                            <h4>
                                <?php echo $lang['single_view_h3'] ?>
                            </h4>

                            <table class="single_view_table">
                                <tr>
                                    <th>
                                        <?php echo $lang['table_h1'] ?>
                                    </th>
                                    <th id="table_width_ten">
                                        <?php echo $lang['table_h2'] ?>
                                    </th>
                                </tr>
                                <?php include('./incl/module5.php'); ?>
                            </table>



                        </div>
                    </div>

                    <!-- Beschreibung -->
                    <div class="container">
                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h1'] ?>
                        </h4>
                        <p>
                            <?php echo $lang['single_view_h1.2'] ?>
                        </p>

                        <h4 class="mt-3">
                            <?php echo $lang['single_view_h2'] ?>
                        </h4>
                        <p class="text-justify">
                            <?php echo $lang['module5_desc'] ?>
                        </p>
                    </div>


                </div>
            </div>
        </div>

        <!-- End 5. -->




    </div>



    <script>
        $(document).ready(function() {

            var width = Math.min($("#table_width_one").width(), $("#table_width_two").width(), $("#table_width_three").width(), $("#table_width_four").width(), $("#table_width_five").width());
            $("#table_width_one").width(width);
            $("#table_width_two").width(width);
            $("#table_width_three").width(width);
            $("#table_width_four").width(width);
            $("#table_width_five").width(width);


            var width = Math.min($("#table_width_six").width(), $("#table_width_seven").width(), $("#table_width_eight").width(), $("#table_width_nine").width(), $("#table_width_ten").width());
            $("#table_width_six").width(width);
            $("#table_width_seven").width(width);
            $("#table_width_eight").width(width);
            $("#table_width_nine").width(width);
            $("#table_width_ten").width(width);

        });
    </script>

    <script>
        getData();
    </script>

    <!-- Footer -->
    <?php include('./incl/footer.php') ?>



</body>

</html>