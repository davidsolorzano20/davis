<?php

$routing->get('/', 'IndexController@Index');
$routing->get('/luis/{id}', 'IndexController@Parameters');
$routing->post('/data/form', 'IndexController@Form');

