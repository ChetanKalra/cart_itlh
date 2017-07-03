<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use App\Product;
use DB;

class getProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list = Product::get();

        return json_encode($list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //


    }

    public function create_new(Request $request)
    {
        $product = new Product;
        $a = $request['title'];
        $product->title = $request['title'];
        $product->price = $request['price'];
        $product->description = $request['description'];
        $product->count = $request['count'];
        $product->category = $request['category'];

        $file = $request->file('add_img_file');
        $filename = $a.'.png';
        $product->image_url = $filename;
        if($file)
        {
            Storage::disk('local')->put($filename, File::get($file));
        }

        $product->save();

        return Redirect::to('http://localhost:8000/admin.html');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        // $category = $id->category;
        
        $products = Product::where('category', $id)->get();
        echo(json_encode($products));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

        $messages = array();

        $title = $request->title;
        $count = $request->count;
        $description = $request->description;
        $category = $request->category;
        $price = $request->price;

        DB::update('update products set title = ?,count = ?, description = ?,category = ?, price = ? where id = ?',[$title,$count,$description,$category,$price,$id]);

        // if($request->size == 6)                                                      ----------------------uncomment image
        // {
        //     $image_url = $request->image_url;
        //     DB::update('update products set image_url = ? where id = ?',[$image_url,$id]);
        // }
                                                                                        // ----------------------uncomment image
        $messages['result'] = 'true';

        return json_encode($messages);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        
    }
}
