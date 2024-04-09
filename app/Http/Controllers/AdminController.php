<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function adminlogin()
    {
        return view("adminlogin");
    }
    
    public function adminloginpost(Request $request)
{
    $uname = $request->input('uname');
    $pass = $request->input('pass');

    // Run a raw SQL query to check if the username and password match
    $user = DB::select("SELECT * FROM admins WHERE uname = ? AND pass = ?", [$uname, $pass]);

    if (!empty($user)) {
        Session::put('uname', $uname);

        return response()->json(['success' => true]);
    } else {
        // Authentication failed
        return response()->json(['success' => false]);
    }
}


    public function adminhome()
    {
        return view("adminhome");
    }

    public function index()
    {
        return view('welcome');
    }
   
    public function logout(Request $request)
    {
        auth()->logout();

        session()->flash('success', 'You have been successfully logged out.');

        return redirect()->route('index');
    }
    
    public function showfarmer()
    {
        $farmers = DB::table('rt_retailer')->get();
        return response()->json(['data' => $farmers]);
    }
   
    public function farmer_approval(Request $request, $id)
    {


        $update=DB::table('rt_retailer')->where('id', $id)->update(['status' => 1]);
        if($update){


        return response()->json(['message' => 'Farmer Apporved']);
        }
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
