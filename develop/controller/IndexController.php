<?php
/**
 * Created by PhpStorm.
 * User: luis
 * Date: 08-21-16
 * Time: 02:38 PM
 */

namespace Develop\controller;

use Davis\http\redirect\Redirect;
use Davis\http\request\Request;
use Davis\storage\Storage;
use Davis\views\Views;
use Davis\controller\DavisController;

class IndexController extends DavisController {

	public function Index() {
		return Views::go('welcome.davis');
	}

	public function Parameters() {
		$request = new Request();
		$name_image = $request->file()->getName('name');
		echo $name_image;
	}
	public function Parameters2($id) {
		echo $id;
	}

	public function Form() {
		$request = new Request();
		$name_image = $request->file()->getName('name');
		$path = $request->file()->getPathFile('name');

		Storage::drive('web')->upload(time().$name_image, $path);
		Redirect::go('luis/'.$name_image);
	}

}
