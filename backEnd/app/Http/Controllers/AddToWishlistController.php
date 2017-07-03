<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wishlist;

class AddToWishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id,$userid)
    {

        //$list = Wishlist::where('user_id',$userid)->get();

        //echo json_encode($list);

        $check = Wishlist::where('user_id',$userid)->where('product_id',$id)->get();

        $messages = array();

        if(count($check)>0)
        {
            $messages['check'] = "true";
        }
        else
        {
            $messages['check'] = "false";
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
        $wishlist = new Wishlist;

        $wishlist->user_id = $request->userid;
        $wishlist->product_id = $request->productid;

        $messages = array();

        $messages["result"] = "true";
        
        $wishlist->save();
         
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

        $check = Wishlist::where('user_id',1)->where('product_id',$id)->get();

        $messages = array();

        if(count($check)>0)
        {
            $messages['check'] = "true";
            //$messages['yyy'] = session('user');
        }
        else
        {
            $messages['check'] = "false";
        }

        echo json_encode($messages);
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
        
        $row = Wishlist::where('user_id',$userid)->where('product_id',$id);
        
        $row->delete();

        $messages = array();

        $messages["destroy"] = "true";
        
        echo json_encode($messages);

    }

}
