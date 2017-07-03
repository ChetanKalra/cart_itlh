var localStorage = window.localStorage;

function logout()
{
    window.location = "../index.html";
}

var userid = localStorage.getItem('userid');

$.ajax({
	type: 'GET',
	url: 'http://127.0.0.1:8000/getcartdetail/'+userid,
	dataType: 'json',
	encode: true,
})

.done(function(data){

	console.log(data);
	i = 0;

	if(data.length==0)
	{
		document.getElementById('product-row').innerHTML = "<h3 class='empty-wishlist-h2'>Your list is empty</h3>";
	}

	for(i=0;i<data.length;i++)
	{
		var product_id = data[i]['product_id'];
		total = 0;

		$.ajax({
			type: 'GET',
			url: 'http://127.0.0.1:8000/getproductdetail/'+product_id,
			dataType: 'json',
			encode: true,

		})

		.done(function(data){

			no = 0;
			
			console.log(data);

			if(data[no]['count']>0)
			{
				var status = 'In Stock';
			}
			else
			{
				var status = 'Out of Stock';
			}

			document.getElementById('product-row').innerHTML += ` <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 custom-col-list cart-div">
							<div class="try clearfix">
							<div class="remove-icon" onclick="removefromcart(`+data[no]['id']+`);"><p>x</p></div>
                            <div class="col-sm-6 col-md-6 thumbnail-product margin-0 zeropadding">

                                    <div class="portfolio-one wishlist">

                                        <div class="portfolio-item">
                                            <a href="Detail.html?id=`+data[no]['id']+`" class="">
                                                <img src="http://127.0.0.1:8000/storage/`+data[no]['image_url']+`" alt="img" class="responsive-image pro-img" id='product-img'>
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
                                    <p class="">Status: `+status+`</p>
                                </div>

                                <div>
                                    <p>Price: $`+data[no]['price']+`</p>
                                </div>

                            </div>
                            </div>
                        </div>`;

                        total += data[no]['price'];

                        no++;
                        
                        document.getElementById('total-p').innerHTML = `Total: $`+total;
		});

	}



//console.log(localStorage.getItem("userid"));

});


function removefromcart(id)
{
	var userid = localStorage.getItem('userid');

	$.ajax({
			type: 'DELETE',
			url: 'http://127.0.0.1:8000/removefromcart/'+id+'/'+userid,
			dataType: 'json',
			encode: true,

		})

		.done(function(data){

			if(data["result"]=="true"){
				window.location = 'Cart.html';
			}

		});

}

function Checkout()
{
	if(total!=0){
		window.location = "precheckout.html";
	}
}