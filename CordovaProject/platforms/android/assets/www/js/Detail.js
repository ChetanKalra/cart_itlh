var localStorage = window.localStorage;


function logout()
{
    window.location = "../index.html";
}




var parameterName = 'id';

findGetParameter(parameterName);

function findGetParameter(parameterName) {
    result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
  
 		

 		$.ajax({
            type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/getproductdetail/'+result, // the url where we want to POST
            // data: product, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        
        .done(function(data) {

            console.log(data);

            if(data[0]['count']>0)
            {
            	var status = 'In Stock';
                var statusid = 'green';
            }
            else
            {
            	var status = 'Out of Stock';
                var statusid = 'red';
            }

            document.getElementById('product-title').innerHTML = data[0]['title'];

            document.getElementById('product-img').src = '../images/Product-Images/'+data[0]['image_url'];

            document.getElementById('product-detail').innerHTML += `<div class="">
                                <p>`+data[0]['description']+`</p>
                            </div>

                            <div class="">
                                <p class="">Status: <span id="status-color-`+statusid+`">`+status+`</span></p>
                            </div>

                            <div class="">
                                <p>Price: $`+data[0]['price']+`</p>
                            </div>

                            <div class="add-to-cart-row">
                                <button class="add-to-cart-btn" id='add2cart' onclick='add_to_cart();'>Add to cart</button>
                                <button class="add-to-cart-btn" id='added2cart'>Added to cart</button>
                            </div>`;
       
        });


        
}

        var userid = localStorage.getItem("userid");

        $.ajax({
        	type: 'GET',
        	url: 'http://127.0.0.1:8000/addtowishlist/productid/'+result+'/'+userid,
        	// data: check_wishlist_status,
        	dataType: 'json',
        	encode: true,
        })

        .done(function(data){

        	console.log(data);

        	if(data['check']=='true')
        	{
        		document.getElementById('add-wl').style.display = 'none';
       			document.getElementById('remove-wl').style.display = 'block';

                //console.log(data['yyy']);
        	}
        	else
        	{

        	}
        });


        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:8000/getfromwishlist/cartdetail/'+userid+'/'+result,
            dataType:'json',
            encode:true,
        })

        .done(function(data){

            if(data['cart_check']=="true")
            {
                document.getElementById('add2cart').style.display = 'none';
                document.getElementById('added2cart').style.display = 'block';
            }

        });

function addnew()
{
    var userid = localStorage.getItem("userid");
	var details = { userid:userid , productid:result };


	$.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/addtowishlist', // the url where we want to POST
            data: details, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        
        .done(function(data) {

            console.log(data);

       		if(data['result']=='true')
       		{
       			document.getElementById('add-wl').style.display = 'none';
       			document.getElementById('remove-wl').style.display = 'block';

       		}
       		else
       		{

       		}
        });

}

function remove()
{
    var userid = localStorage.getItem("userid");

	$.ajax({
		type: 'DELETE',
		url: 'http://127.0.0.1:8000/addtowishlist/remove/productid/'+result+'/'+userid,
		dataType: 'json',
		encode: true,

	})

	.done(function(data){

		console.log(data);

		if(data['destroy']=='true')
       		{
       			document.getElementById('remove-wl').style.display = 'none';
       			document.getElementById('add-wl').style.display = 'block';

       		}


	});

}


function add_to_cart(){


    if($('#status-color-green').length != 0)
    {

        var userid = localStorage.getItem("userid");
        var details = { userid: userid , productid: result };

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/addtocart',
            data: details,
            dataType: 'json',
            encode: true,
        })


        .done(function(data){

            if(data["result"]=="true")
            {
                console.log("Added to Cart");
                document.getElementById('add2cart').style.display = 'none';
                document.getElementById('added2cart').style.display = 'block';

            }


        });
    }
}