<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;


class AddToCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($userid,$productid)
    {
        //
        $list = Cart::where('user_id',$userid)->where('product_id',$productid)->get();

        $messages = array();

        if(count($list)>0)
        {
            $messages["cart_check"] = "true";
        }
        else
        {   
            $messages["cart_check"] = "false";
        }

        echo json_encode($messages);
                
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
        $cart = new Cart;

        $cart->product_id = $request->productid;
        $cart->user_id = $request->userid;
        
        $cart->count = 1;

        $cart->save();

        $messages = array();

        $messages["result"] = "true";

        echo json_encode($messages);

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
        $list = Cart::where('user_id',$id)->get();

        echo json_encode($list);

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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,$userid)
    {
        //
        $list = Cart::where('user_id',$userid)->where('product_id',$id);

        $list->delete();

        $messages = array();

        $message["result"] = "true";

        echo json_encode($message);
    }
}
