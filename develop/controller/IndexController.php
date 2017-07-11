<?php
/**
 * Created by PhpStorm.
 * User: luis
 * Date: 08-21-16
 * Time: 02:38 PM
 */

namespace Develop\controller;

use Davis\core\collection\input\Input;
use Davis\core\http\request\Request;
use Davis\core\views\Views;
use Davis\core\controller\DavisController;

class IndexController extends DavisController {

	public function Index() {
			return Views::go('home.davis');
	}

	public function Parameters($id) {
		echo $id;
	}

	public function Form(Request $request) {
		$name = $request->input('name');
		echo $name;
	}

}
