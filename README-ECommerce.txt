-----------------------SETUP------------------------
1. Create a db 'Cart'

2. Import 'cart.sql' file

3. Move the folder 'Cart' to htdocs/www.
The root folder contains two subfolders 'backend' and 'CordovaProject'

4. Run apache and mysql server

5. Using terminal, change path to 'backend' and serve laravel on port=8000
	- php artisan serve --port=8000

6. Change path to 'CordovaProject' and run Cordova in browser with cross origin resource sharing enabled.
	- cordova run browser (localhost:8000)

------------------------USER------------------------

1. Signup or use the below email id and password:
	Username: dipesh@gmail.com
	Password: i_am_dipesh

2. Dashboard.html is the landing page

3. Choose any one of the three categories of shoes
	- List of all products in that particular category will show up

4. Product Description:
	- add/remove a product to/from wishlist
	- add to cart (user will not be able to add the product to cart if it is not in stock but can be added to wishlist. Eg: Running->Air Max)
	- Count/Quantity is fixed to 1

5.  wishlist.html will list all the products that were added to wishlist by the corresponding user

6. cart.html for checkout 
	- Product can be removed by a single click(x) 
	- total amount 
	
7. precheckout.html
	- add delivery address
	- can add multiple addresses and choose any one address for the delivery

8. Orders.html
	- List of all the orders till date

9. Logout

---------------------ADMIN PANEL---------------------

1. Login using:
	Username: admin
	Password: admin

2. Admin can:
	- Add a new product
	- Edit info of existing product
	- Remove a product
	- check list of all users
	- check list of all orders by all the users

3. Adding a product:
	- Enter necessary details
	- Upload image from 'Sampleimages' folder (Le Bron)

4. Edit a product:
	- List of all products will be displayed
	- Click on any product to edit its info

5. Remove
	- Enter Product title/name to remove

6. Logout






