<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function index(Request $request){
        return response([
            'hello' => 'world',
        ], 200);
    }

    public function authenticated(Request $request){
        return response([
            'top' => 'secret',
        ], 200);
    }
}
