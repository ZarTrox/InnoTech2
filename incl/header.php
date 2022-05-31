<div class="header">
    <div class="header_brand">
        <a href="#overview">
            Awesome team!
        </a>
    </div>

    <div class="header_links header_large">
        <div>
            <a href="#overview">Gesamtübersicht</a>
        </div>
        <div class="dropdown">
            <div class="dropbtn">Einzelübersicht</div>
            <div class="dropdown-content">
                <a href="#schwenkarm">Schwenkarm</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        <div>
            <a href="#">
                Live Status
            </a>
        </div>


    </div>



    <!-- Small Screen-->
    <div class="iphone style-6 header_small">
        <div class="iphone__power-btn"></div>
        <div class="iphone__left-btn"></div>
        <div class="iphone__details"></div>
        <div class="iphone__screen">
            <a href="#" class="nav__trigger"><span class="nav__icon"></span></a>
            <nav class="nav">
                <ul class="nav__list mr-auto ml-auto">
                    <li class="nav__item"><a class="nav__link" href="#overview">Gesamtübersicht</a></li>
                    <li class="nav__item">
                        <div class="dropdown">
                            <div class="dropbtn">Einzelübersicht</div>
                            <div class="dropdown-content">
                                <a class="nav__link" href="#schwenkarm">Schwenkarm</a>
                                <a class="nav__link" href="#">Link 2</a>
                                <a class="nav__link" href="#">Link 3</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav__item"><a class="nav__link" href="#">Portfolio</a></li>
                    <li class="nav__item"><a class="nav__link" href="#">Blog</a></li>
                    <li class="nav__item"><a class="nav__link" href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div class="iphone__content"></div>
        </div>
        <div class="iphone__home-btn"></div>
    </div>


</div>



<script>
    $('.nav__trigger').on('click', function(e) {
        $(this).parent().toggleClass('nav--active');
    });
    $('.nav__link').on('click', function(e) {
        $('.iphone__screen').toggleClass('nav--active');
    });
</script>