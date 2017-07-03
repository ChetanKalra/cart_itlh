var localStorage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + id);
    }
};

document.getElementById("login").addEventListener("click", checkCredentials, false);

function checkCredentials(event) {
    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;
    var User = { userName: userName, pass: pass };

    $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/login/', // the url where we want to POST
            data: User, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);
            if (data["result"] == "true")
                window.location = "dashboard.html";
            else
                alert("wrong credentials");

            // here we will handle errors and validation messages
        });

    event.preventDefault();

}




app.initialize();