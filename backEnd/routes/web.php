<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('addProduct',function (){
	return view('product');
});


Route::resource('product','ProductController');

Route::resource('registration','RegisterController');
Route::resource('login','LoginController');
Route::resource('getproduct','getProductController');
Route::resource('getproductdetail','getProductDetailController');

Route::get('addtowishlist/productid/{productid}/{custid}',array('as'=>'try','uses'=>'AddToWishlistController@index'));

Route::delete('addtowishlist/remove/productid/{productid}/{custid}',array('as'=>'try','uses'=>'AddToWishlistController@destroy'));

Route::resource('addtowishlist','AddToWishlistController');

Route::get('getfromwishlist/cartdetail/{productid}/{userid}',array('as'=>'try','uses'=>'AddToCartController@index'));

Route::resource('getfromwishlist','GetFromWishlistController');
Route::resource('addtocart','AddToCartController');
Route::resource('getcartdetail','AddToCartController');

Route::delete('removefromcart/{productid}/{custid}',array('as'=>'try','uses'=>'AddToCartController@destroy'));

Route::resource('address','AddressController');

Route::resource('getaddress','AddressController');

Route::resource('confirmcheckout','TransactionController');

Route::get('storage/{filename}', function ($filename)
{
    $path = storage_path('app/' . $filename);

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});

Route::resource('gettransactiondetails','TransactionController');

Route::get('getusers','LoginController@index');

Route::get('getorders','TransactionController@index');

Route::get('getproducts','getProductController@index');

Route::post('updateinfo/{id}','getProductController@update');

Route::post('add_new','getProductController@create_new');
