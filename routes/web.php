<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FarmerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::controller(FarmerController::class)->group(function() {
    Route::get('/login', 'login')->name('login');
    Route::get('/register', 'register')->name('register');
    Route::get('/farmerhome', 'farmerhome')->name('farmerhome');
    Route::get('/addcategory', 'addcategory')->name('addcategory');
    Route::get('/addproduct', 'addproduct')->name('addproduct');
    Route::get('/edit', 'editproduct')->name('editproduct');
    Route::get('/sales', 'sales')->name('sales');
    Route::get('/allrev', 'allreview')->name('allreview');
    Route::get('/forum', 'forum')->name('forum');
    Route::get('/ans', 'forumans')->name('forumans');
    Route::put('/editproductpost', 'editproductpost')->name('editproductpost');
    

     
    
});


Route::controller(CustomerController::class)->group(function() {
    Route::get('/customerlogin', 'customerlogin')->name('customerlogin');
    Route::get('/customerregister', 'customerregister')->name('customerregister');
    Route::get('/customerhome', 'customerhome')->name('customerhome');
    Route::get('/cart', 'booking')->name('booking');
    Route::get('/purchased', 'purchased')->name('purchased');
    Route::get('/addreview', 'addreview')->name('addreview');
    Route::get('/productreview', 'productreview')->name('productreview');
    Route::get('/myproductreviewpage', 'myproductreviewpage')->name('myproductreviewpage');
    Route::get('/verify-review-otp', 'reviewsubmit')->name('reviewsubmit');
     
    
    
});
Route::controller(AdminController::class)->group(function() {
    Route::get('/adminlogin', 'adminlogin')->name('adminlogin');
    Route::get('/adminhome', 'adminhome')->name('adminhome');
    Route::get('/logout', 'logout')->name('logout');
    Route::get('/index', 'index')->name('index');
   
   
});
