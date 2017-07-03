var localStorage = window.localStorage;

function logout()
{
    window.location = "../index.html";
}

var userid = localStorage.getItem('userid');


$.ajax({
	type: 'GET',
	url: 'http://127.0.0.1:8000/gettransactiondetails/'+userid,
	dataType: 'json',
	encode: true,
})

.done(function(data){


	console.log(data);

	if(data.length==0)
	{
		document.getElementById('order-row').innerHTML = "<h3 class='empty-wishlist-h2'>No Order History</h3>";
	}
	else{

		for(i=0;i<data.length;i++)
		{
			
			var product_id = data[i]['product_id'];

			order_status = data[i]['status'];

			date_of_order = data[i]['created_at'];
			
			$.ajax({
				type: 'GET',
				url: 'http://127.0.0.1:8000/getproductdetail/'+product_id,
				dataType: 'json',
				encode: true,

			})

			.done(function(data){

				no = 0;
				
				console.log(data);

				document.getElementById('order-row').innerHTML += ` <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 custom-col-list cart-div">
								<div class="try clearfix">
								<div class="col-sm-6 col-md-6 thumbnail-product margin-0 zeropadding">

	                                    <div class="portfolio-one wishlist">

	                                        <div class="portfolio-item">
	                                            <a href="Detail.html?id=`+data[no]['id']+`" class="">
	                                                <img src="../images/Product-Images/`+data[no]['image_url']+`" alt="img" class="responsive-image pro-img" id='product-img'>
	                                            </a>
	                                        </div>

	                                    </div>
	                            </div>

	                            <div class="col-sm-6 col-md-6 product-detail wishlist-product-detail" id="product-detail">

	                                <div class="">
	                                    <p class="p-title">`+data[no]['title']+`</p>
	                                </div>

	                                <div class="decoration" style="margin-bottom: 10px;"></div>

	                                <div class="">
	                                    <p class="">Status: `+order_status+`</p>
	                                </div>

	                                <div>
	                                    <p>Order Date: `+date_of_order+`</p>
	                                </div>


	                                <div>
	                                    <p>Price: $`+data[no]['price']+`</p>
	                                </div>

	                            </div>
	                            </div>
	                        </div>`;

	                        
	                        no++;
	                        
	                        
			});

		}

	}


});