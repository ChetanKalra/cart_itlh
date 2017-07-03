document.getElementById('contactSubmit').addEventListener('click',contactFunction,false);

function contactFunction(event)
{
	var name = document.getElementById('contactNameField').value;
	var email = document.getElementById('contactEmailField').value;
	var message = document.getElementById('contactMessageTextarea').value;

	if(name==''||email==''||message=='')
	{
		document.getElementById('contactFieldError').style.display = 'block';
	}
	else
	{
		var flag = 1;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>= email.length) {
           document.getElementById('contactFieldError').style.display = 'none';
           document.getElementById('contactEmailFieldError').style.display = 'block';
           flag = 0;
           
        }


        if(flag==1)
        {
        	alert('Yay');
        }
	}
}