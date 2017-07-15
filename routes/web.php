<?php
use \Davis\http\thunder\route\router\Routing;

Routing::get('/', 'IndexController@Index');
Routing::post('/data/form', 'IndexController@Form');
Routing::put('/put/{id}', 'IndexController@Parameters2');
Routing::delete('/delete/[id]', 'IndexController@Parameters');
