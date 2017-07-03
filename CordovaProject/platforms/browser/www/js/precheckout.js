


$(window).resize(function() {
	
	var height = $('#try').height();

	$('#add-new-address-parent').css("height", height);

});

total_len = 0;

var localStorage = window.localStorage;

function logout()
{
    window.location = "../index.html";
}

var userid = localStorage.getItem('userid');


$.ajax({
	type: 'GET',
	url: 'http://127.0.0.1:8000/getaddress/'+userid,
	dataType: 'json',
	encode: true,
})

.done(function(data){

	console.log(data);

	for(i=0;i<data.length;i++)
	{

		if(i==0)
		{
			document.getElementById('address-row').innerHTML += "<div class='row'>";
		}

		document.getElementById('address-row').innerHTML += `<div class="col-md-6 col-sm-12 col-xs-12 col-lg-4 custom-col-list cart-div">
                            <div class="try clearfix" id="try">

                                <div class="col-sm-12 col-md-12 product-detail wishlist-product-detail" id="product-detail">

                                    <div class="">
                                        <p class="p-title">Address `+(i+1)+`</p>
                                    </div>

                                    <div class="decoration" style="margin-bottom: 10px;"></div>

                                    <div class="">
                                        <p class="">`+data[i]['address']+`</p>
                                    </div>

                                    <div class="">

                                    <button class="checkout-btn" onclick="checkout(`+data[i]['id']+`);">Deliver to this address</button>

                                    </div>

                                </div>
                            </div>
                    </div>`;


            if(i>0){

			if((i+1)%3==0)
			{
				document.getElementById('address-row').innerHTML += `</div><div class='row'>`;
			}

		}

	}


	document.getElementById('address-row').innerHTML += `</div><div class="col-md-6 col-sm-12 col-xs-12 col-lg-4 custom-col-list cart-div">
                            <a href="new_address.html"><div class="try clearfix" id='try1'>

                                <div class="col-sm-12 col-md-12 product-detail wishlist-product-detail" style="padding-bottom: 10px;" id="add-new-address-parent">

                                    
                                    
                                    <div class="add-new-address-div">

                                        <i class="fa fa-plus-circle add-new-address" aria-hidden="true"></i>

                                    </div>

                                </div>
                            </div></a>
                    </div>`;
		
	
	var height = $('#try').height();

	$('#add-new-address-parent').css("height", height);                  

});


function checkout(param)
{

	console.log(param);


	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8000/getcartdetail/'+userid,
		dataType: 'json',
		encode: true,
	})

	.done(function(data){

		total_len = data.length;
		i=0;

		for(i=0;i<data.length;i++)
		{	
			productid = data[i]['product_id'];
			
			var transaction = { userid: userid, productid:productid, address:param };

			$.ajax({
				type: 'POST',
				url: 'http://127.0.0.1:8000/confirmcheckout',
				data: transaction,
				dataType: 'json',
				encode: true,
			})

			.done(function(data){


			});

		}


		for(i=0;i<data.length;i++)
		{
			productid = data[i]['product_id'];

			$.ajax({
				type: 'DELETE',
				url: 'http://127.0.0.1:8000/removefromcart/'+productid+'/'+userid,
				dataType: 'json',
				encode: true,
			})

			.done(function(data){

			});

		}



		
	});


	if(i==total_len)
	{						
		window.location = "../links/orders.html";
	}	

}