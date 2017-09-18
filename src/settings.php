<?php
return [
	'settings' => [
		'displayErrorDetails' => true, // set to false in production
		'addContentLengthHeader' => false, // Allow the web server to send the content-length header
		'determineRouteBeforeAppMiddleware' => false,

		// Renderer settings
		'renderer' => [
			'template_path' => __DIR__ . '/../templates/',
		],

		// Monolog settings
		'logger' => [
			'name' => 'slim-app',
			'path' => __DIR__ . '/../logs/app.log',
			'level' => \Monolog\Logger::DEBUG,
		],

		// Database
		'db' => [
			'driver'    => 'mysql',
			'host'      => 'localhost',
			'port'      => '3306',
			'database'  => 'app-pic',
			'username'  => 'root',
			'password'  => '',
			'charset'   => 'utf8mb4',
			'collation' => 'utf8mb4_unicode_ci',
			'prefix'    => '',
		],
	],
];
