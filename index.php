<?php
/**
 * Created by PhpStorm.
 * User: Luis Solorzano
 * Date: 08-20-16
 * Time: 10:42 PM
 */
require __DIR__ . '/vendor/autoload.php';
\Davis\http\thunder\route\router\Routing::Load();
\Davis\loader\Loader::Routing();
\Davis\http\thunder\route\router\Routing::start();
\Davis\loader\Loader::Load();
