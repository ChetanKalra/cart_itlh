function logout()
{
	window.location = "index.html";
}

function remove()
{
	var product_title = document.getElementById('p-title').value;

	$.ajax({
		type: "DELETE",
		url: "http://127.0.0.1:8000/getproductdetail/"+product_title,
		encode: true
	})

	.done(function(data){

			// window.location = "Admin.html";	

			$('#removeModal').modal('hide');
		
	});


}

$('#file-upload').bind('change', function(){

	var filename = '';
	filename = $(this).val();
	$('#file-selected').html(filename);

});

$('#file-upload-edit').bind('change', function(){

	var filename = '';
	filename = $(this).val();
	$('#file-selected-edit').html(filename);

});

// function add()
// {
// 	var title = document.getElementById('add-title').value;
// 	var price = document.getElementById('add-price').value;
// 	var count = document.getElementById('add-count').value;
// 	var category = document.getElementById('add-category').value;
// 	var description = document.getElementById('add-description').value;
// 	var image_name = document.getElementById('file-upload').files[0];

// 	console.log(image_name);

// 	if(category==1)
// 	{
// 		var image_url = "Running/";
// 	}
// 	else if(category==2)
// 	{
// 		var image_url = "Football/";
// 	}
// 	else
// 	{
// 		var image_url = "Lifestyle/";
// 	}

// 	var image_url = image_url+image_name.name;
// 	console.log(image_url);

// 	var product_detail = { title:title, price:price, count:count, category:category, description:description, image_url:image_url };
	
// 	$.ajax({
// 		type: 'POST',
// 		url: 'http://127.0.0.1:8000/getproductdetail',
// 		data: product_detail,
// 		dataType: 'json',
// 		encode: true,
// 	})

// 	.done(function(data){

// 		console.log(data);
// 		$('#myModal').modal('hide');


// 	});

// }


function getlist(){
	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8000/getusers',
		dataType: 'json',
		encode: true,
	})

	.done(function(data){
		// console.log(data);

		document.getElementById('listrowscroll').innerHTML = '';

		for(i=0;i<data.length;i++)
		{
			document.getElementById('listrowscroll').innerHTML += `<div class="row listrow">

	              <div class="col-md-1 col-sm-1">
	                <h6 class="userlisth6 user_no">`+(i+1)+`</h6>
	              </div>

	              <div class="col-md-3 col-sm-3">
	                <h6 class="userlisth6 user_name">`+data[i]['name']+`</h6>
	              </div>

	              <div class="col-md-4 col-sm-4">
	                <h6 class="userlisth6 user_email">`+data[i]['email']+`</h6>
	              </div>

	              <div class="col-md-4 col-sm-4">
	                <h6 class="userlisth6 user_date">`+data[i]['created_at']+`</h6>
	              </div> `;
	    }
	});
}

function getorders(){
	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8000/getorders',
		dataType: 'json',
		encode: true,
	})

	.done(function(data){
		// console.log(data);

		document.getElementById('ordersrowscroll').innerHTML = '';

		for(i=0;i<data.length;i++)
		{
			document.getElementById('ordersrowscroll').innerHTML += `<div class="row listrow">

	              <div class="col-md-2 col-sm-2">
	                <h6 class="userlisth6 user_id_orders">`+data[i]['user_id']+`</h6>
	              </div>

	              <div class="col-md-2 col-sm-2">
	                <h6 class="userlisth6 product_id_orders">`+data[i]['product_id']+`</h6>
	              </div>

	              <div class="col-md-4 col-sm-4">
	                <h6 class="userlisth6 status_orders">`+data[i]['status']+`</h6>
	              </div>

	              <div class="col-md-4 col-sm-4">
	                <h6 class="userlisth6 date_orders">`+data[i]['created_at']+`</h6>
	              </div> `;
	    }

	});
}

function getproducts()
{
	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8000/getproducts',
		dataType: 'json',
		encode: true,
	})

	.done(function(data){
		// console.log(data);

		document.getElementById('productsrow').innerHTML = '';

		for(i=0;i<data.length;i++)
		{
			document.getElementById('productsrow').innerHTML += `
			<a data-toggle="modal" data-target="#editdetailsmodal" onclick="editproductdetails(`+data[i]['id']+`);"><div class="col-sm-6 col-md-4 custom-modal-thumbnail">
              <div class="thumbnail">
                <img src="http://127.0.0.1:8000/storage/`+data[i]['image_url']+`">
                <div class="caption">
                  <h5 class="modal-product-title">`+data[i]['title']+`</h5>
                </div>
              </div>
            </div></a>`;
		}



	});
}

function editproductdetails(id){
	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:8000/getproductdetail/'+id,
		dataType: 'json',
		encode: true,
	})

	.done(function(data){
		// console.log(data);

		document.getElementById('edit-title').value = data[0]['title'];
		document.getElementById('edit-price').value = data[0]['price'];
		document.getElementById('edit-count').value = data[0]['count'];
		document.getElementById('edit-category').value = data[0]['category'];
		document.getElementById('edit-description').value = data[0]['description'];

		document.getElementById('editbtn').onclick = function () {
    		update(data[0]['id']);
    		return false; // stop the browser from following the link
  		};

	});

}

function update(id)
{
	var title = document.getElementById('edit-title').value;
	var price = document.getElementById('edit-price').value;
	var count = document.getElementById('edit-count').value;
	var category = document.getElementById('edit-category').value;
	var description = document.getElementById('edit-description').value;
	// var image_name = document.getElementById('file-upload-edit').files[0];    ----------------------uncomment/* image

	// console.log(image_name);

	// if(category==1)						----------------------uncomment/* image
	// {
	// 	var image_url = "Running/";			----------------------uncomment/* image
	// }
	// else if(category==2)
	// {
	// 	var image_url = "Football/";		----------------------uncomment/* image
	// }
	// else
	// {
	// 	var image_url = "Lifestyle/";
	// }									----------------------uncomment/* image

	

	// if(image_name == undefined)	----------------------uncomment/* image
	// {		----------------------uncomment/* image
		var product_detail = { title:title, price:price, count:count, category:category, description:description , size: 5};	
	// }		----------------------uncomment/* image
	// else		----------------------uncomment/* image
	// {			----------------------uncomment/* image

	

	// 	var image_url = image_url+image_name.name;
	// 	var product_detail = { title:title, price:price, count:count, category:category, description:description , image_url:image_url , size:6 };	
	

	// }		----------------------uncomment/* image
	
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8000/updateinfo/'+id,
		data: product_detail,
		dataType: 'json',
		encode: true,
	})

	.done(function(data){

		// console.log(data);
		$('#editdetailsmodal').modal('hide');
		getproducts();

	});
}