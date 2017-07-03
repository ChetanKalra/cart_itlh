var localStorage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        //setCredentials();
    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

document.getElementById("registerButton").addEventListener("click", registerUser, false);

function registerUser(event) {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var userName = document.getElementById("userName").value;
    var pass = document.getElementById("pass").value;

    var User = { fullName: fullName, userName: userName, pass: pass, email: email };

    $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/registration/', // the url where we want to POST
            data: User, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);
            window.location = "dashboard.html";

            // here we will handle errors and validation messages
        });

    event.preventDefault();

    //Users.push(User);
    //console.log(Users);
    //localStorage.setItem("Users", JSON.stringify(Users));

    //console.log(localStorage);

}

app.initialize();