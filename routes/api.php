<?php

use App\Http\Controllers\FarmerController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('registerfar', [FarmerController::class, 'registerfar']);
Route::post('adminloginpost', [AdminController::class, 'adminloginpost']);
Route::post('adminloginpost', [AdminController::class, 'adminloginpost']);
Route::get('showfarmer', [AdminController::class, 'showfarmer']);
Route::put('/approve/{id}', [AdminController::class,'farmer_approval']);
Route::post('loginfarmer', [FarmerController::class, 'loginfarmer']);
Route::get('allcategory/{uname}', [FarmerController::class, 'allcategory']);
Route::post('addcategorypost', [FarmerController::class, 'addcategorypost']);
Route::post('addproductpost', [FarmerController::class, 'addproductpost']);
Route::get('showproducts/{uname}', [FarmerController::class, 'showproducts']);
Route::delete('deleteproduct/{id}', [FarmerController::class, 'deleteproduct']);
Route::get('farmer-view-product/{pid}', [FarmerController::class, 'farmerviewproductlist']);
Route::post('customerloginpost', [CustomerController::class, 'customerloginpost']);
Route::post('registercus', [CustomerController::class, 'registercus']);
Route::get('allproductsview', [CustomerController::class, 'allproductsview']);
Route::post('search-products', [CustomerController::class, 'searchproducts']);
Route::post('addtocartpost/{id}', [CustomerController::class, 'addtocartpost']);
Route::get('showcart/{uname}', [CustomerController::class, 'showcart']);
Route::delete('deletecart/{id}', [CustomerController::class, 'deletecart']);
Route::put('updatecart', [CustomerController::class, 'updateCart']);
Route::get('get_customer_details/{uname}', [CustomerController::class, 'getcustomer']);
Route::post('verifyotppost', [CustomerController::class, 'verifyotppost']);
Route::post('verifyreviewpost', [CustomerController::class, 'verifyreviewpost']);

Route::put('paymentway', [CustomerController::class, 'paymentway']);
Route::get('showmyproducts/{uname}', [CustomerController::class, 'showmyproducts']);
Route::get('showmysales/{uname}', [FarmerController::class, 'showmysales']);
Route::put('/homedelivery/{id}', [FarmerController::class,'homedelivery']);
Route::put('/farmpurchase/{id}', [FarmerController::class,'farmpurchase']);
Route::post('reviewpost', [CustomerController::class, 'reviewpost']);
Route::get('my_review_details/{uname}', [CustomerController::class, 'getreivewotp']);
Route::get('farmerviewreview/{pid}', [FarmerController::class, 'farmerviewreview']);
Route::get('product-review/{pid}', [CustomerController::class, 'productreviews']);
Route::get('my-product-review/{uname}', [CustomerController::class, 'myproductreview']);
Route::post('forumpost', [FarmerController::class, 'forumpost']);
Route::get('allforums', [FarmerController::class, 'allforums']);
Route::post('forumanspost', [FarmerController::class, 'forumanspost']);


