<!DOCTYPE html>
<html>
<head>
    <title>Add Products</title>
</head>
<body>
    <form method="POST" action="/product/">

        <lable>Product Title:</lable><br>
        <input type="text" name="title" id="title"><br>    
        <lable>Product Description:</lable><br>
        <input type="text" name="description" id="description"><br>
        <lable>Product Price:</lable><br>
        <input type="text" name="price" id="price"><br>        
        <lable>Product Image:</lable><br>
        <input type="file" name="image_url" id="image_url"><br>   
        <lable>Product Count:</lable><br>
        <input type="number" name="count" id="count"><br>   
        <input type="submit" id="submit">
    </form>
</body>
</html>