<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = ['/registration/','/login/','/product','/addtowishlist/*','/addtowishlist','/addtocart','removefromcart/*','address','confirmcheckout','gettransactiondetails','getproductdetail','getproductdetail/*','updateinfo','updateinfo/*','add_new','add_new/*'
        //
    ];
}
