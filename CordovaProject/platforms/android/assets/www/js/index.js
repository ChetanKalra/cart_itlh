var localStorage = window.localStorage;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        initializeTemplates();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + id);
    }
};

document.getElementById("login").addEventListener("click", checkCredentials, false);

function checkCredentials(event) {
    var userName = document.getElementById("Username").value;
    var pass = document.getElementById("password").value;
    var User = { userName: userName, pass: pass };

    if(userName=="admin" && pass=="admin")
    {
        window.location = "Admin.html";
    }

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
            if (data["result"] == "true"){
                localStorage.setItem("userid",data["userid"]);
                //console.log(data["userid"]);
                window.location = "dashboard.html";
            }
            else
                // alert("wrong credentials");
                document.getElementById('ErrorMsg').style.display = 'block';
        });

    event.preventDefault();

}


document.getElementById('signup1').addEventListener("click" , redirectsignup , false);

function redirectsignup()
{
    window.location = "links/Registration.html";
}

function initializeTemplates() {
    var preloader = "<div id='status'> <div class = 'preloader-logo'></div> <h3 class = 'center-text' > Welcome </h3> <p class = 'center-text smaller-text' >We are loading the content, give us a second.This will not take long!</p> </div > ";
    $("#preloader").html(preloader);
}

// function cameraTakePicture() {
//     navigator.camera.getPicture(onSuccess, onFail, {
//         quality: 50,
//         destinationType: Camera.DestinationType.DATA_URL
//     });

//     function onSuccess(imageData) {
//         var image = document.getElementById('myImage');
//         image.src = "data:image/jpeg;base64," + imageData;
//     }

//     function onFail(message) {
//         alert('Failed because: ' + message);
//     }
// }

// function openFilePicker() {

//     navigator.camera.getPicture(onSuccess, onFail, {
//         quality: 50,
//         destinationType: Camera.DestinationType.DATA_URL,
//         sourceType: Camera.PictureSourceType.PHOTOLIBRARY
//     });

//     function onSuccess(imageURL) {
//         var image = document.getElementById('myImage');
//         image.src = "data:image/jpeg;base64," + imageURL;
//     }

//     function onFail(message) {
//         alert('Failed because: ' + message);
//     }
// }


app.initialize();