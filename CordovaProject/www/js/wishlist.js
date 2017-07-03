var localStorage = window.localStorage;

function logout()
{
    window.location = "../index.html";
}

var userid = localStorage.getItem('userid');

$.ajax({
	type: 'GET',
	url: 'http://127.0.0.1:8000/getfromwishlist/'+userid,
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

			document.getElementById('product-row').innerHTML += ` <div class="col-md-6 col-sm-12 col-xs-12 col-lg-6 custom-col-list wishlist-div">
							<div class='try clearfix'>
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

                                <div class="" style="margin-bottom: 60px;">
                                    <p>Price: $`+data[no]['price']+`</p>
                                </div>

                            </div>
                           </div>
                        </div>`;

                        no++;

		});
	}

//console.log(localStorage.getItem("userid"));

});

function movetocart(productid)
{

	console.log('m2c');
	var details = { userid: userid , productid: productid };

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
            
            console.log('Added to cart');

            var id1 = 'add2cart'+productid;
            var id2 = 'added2cart'+productid;
            document.getElementById(id1).style.display = 'none';
            document.getElementById(id2).style.display = 'block';

        }


    });
}