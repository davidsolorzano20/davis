<?php

$routing->get('/', 'IndexController@Index');
$routing->get('/luis/{id}', 'IndexController@IndexPost');
$routing->get('/user/login', 'IndexController@Login');

