<?php
/**
 * Created by PhpStorm.
 * User: Luis Solorzano
 * Date: 08-20-16
 * Time: 10:42 PM
 */
require __DIR__ . '/vendor/autoload.php';
use \Davis\core\http\thunder\route\router\Routing;
$routing = new Routing();
require __DIR__ . '/routes/web.php';
require __DIR__ . '/web/loader.php';