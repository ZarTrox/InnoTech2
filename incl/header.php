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
            <a href="#overview">Gesamtübersicht</a>
        </div>
        <div class="dropdown">
            <div class="dropbtn">Einzelübersicht</div>
            <div class="dropdown-content">
                <a href="#Hochregallager">Hochregallager</a>
                <a href="#Sauggreifer">Sauggreifer</a>
                <a href="#Brennofen">Brennofen</a>
                <a href="#Sortierstrecke">Sortierstrecke</a>
                <a href="#Wipphebel">Wipphebel</a>
            </div>
        </div>
        <!--
        <div>
            <a href="#legende" data-toggle="modal" class="animated-button">
                Legende Einzelansicht
            </a>
        </div>
        <-->


    </div>



    <!-- Small Screen-->
    <div class="header_small">
        <a class="nav__trigger pointer"><span class="nav__icon pointer"></span></a>
        <nav class="nav">
            <ul class="nav__list mr-auto ml-auto mt-5">
                <li class="nav__item">
                    <a class="nav__link" href="#overview">
                        Gesamtübersicht
                    </a>
                </li>
                <li class="nav__item">
                    <div class="dropdown">
                        <div class="dropbtn">
                            Einzelübersicht
                        </div>
                        <div class="dropdown-content">
                            <a class="nav__link" href="#Hochregallager">Hochregallager</a>
                            <a class="nav__link" href="#Sauggreifer">Sauggreifer</a>
                            <a class="nav__link" href="#Brennofen">Brennofen</a>
                            <a class="nav__link" href="#Sortierstrecke">Sortierstrecke</a>
                            <a class="nav__link" href="#Wipphebel">Wipphebel</a>
                        </div>
                    </div>
                </li>
                <!--
                <li class="nav__item">
                    <a class="nav__link" href="#legende" data-toggle="modal" class="animated-button">
                        Legende Einzelansicht
                    </a>
                </li>
                -->

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