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

document.getElementById("addButton").addEventListener("click", addProduct, false);

function addProduct(event) {

    var Product = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
        image_url: document.getElementById("image_url").value,
        count: document.getElementById("count").value
    };

    $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/product/', // the url where we want to POST
            data: Product, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        // using the done promise callback
        .done(function(data) {
            // log data to the console so we can see
            console.log(data);
            if (data["status"] == "true")
                window.location = "dashboard.html";
            else
                alert("product adding failed");

            // here we will handle errors and validation messages
        });

    event.preventDefault();
}

app.initialize();