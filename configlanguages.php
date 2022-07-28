<?php

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if (!isset($_SESSION['lang'])) {
    if ($lang == "de") {
        $_SESSION['lang'] = "de";
    } elseif ($lang == "en") {
        $_SESSION['lang'] = "en";
    } elseif ($lang == "zh-CN") {
        $_SESSION['lang'] = "zh-CN";
    } else {
        $_SESSION['lang'] = "en";
    }
} else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
    if ($_GET['lang'] == "de")
        $_SESSION['lang'] = "de";
    else if ($_GET['lang'] == "en")
        $_SESSION['lang'] = "en";
    else if ($_GET['lang'] == "zh-CN")
        $_SESSION['lang'] = "zh-CN";
    else {
        $_SESSION['lang'] = "en";
    }
};
include "language/" . $_SESSION['lang'] . ".php";
