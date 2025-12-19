<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PresentationController extends Controller
{
    public function show($prenom, $age)
    {
        return "je m'appelle " . $prenom . "j'ai " . $age . "ans.";
    }
}
