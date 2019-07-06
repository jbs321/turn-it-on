<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function index()
    {
        return view('payment');
    }

    public function create(Request $request)
    {
        $user = Auth::user();
        $user->updateCard($request->stripeToken);
        $user->charge(2000);

        return redirect('/');
    }
}
