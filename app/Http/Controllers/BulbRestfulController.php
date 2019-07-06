<?php

namespace App\Http\Controllers;

use App\Bulb;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BulbRestfulController extends Controller
{

    public function show(Bulb $bulb)
    {
        return new JsonResponse($bulb);
    }

    public function update(Request $request, Bulb $bulb)
    {
        $bulb->is_on = !$bulb->is_on;
        $bulb->save();
        return $bulb;
    }
}
