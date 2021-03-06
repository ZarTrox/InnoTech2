<div class="header">
    <div class="header_brand">
        <a href="#overview">
            <img class="header_logo" src="./media/img/logo/Logo.svg" alt="Logo">
            <p class="header_logo_subtitle">
                <?php echo $lang['header_logo_subtitle'] ?>
            </p>
        </a>
    </div>

    <div class="header_light_container">
        <div id="ampel_header_1"></div>
        <div id="ampel_header_2"></div>
        <div id="ampel_header_3"></div>
        <div id="ampel_header_4"></div>
    </div>

    <div class="header_links header_large">
        <div>
            <a href="#overview">
                <?php echo $lang['header1'] ?>
            </a>
        </div>
        <div>
            <a href="#live_status">
                <?php echo $lang['header2'] ?>
            </a>
        </div>
        <div class="dropdown">
            <div class="dropbtn"><?php echo $lang['header3'] ?></div>
            <div class="dropdown-content">
                <a href="#Hochregal"><?php echo $lang['module1'] ?></a>
                <a href="#Sauggreifer"><?php echo $lang['module2'] ?></a>
                <a href="#Brennofen"><?php echo $lang['module3'] ?></a>
                <a href="#Sortier"><?php echo $lang['module4'] ?></a>
                <a href="#Umsetzer"><?php echo $lang['module5'] ?></a>
            </div>
        </div>
        <div>
            <a href="#legende" data-toggle="modal" class="animated-button">
                <?php echo $lang['header4'] ?>
            </a>
        </div>


        <div class="flag_large_screen">
            <a href="?lang=de">
                <img src="./media/img/flag/de.svg" class="flag">
            </a>

            <a href="?lang=en">
                <img src="./media/img/flag/us.svg" class="flag">
            </a>

            <a href="?lang=zh-CN">
                <img src="./media/img/flag/zh-CN.svg" class="flag">
            </a>
        </div>



    </div>



    <!-- Small Screen-->
    <div class="header_small">
        <a class="nav__trigger pointer"><span class="nav__icon pointer"></span></a>
        <nav class="nav" style="display: none;">
            <ul class="nav__list mr-auto ml-auto mt-5">
                <li class="nav__item">
                    <a class="nav__link" href="#overview">
                        <?php echo $lang['header1'] ?>
                    </a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#live_status">
                        <?php echo $lang['header2'] ?>
                    </a>
                </li>
                <li class="nav__item">
                    <div class="dropdown">
                        <div class="dropbtn">
                            <?php echo $lang['header3'] ?>
                        </div>
                        <div class="dropdown-content">
                            <a class="nav__link" href="#Hochregal"><?php echo $lang['module1'] ?></a>
                            <a class="nav__link" href="#Sauggreifer"><?php echo $lang['module2'] ?></a>
                            <a class="nav__link" href="#Brennofen"><?php echo $lang['module3'] ?></a>
                            <a class="nav__link" href="#Sortier"><?php echo $lang['module4'] ?></a>
                            <a class="nav__link" href="#Umsetzer"><?php echo $lang['module5'] ?></a>
                        </div>
                    </div>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#legende" data-toggle="modal" class="animated-button">
                        <?php echo $lang['header4'] ?>
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

                        <a href="?lang=zh-CN">
                            <img src="./media/img/flag/zh-CN.svg" class="flag">
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


    $(".nav__trigger").click(function() {
        $(".nav").toggle();
    });
    $(".nav__link").click(function() {
        $(".nav").toggle();
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