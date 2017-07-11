<?php
/**
 * Created by PhpStorm.
 * User: Luis Solorzano
 * Date: 08-20-16
 * Time: 10:42 PM
 */
require __DIR__ . '/vendor/autoload.php';
use \Davis\http\thunder\route\router\Routing;
$routing = new Routing();
require __DIR__ . '/routes/web.php';
$routing->start();
\Davis\loader\Loader::Load();