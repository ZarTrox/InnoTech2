<div class="header">
    <div class="header_brand">
        <a href="#overview">
            <img class="header_logo" src="./media/img/logo/Logo.svg" alt="Logo">
        </a>
    </div>

    <div class="overview_light_container">
        <img class="overview_light" src="./media/img/ampel/Ampelfarbeaus.svg" alt="Ampel">
    </div>

    <div class="header_links header_large">
        <div>
            <a href="#overview"><?php echo $lang['header1'] ?></a>
        </div>
        <div class="dropdown">
            <div class="dropbtn"><?php echo $lang['header2'] ?></div>
            <div class="dropdown-content">
                <a href="#Hochregallager"><?php echo $lang['header2.1'] ?></a>
                <a href="#Sauggreifer"><?php echo $lang['header2.2'] ?></a>
                <a href="#Brennofen"><?php echo $lang['header2.3'] ?></a>
                <a href="#Sortierstrecke"><?php echo $lang['header2.4'] ?></a>
                <a href="#Wipphebel"><?php echo $lang['header2.5'] ?></a>
            </div>
        </div>
        <div>
            <a href="#legende" data-toggle="modal" class="animated-button">
                <?php echo $lang['header3'] ?>
            </a>
        </div>

        <div class="flag_large_screen">
            <a href="?lang=de">
                <img src="./media/img/flag/de.svg" class="flag">
            </a>

            <a href="?lang=en">
                <img src="./media/img/flag/us.svg" class="flag">
            </a>
        </div>



    </div>



    <!-- Small Screen-->
    <div class="header_small">
        <a class="nav__trigger pointer"><span class="nav__icon pointer"></span></a>
        <nav class="nav">
            <ul class="nav__list mr-auto ml-auto mt-5">
                <li class="nav__item">
                    <a class="nav__link" href="#overview">
                        <?php echo $lang['header1'] ?>
                    </a>
                </li>
                <li class="nav__item">
                    <div class="dropdown">
                        <div class="dropbtn">
                            <?php echo $lang['header2'] ?>
                        </div>
                        <div class="dropdown-content">
                            <a class="nav__link" href="#Hochregallager"><?php echo $lang['header2.1'] ?></a>
                            <a class="nav__link" href="#Sauggreifer"><?php echo $lang['header2.2'] ?></a>
                            <a class="nav__link" href="#Brennofen"><?php echo $lang['header2.3'] ?></a>
                            <a class="nav__link" href="#Sortierstrecke"><?php echo $lang['header2.4'] ?></a>
                            <a class="nav__link" href="#Wipphebel"><?php echo $lang['header2.5'] ?></a>
                        </div>
                    </div>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#legende" data-toggle="modal" class="animated-button">
                        <?php echo $lang['header2.3'] ?>
                    </a>
                </li>

                <li class="nav__item">
                    <div class="nav__link">
                        <a href="?lang=de">
                            <img src="./media/img/flag/de.svg" class="flag">
                        </a>

                        <a href="?lang=en">
                            <img src="./media/img/flag/us.svg" class="flag">
                        </a>
                    </div>
                </li>


            </ul>
        </nav>
    </div>


</div>



<script>
    $('.nav__trigger').on('click', function(e) {
        $(this).parent().toggleClass('nav--active');
    });
    $('.nav__link').on('click', function(e) {
        $('.header_small').toggleClass('nav--active');
    });





    window.addEventListener('scroll', (e) => {
        const nav = document.querySelector('.header');
        if (window.pageYOffset > 0) {
            nav.classList.add("add-shadow");
        } else {
            nav.classList.remove("add-shadow");
        }
    });
</script>