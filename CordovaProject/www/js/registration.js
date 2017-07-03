var localStorage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //setCredentials();
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);
    }
};

document.getElementById("Register").addEventListener("click", registerUser, false);

function registerUser(event) {
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;


    if(Name==""||Email==""||Password=="")
    {
        document.getElementById('ErrorSignUp').style.marginTop = '-15px';
        document.getElementById('ErrorSignUp').innerHTML = '*All fields are required';
    }
    else
    {
        var flag = 1;
        var atpos = Email.indexOf("@");
        var dotpos = Email.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>= Email.length) {
           
           document.getElementById('ErrorSignUp').style.marginTop = '-15px';
           document.getElementById('ErrorSignUp').innerHTML = '*Enter a valid email address';
           flag = 0;
           
        }
        
        if(flag==1)
        {

        var User = { Name: Name, Email: Email, Password: Password };

        $.ajax({
                type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url: 'http://127.0.0.1:8000/registration/', // the url where we want to POST
                data: User, // our data object
                dataType: 'json', // what type of data do we expect back from the server
                encode: true,
            })
            // using the done promise callback
            .done(function(data) {

                console.log(data);

                if (data["result"] == "true"){
                    window.location = "../index.html";
                }
                else
                {
                    document.getElementById('ErrorSignUp').style.marginTop = '-15px';
                    document.getElementById('ErrorSignUp').innerHTML = '*Email ID already in use';
                }

                // here we will handle errors and validation messages
            });
        }
    }

    event.preventDefault();
}

function Login_link()
{
    window.location = "../index.html";
}

app.initialize();