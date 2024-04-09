<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function customerlogin()
    {
        return view("customer_login");
    }

    public function customerregister()
    {
        return view("customerregister");
    }

     
    public function customerloginpost(Request $request)
{
    $uname = $request->input('uname');
    $pass = $request->input('pass');

    $user = DB::select("SELECT * FROM users WHERE uname = ? AND pass = ?", [$uname, $pass]);

    if (!empty($user)) {
        Session::put('uname', $uname);

        return response()->json(['success' => true]);
    } else {
        // Authentication failed
        return response()->json(['success' => false]);
    }
}
 

        public function registercus(Request $request)
        {


            $name = $request->input('name');
            $address = $request->input('address');
            $city = $request->input('city');
            $mobile = $request->input('mobile');
            $email = $request->input('email');
            $uname = $request->input('uname');
            $pass = $request->input('pass');
        
            $maxid = DB::table('users')->max('id') + 1;
            $maxid = $maxid ?? 1;
            
        $vegpro=DB::table('users')->insert([
            'id' => $maxid,
            'name' => $name,
            'address' => $address,
            'city' => $city,
            'mobile' => $mobile,
            'email' => $email,
            'uname' => $uname,
            'pass' => $pass,
            'otp' => '',
         
        ]);

        if ($vegpro) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }

        }

        
    public function customerhome()
    {
        return view("customerhome");
    }
    
    public function allproductsview(Request $request)
    {
        $products = DB::table('rt_product')->get();

        return response()->json(['data' => $products]);
    }

    public function searchProducts(Request $request)
    {
        $search = $request->input('search');
        $gs = '%' . $search . '%';
    
        $data2 = DB::table('rt_retailer')
            ->leftJoin('rt_product', 'rt_retailer.uname', '=', 'rt_product.retailer')
            ->where(function ($query) use ($gs) {
                $query->where('rt_retailer.name', 'like', $gs)
                    ->orWhere('rt_retailer.address', 'like', $gs)
                    ->orWhere('rt_retailer.city', 'like', $gs)
                    ->orWhere('rt_product.retailer', 'like', $gs)
                    ->orWhere('rt_product.category', 'like', $gs)
                    ->orWhere('rt_product.product', 'like', $gs);
            })
            ->where('rt_product.status', 0)
            ->select('rt_product.*')
            ->get();
    
        return response()->json(['data2' => $data2]);
    }

    public function booking(Request $request)
    {
        return view("cart");
    }

    public function addtocartpost(Request $request ,$id)
    {
        try {
        $uname = $request->input('storedUname');
        $product = DB::table('rt_product')->where('id', $id)->first();
        $price = $product->price;
        $pname = $product->product;
        $pimage = $product->photo;
        $category = $product->category;
        $retailer = $product->retailer;
        $price = $product->price;
        $price = $product->price;
        $price = $product->price;

        $maxid = DB::table('rt_cart')->max('id') + 1;
        $maxid = $maxid ?? 1;
        $now = now();
        $create_date = $now->format('d-m-Y');
        if (!$product) {
            return response()->json(['success' => false, 'error' => 'Product not found'], 404);
        }
        Log::info('Add to cart data:', [
            'id' => $id,
            'uname' => $uname,
           
        ]);
        $addtocart=DB::table('rt_cart')->insert([
            'id' => $maxid,
            'uname' => $uname,
            'pid' => $id,
            'status' => '0',
            'rdate' => $create_date,
            'price' => $price,
            'category' => $category,
            'quantity' => '',
            'uqut' => '',
            'amount' => '',
            'pname' => $pname,
            'pimage' => $pimage,
            'retailer' => $retailer,
            'deli_mode' => '',
            'shipping_address' => '',
            'd_status' => '',
            
         
        ]);
        if ($addtocart) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    } catch (\Illuminate\Database\QueryException $e) {
        Log::error('Product Add to Cart Error: ' . $e->getMessage());
        return response()->json(['success' => false, 'error' => 'Database Error'], 500);
    } catch (\Exception $e) {
        Log::error('Product Add to Cart Error: ' . $e->getMessage());
        return response()->json(['success' => false, 'error' => 'Internal Server Error'], 500);
    }





    }

    
    public function showcart(Request $request, $uname)
    {
        $statusArray = [0, 1];
    
        $products = DB::table('rt_cart')
            ->where('uname', $uname)
            ->whereIn('status', $statusArray)
            ->get();
    
        return response()->json(['data' => $products]);
    }
    

    
    public function deletecart($id)
   {
       try {
           $product = DB::table('rt_cart')->where('id', $id)->first();

           if (!$product) {
               return response()->json(['success' => false, 'error' => 'Cart not found'], 404);
           }

           DB::table('rt_cart')->where('id', $id)->delete();

           

           return response()->json(['success' => true]);
       } catch (\Exception $e) {
           Log::error('Error deleting cart: ' . $e->getMessage());
           return response()->json(['success' => false, 'error' => 'Internal Server Error'], 500);
       }
   }
   
 /*   public function updateCart(Request $request)
   {
       try {
           // Log the entire request data
           Log::info('Received request data: ' . json_encode($request->all()));

           $requestData = $request->all();

           foreach ($requestData['products'] as $productData) {
               // Assuming you have a 'rt_cart' table
               DB::table('rt_cart')
                   ->where('id', $productData['id'])
                   ->update([
                       'status' => '1',
                       'uqut' => $productData['qty'],
                       'amount' => $productData['total'],
                   ]);
                   $productqty = DB::table('rt_product')->where('id', $productData['id'])->get();
                   $quantity = $productqty->quantity;
                   $current = $quantity - $$productData['qty'];

                   DB::table('rt_product')
                   ->where('id', $productData['id'])
                   ->update([
                       'quantity' => $current,
                       
                   ]);
           }

           return response()->json(['message' => 'Cart updated successfully'], 200);
       } catch (\Exception $e) {
           // Log the error
           Log::error('Error updating cart: ' . $e->getMessage());

           return response()->json(['error' => 'An error occurred while updating the cart'], 500);
       }
   } */
   
   public function updateCart(Request $request)
{
    try {
        // Log the entire request data
        Log::info('Received request data: ' . json_encode($request->all()));
        
        $requestData = $request->all();
        $deli_mode = $requestData['deli_mode']; 
        $shipping_address = $requestData['shipping_address']; 

        $otp = strval(rand(1000, 9999));

        foreach ($requestData['products'] as $productData) {
            // Assuming you have a 'rt_cart' table
            DB::table('rt_cart')
                ->where('id', $productData['id'])
                ->update([
                    'status' => '1',
                    'uqut' => $productData['qty'],
                    'amount' => $productData['total'],
                    'deli_mode' => $deli_mode,
                    'shipping_address' => $shipping_address,
                ]);

           /*  // Fetch the product quantity
            $product = DB::table('rt_product')->where('id', $productData['id'])->first();
            
            // Ensure the product exists before updating
            if ($product) {
                $quantity = $product->quantity;

                // Calculate the updated quantity
                $current = $quantity - $productData['qty'];

                // Ensure the quantity does not go below 0
                $current = max(0, $current);

                // Update the product quantity
                DB::table('rt_product')
                    ->where('id', $productData['id'])
                    ->update([
                        'quantity' => $current,
                    ]);
            } else {
                Log::warning("Product with ID {$productData['id']} not found.");
            } */
        }

        // Update user OTP
        $uname = $requestData['uname']; // Assuming 'uname' is present in the request data
        DB::table('users')
            ->where('uname', $uname)
            ->update(['otp' => $otp]);

        return response()->json(['message' => 'Cart updated successfully'], 200);
    } catch (\Exception $e) {
        // Log the error
        Log::error('Error updating cart: ' . $e->getMessage());

        return response()->json(['error' => 'An error occurred while updating the cart'], 500);
    }
}

        public function getcustomer($uname)
        {
            $user = DB::table('users')->where('uname', $uname)->first();
            
            if ($user) {
                return response()->json($user);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        }

        public function verifyotppost(Request $request)
        {
            $otp = $request->input('otp');
            $uname = $request->input('uname');
            $account = DB::table('users')
                ->where('uname', $uname)
                ->where('otp', $otp)
                ->first();

            if ($account) {
                
                    return response()->json(['success' => true]);
                } else {
                    return response()->json(['success' => false, 'error' => 'Incorrect Otp or access not provided']);
                }
            }


            
            public function paymentway(Request $request)
         {
             try {
                 // Log the entire request data
                 Log::info('Received request data: ' . json_encode($request->all()));
         
                 $requestData = $request->all();
         
                 foreach ($requestData['products'] as $productData) {
                     // Assuming you have a 'rt_cart' table
                     DB::table('rt_cart')
                         ->where('id', $productData['id'])
                         ->update([
                             'status' => '2',
                             'uqut' => $productData['qty'],
                             'amount' => $productData['total'],
                         ]);
         
                      // Fetch the product quantity
                     $product = DB::table('rt_product')->where('id', $productData['id'])->first();
                     
                     // Ensure the product exists before updating
                     if ($product) {
                         $quantity = $product->quantity;
         
                         // Calculate the updated quantity
                         $current = $quantity - $productData['qty'];
         
                         // Ensure the quantity does not go below 0
                         $current = max(0, $current);
         
                         // Update the product quantity
                         DB::table('rt_product')
                             ->where('id', $productData['id'])
                             ->update([
                                 'quantity' => $current,
                             ]);
                     } else {
                         Log::warning("Product with ID {$productData['id']} not found.");
                     } 
                 }
         
                 // Update user OTP
                
         
                 return response()->json(['message' => 'Cart updated successfully'], 200);
             } catch (\Exception $e) {
                 // Log the error
                 Log::error('Error updating cart: ' . $e->getMessage());
         
                 return response()->json(['error' => 'An error occurred while updating the cart'], 500);
             }
         }

         
         public function purchased()
         {
             return view("purchased");
         }

         
         public function showmyproducts(Request $request ,$uname)
         {
            $statusArray = [2, 3];
             $products = DB::table('rt_cart')
             ->where('uname' , $uname)
             ->whereIn('status', $statusArray)
             ->get();
             return response()->json(['data' => $products]);
         }

         
         public function addreview()
         {
             return view("addreview");
         }

         

        public function reviewpost(Request $request)
        {


            $cid = $request->input('cid');
            $pid = $request->input('pid');
            $uname = $request->input('uname');
            $review = $request->input('review');
            $otp = strval(rand(1000, 9999));
            $maxid = DB::table('rt_review')->max('id') + 1;
            $maxid = $maxid ?? 1;
            $now = now();
            $create_date = $now->format('d-m-Y');
            
        $vegpro=DB::table('rt_review')->insert([
            'id' => $maxid,
            'uname' => $uname,
            'pid' => $pid,
            'review' => $review,
            'cid' => $cid,
            'code' =>$otp,
            'rdate' =>$create_date,
            'status' => '0',
         
        ]);

        if ($vegpro) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }

        }

        
       

        public function getreivewotp($uname)
        {
            $user = DB::table('rt_review')
                ->select('rt_review.*', 'users.email')
                ->join('users', 'rt_review.uname', '=', 'users.uname') 
                ->where('rt_review.uname', $uname)
                ->orderBy('rt_review.id', 'desc') 
                ->limit(1)
                ->get();
        
            if ($user->isNotEmpty()) {
                return response()->json(['data' => $user]);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        }
        

        

        public function productreview()
         {
             return view("productreview");
         }
        

         
         public function productreviews(Request $request, $pid)
         {
             $products = DB::table('rt_review')
             ->where('pid', $pid)
             ->get();
             if ($products) {
                return response()->json(['data' => $products]);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
         }


         

         public function myproductreview(Request $request, $uname)
         {

            $products = DB::table('rt_review')
            ->where('uname', $uname)
            ->get();
        
        if ($products) {
            return response()->json(['data' => $products]);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
        
         }

         

         public function myproductreviewpage()
         {
             return view("myproductreviewpage");
         }

         
         public function reviewsubmit()
         {
             return view("reviewsubmit");
         }

         
         public function verifyreviewpost(Request $request)
         {
             $code = $request->input('code');
             $uname = $request->input('uname');
             $account = DB::table('rt_review')
                 ->where('uname', $uname)
                 ->where('code', $code)
                 ->orderBy('rt_review.id', 'desc') 
                 ->limit(1)
                 ->get();
 
             if ($account) {
                 
                     return response()->json(['success' => true]);
                 } else {
                     return response()->json(['success' => false, 'error' => 'Incorrect Otp or access not provided']);
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
