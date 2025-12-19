<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AgeController extends Controller
{
    public function check($age)
    {
        if ($age >= 18) {

            return "Majeur";
        } else {
            return "Mineur";
        }
    }
}
