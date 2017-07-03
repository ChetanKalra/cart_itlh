var localStorage = window.localStorage;

function logout()
{
    window.location = "../index.html";
}

var userid = localStorage.getItem('userid');

function add_new()
{
	var add1 = document.getElementById('Address-field-1').value;
	var add2 = document.getElementById('Address-field-2').value;
	var add3 = document.getElementById('Address-field-3').value;
	var add4 = document.getElementById('Address-field-4').value;

	if(add1=="")
	{
		document.getElementById('Address-field-1-error').innerHTML = "*This field is required";
	}else if(add3=="")
	{
		document.getElementById('Address-field-1-error').innerHTML = "";
		document.getElementById('Address-field-3-error').innerHTML = "*City must be field";
	}else if(add4=="")
	{
		document.getElementById('Address-field-1-error').innerHTML = "";
		document.getElementById('Address-field-3-error').innerHTML = "";
		document.getElementById('Address-field-4-error').innerHTML = "*Pin code is required";
	}else{


	var address = add1 + add2 + ', ' + add3 + ', ' + add4;

	var add = { userid:userid , address:address };

	console.log(address);

	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:8000/address',
		data: add,
		dataType: 'json',
		encode: true,
	})

	.done(function(data){


		console.log(data);

		if(data["result"]=="true"){
			window.location = "precheckout.html";
		}


	});

}

}