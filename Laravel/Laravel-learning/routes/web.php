<?php

use App\Http\Controllers\AgeController;
use Illuminate\Support\Facades\Route;

/*Route::get('/', function () {
    return view('welcome');
});

Route::get('/age/{age}', [AgeController::class, 'check']);*/

Route::get('/bonjour', function () {
    return view('bonjour');
});


