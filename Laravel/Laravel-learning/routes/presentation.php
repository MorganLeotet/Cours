<?php

use App\Http\Controllers\PresentationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/presentation/{prenom}/{age}', [PresentationController::class, 'show']);