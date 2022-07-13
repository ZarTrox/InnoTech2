<?php

if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    if ($_GET['lang'] == "de") {
        $_SESSION['lang'] = "de";
    } elseif ($_GET['lang'] == "en") {
        $_SESSION['lang'] = "en";
    } elseif ($_GET['lang'] == "zh-CN") {
        $_SESSION['lang'] = "cn";
    } else {
        $_SESSION['lang'] = "en";
    }
} else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
    if ($_GET['lang'] == "de")
        $_SESSION['lang'] = "de";
    else if ($_GET['lang'] == "en")
        $_SESSION['lang'] = "en";
    else if ($_GET['lang'] == "zh-CN")
        $_SESSION['lang'] = "cn";
    else {
        $_SESSION['lang'] = "en";
    }
} else {
    $_SESSION['lang'] = "en";
};

include "language/" . $_SESSION['lang'] . ".php";
