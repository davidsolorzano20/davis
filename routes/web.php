<?php
use \Davis\http\thunder\route\router\Routing;
use \Davis\views\Views;

Routing::get('/', function () {
	Views::go('welcome.davis');
});

//Routing::get('/', 'IndexController@Index');
