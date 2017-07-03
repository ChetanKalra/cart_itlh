
findGetParameter('category');

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }


    if(result==1)
    {
        document.getElementById('category-title').innerHTML = 'Running';
    }
    else if(result==2)
    {
        document.getElementById('category-title').innerHTML = 'Football';
    }
    else if(result==3)
    {
        document.getElementById('category-title').innerHTML = 'Lifestyle';
    }
    else
    {
        document.getElementById('category-title').innerHTML = 'Category';   
    }

             
        $.ajax({
            type: 'GET', // define the type of HTTP verb we want to use (POST for our form)
            url: 'http://127.0.0.1:8000/getproduct/'+result, // the url where we want to POST
            // data: product, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true,
        })
        
        .done(function(data) {

            console.log(data);


            for(var i=0; i<data.length;i++)
            {

            document.getElementById('product-row').innerHTML += `<div class="col-sm-6 col-md-6 col-lg-4 thumbnail-product">

                                <div class="portfolio-one">

                                    <div class="portfolio-item">
                                        <a href="links/Detail.html?id=`+data[i]['id']+`" class="">
                                            <img src="images/Product-Images/`+data[i]['image_url']+`" alt="img" class="responsive-image">
                                        </a>

                                         <h3 class='product-title'>`+data[i]['title']+`</h3><span class='price-tag'>$`+data[i]['price']+`</span>
                                        
                                    </div>

                                </div>
                        </div>`;

                }
       
        });

}


// <div class="">
//                                             <div class="or-buttons-style-2 margin-bottom-30 margin-top-20">
//                                                 <a href="#" class="button button-blue button-round">$ `+data[i]['price']+`</a>
//                                             </div>
//                                         </div>



function logout()
{
    window.location = "index.html";
}