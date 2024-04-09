<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;


class FarmerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }
    
    
    public function registerfar(Request $request)
    {
        try {
            $name = $request->input('name');
            $address = $request->input('address');
            $city = $request->input('city');
            $mobile = $request->input('mobile');
            $email = $request->input('email');
            $uname = $request->input('uname');
            $pass = $request->input('pass');
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $folderPath = public_path('/uploads/farmerproof');
                $file->move($folderPath, $fileName);
            }else {
                    $fileName = null; 
                }
    
            $maxid = DB::table('rt_retailer')->max('id') + 1;
            $maxid = $maxid ?? 1;
    
            $now = now();
            $create_date = $now->format('d-m-Y');
            Log::info('Farmer register:', [
                'id' => $maxid,
                'name' => $name,
                'address' => $address,
                'city' => $city,
                'mobile' => $mobile,
                'email' => $email,
                'proof' => $fileName,
                'uname' => $uname,
                'pass' => $pass,
                'create_date' => $create_date,
                'status' => '0',
            ]);
    
            $regfar = DB::table('rt_retailer')->insert([
                'id' => $maxid,
                'name' => $name,
                'address' => $address,
                'city' => $city,
                'mobile' => $mobile,
                'email' => $email,
                'proof' => $fileName,
                'uname' => $uname,
                'pass' => $pass,
                'create_date' => $create_date,
                'status' => '0',
            ]);
    
            if ($regfar) {
                return response()->json(['success' => true]);
            }
            else {
                return response()->json(['success' => false]);
            }
        } catch (\Exception $e) {
            Log::error('Customer Registration Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'error' => 'Internal Server Error'], 500);
        }
    }

     public function loginfarmer(Request $request)
    {
        $uname = $request->input('uname');
        $pass = $request->input('pass');

        $user = DB::select("SELECT * FROM rt_retailer WHERE uname = ? AND pass = ? AND status =1", [$uname, $pass]);

        if (!empty($user)) {
            Session::put('uname', $uname);

            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    }

    
    public function farmerhome()
    {
        return view('farmerhome');
    }

    
    public function addcategory()
    {
        return view('addcategory');
    }

    public function allcategory(Request $request ,$uname)
    {
        $category = DB::table('rt_category')->where('retailer' , $uname)->get();

        return response()->json(['data' => $category]);
    }

    public function addcategorypost(Request $request)
    {
    

    $retailer = $request->input('retailer');
    $category = $request->input('category');
    $maxid = DB::table('rt_category')->max('id') + 1;
    $maxid = $maxid ?? 1;
    $vegpro=DB::table('rt_category')->insert([
        'id' => $maxid,
        'retailer' => $retailer,
        'category' => $category,


        


    ]);

    if ($vegpro) {
        return response()->json(['success' => true]);
    } else {
        return response()->json(['success' => false]);
    }

    }

    
    public function addproduct()
    {
        return view('addproduct');
    }
    
    public function addproductpost(Request $request)
    {
        try {
            $retailer = $request->input('retailer');
            $category = $request->input('category');
            $product = $request->input('product');
            $price = $request->input('price');
            $qty = $request->input('qty');
            $details = $request->input('details');
    
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $fileName = time() . '_' . $file->getClientOriginalName();
                $folderPath = public_path('/uploads/products');
                $file->move($folderPath, $fileName);
            } else {
                $fileName = null;
            }
    
            $maxid = DB::table('rt_product')->max('id') + 1;
            $maxid = $maxid ?? 1;
    
            Log::info('Product added:', [
                'id' => $maxid,
                'retailer' => $retailer,
                'category' => $category,
                'product' => $product,
                'price' => $price,
                'quantity' => $qty,
                'photo' => $fileName,
                'details' => $details,
                'status' => '0',
                'required_qty' => '0',
            ]);
    
            $regProduct = DB::table('rt_product')->insert([
                'id' => $maxid,
                'retailer' => $retailer,
                'category' => $category,
                'product' => $product,
                'price' => $price,
                'quantity' => $qty,
                'photo' => $fileName,
                'details' => $details,
                'status' => '0',
                'required_qty' => '0',
            ]);
    
            if ($regProduct) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['success' => false]);
            }
        } catch (\Exception $e) {
            Log::error('Product Addition Error: ' . $e->getMessage());
            return response()->json(['success' => false, 'error' => 'Internal Server Error'], 500);
        }
    }

    public function showproducts(Request $request ,$uname)
    {
        $products = DB::table('rt_product')->where('retailer' , $uname)->get();
        return response()->json(['data' => $products]);
    }
    
     public function deleteproduct($id)
    {
        try {
            $product = DB::table('rt_product')->where('id', $id)->first();

            if (!$product) {
                return response()->json(['success' => false, 'error' => 'Product not found'], 404);
            }

            // Delete the product from the database
            DB::table('rt_product')->where('id', $id)->delete();

            // Optionally, you can also delete the associated file (if applicable)
            if ($product->photo) {
                $filePath = public_path('/uploads/products/' . $product->photo);
                if (file_exists($filePath)) {
                    unlink($filePath);
                }
            }

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            Log::error('Error deleting product: ' . $e->getMessage());
            return response()->json(['success' => false, 'error' => 'Internal Server Error'], 500);
        }
    }

    
    
    public function editproduct(Request $request)
    {
        $pid = $request->query('pid');
        $retailer = $request->query('retailer');
        $price = $request->query('price');


        return view('editproduct', ['pid' => $pid, 'retailer' => $retailer, 'price' => $price]);
    }
      
    
     public function farmerviewproductlist(Request $request, $pid)
    {
        $products = DB::table('rt_product')
        ->where('id', $pid)
        ->get();

        return response()->json(['data' => $products]);
    }



    public function editproductpost(Request $request)
{
    try {
        $pid = $request->input('pid');
        $retailer = $request->input('retailer');
        $price = $request->input('price');
        $qty = $request->input('qty');
        $details = $request->input('details');

        // Check if the file is present
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $folderPath = public_path('/uploads/products');
            $file->move($folderPath, $fileName);

            Log::info('Product Update Request Data:', [
                'pid' => $pid,
                'retailer' => $retailer,
                'price' => $price,
                'qty' => $qty,
                'details' => $details,
                'photo' => $fileName,
            ]);

            $vegpro = DB::table('rt_product')
                ->where('id', $pid)
                ->update([
                    'price' => $price,
                    'quantity' => $qty,
                    'photo' => $fileName,
                    'details' => $details,
                ]);

            if ($vegpro) {
                // Success case
                Session::flash('success', 'Product updated successfully');
            } else {
                // Failure case
                Session::flash('error', 'Failed to update product');
            }
        } else {
            // Handle the case where the file is not provided
            Session::flash('error', 'File not provided');
        }

        return redirect()->route('farmerhome'); // Assuming you have a route named 'updateproduct'
    } catch (\Exception $e) {
        Log::error("An error occurred: " . $e->getMessage());
        Session::flash('error', 'An error occurred');
        return redirect()->route('editproduct');
    }
}


        public function sales()
        {
            return view('sales');
        }

        
        public function showmysales(Request $request ,$uname)
        {
           $statusArray = [2, 3];
            $products = DB::table('rt_cart')
            ->where('retailer' , $uname)
            ->whereIn('status', $statusArray)
            ->get();
            return response()->json(['data' => $products]);
        }

    public function homedelivery(Request $request, $id)
    {


        $update=DB::table('rt_cart')
        ->where('id', $id)
        ->update([
            'd_status' => 1,
            'status' => 3,
        ]);
        if($update){


        return response()->json(['message' => 'Home Delivered']);
        }
    }

   
    public function farmpurchase(Request $request, $id)
    {


        $update=DB::table('rt_cart')
        ->where('id', $id)
        ->update([
            'd_status' => 2,
            'status' => 3,
        ]);
        if($update){


        return response()->json(['message' => 'Farm Purchased']);
        }
    }


    
    public function allreview()
    {
        return view('allreview');
    }

    

    public function farmerviewreview(Request $request, $pid)
    {
        $uname = $request->query('uname');
    
        $reviews = DB::table('rt_review')
            ->select('rt_review.*', 'rt_product.product')
            ->join('rt_product', 'rt_review.pid', '=', 'rt_product.id') 
            ->where('rt_product.retailer', $uname)
            ->where('rt_review.pid', $pid)
            ->get();
    
        if ($reviews->isNotEmpty()) {
            return response()->json(['data' => $reviews]);
        } else {
            return response()->json(['error' => 'Reviews not found'], 404);
        }
    }

     
    public function forum()
    {
        return view('forum');
    }



    public function forumpost(Request $request)
    {
    

    $category = $request->input('category');
    $subcategory = $request->input('subcategory');
    $question = $request->input('question');
    $uname = $request->input('uname');
   
    $maxid = DB::table('rt_forum')->max('id') + 1;
    $maxid = $maxid ?? 1;
    $now = now();
    $create_date = $now->format('d-m-Y');

    $vegpro=DB::table('rt_forum')->insert([
        'id' => $maxid,
        'category' => $category,
        'subcategory' => $subcategory,
        'question' => $question,
        'uname' => $uname,
        'rdate' => $create_date,


        


    ]);

    if ($vegpro) {
        return response()->json(['success' => true]);
    } else {
        return response()->json(['success' => false]);
    }

    }


    
    public function allforums()
    {
        $forums = DB::table('rt_forum')
            ->leftJoin('rt_answer', 'rt_forum.id', '=', 'rt_answer.catid')
            ->select(
                'rt_forum.id',
                'rt_forum.category',
                'rt_forum.question',
                'rt_forum.uname',
                'rt_forum.rdate AS forum_date',
                'rt_answer.id AS answer_id',
                'rt_answer.answer',
                'rt_answer.answerby',
                'rt_answer.rdate AS ans_date',
                'rt_answer.catid AS answer_catid',
                'rt_answer.category AS answer_category'
            )
            ->orderBy('rt_forum.id', 'desc')

            ->get();
    

        $groupedForums = collect($forums)->groupBy('id')->map(function ($group) {
            $forum = $group->first();
            $forum->answers = $group->map(function ($answer) {
                return [
                    'answer_id' => $answer->answer_id,
                    'answer' => $answer->answer,
                    'answerby' => $answer->answerby,
                    'ans_date' => $answer->ans_date,
                    'answer_catid' => $answer->answer_catid,
                    'answer_category' => $answer->answer_category,
                ];
            })->toArray();
            return $forum;
        })->values();
    
        return response()->json(['data' => $groupedForums]);
    }
    
    

    public function forumans()
    {
        return view('forumans');
    }



        public function forumanspost(Request $request)
        {
            $catid = $request->input('catid');
            $category = $request->input('category');
            $answer = $request->input('answer');
            $uname = $request->input('uname');

            $forum = DB::table('rt_forum')->where('id', $catid)->first();
            if (!$forum) {
                return response()->json(['success' => false, 'error' => 'Forum not found'], 404);
            }

            $postedby = $forum->uname;
            $question = $forum->question;

            $maxid = DB::table('rt_answer')->max('id') + 1;
            $maxid = $maxid ?? 1;
            $now = now();
            $create_date = $now->format('d-m-Y');
        
            $vegpro=DB::table('rt_answer')->insert([
                'id' => $maxid,
                'postedby' => $postedby,
                'category' => $category,
                'question' => $question,
                'answer' => $answer,
                'answerby' => $uname,
                'rdate' => $create_date,
                'catid' => $catid,
        
            ]);
        
            if ($vegpro) {
                return response()->json(['success' => true]);
            } else {
                return response()->json(['success' => false]);
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
