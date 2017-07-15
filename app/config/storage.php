<?php
/*
|-------------------------------------------------------------------------|
| Config database																													|
|-------------------------------------------------------------------------|
*/
/**
 * @params $storage;
**/

/*$storage = [
	'folder' => 'folder_name',
	'root' => 'storage/web'
];*/

$storage = [
	'drive' => [
		'local' => [
			'folder' => '',
			'root' => 'storage/local'
		],
		'web' => [
			'folder' => 'photos',
			'root' => 'storage/web'
		]
	]
];
