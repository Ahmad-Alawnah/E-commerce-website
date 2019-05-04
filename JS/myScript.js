function validateSignUpForm(){
	
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	passw = document.getElementById("pass").value;
	cpassw = document.getElementById("Cpass").value;
	country = document.getElementById("country").value;
	city = document.getElementById("city").value;
	street = document.getElementById("street").value;
	age = document.getElementById("age").value;
	
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("signUpForm");
	myDiv= document.getElementById("signUpDiv");
	
	if (name=="" || email=="" || passw=="" || cpassw=="" || country=="" || city=="" || street==""){
	
		errorText = document.createTextNode("Please fill all required fields");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (passw !=cpassw) {
		errorText = document.createTextNode("Passwords do not match, please try agian");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}
	else if (passw.search(/^[a-zA-Z0-9_]{8,16}$/)!=0){
		errorText = document.createTextNode("Passwords must be between 8 and 16 characters and can contain letters, numbers and underscores");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);
		return false;
	}
	else if (country.search(/^[a-zA-Z \-]{4,56}$/)!=0){
		errorText = document.createTextNode("Please enter a valid country name");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}
	else if (isNaN(age) || age<12 || age>150 ||age==0){
		errorText = document.createTextNode("Please enter a valid age");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}

	else{
		//add user to DB
		return true;
	}
	
}

function deleteError(){
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
}


function validateAddItemForm(){
	
	item_name = document.getElementById("itemName").value;
	item_img = document.getElementById("itemImg");
	item_price= document.getElementById("itemPrice").value;
	item_quantity = document.getElementById("itemQuantity").value;
	list = document.getElementById("itemCategory");
	item_category = list.options[list.selectedIndex].value;
	item_description = document.getElementById("itemDescription").value;
	item_specification = document.getElementById("itemSpecification").value;
	
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("addItemForm");
	myDiv= document.getElementById("addItemDiv");
	
	
	if (item_name==""||item_price==""||item_description==""||itemSpecification==""){
		
		errorText = document.createTextNode("Please fill all fields");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (isNaN(item_price) ||item_price<=0){
		
		errorText = document.createTextNode("Please enter a valid price");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (isNaN(item_quantity) ||item_quantity <=0){
		
		errorText = document.createTextNode("Please enter a valid quantity");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;		
		
	}
	else if (item_category=="Please select"){
		
		errorText = document.createTextNode("Please select a category");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else{
		
		//Add item to DB
		alert("Item added successfully");
		return true;
	}
}

function loadPersonalInfo(){
	
	//get info from DB
	
	name = document.getElementById("name");
	email = document.getElementById("email");
	country = document.getElementById("country");
	city = document.getElementById("city");
	street = document.getElementById("street");
	age = document.getElementById("age");
	
	
	/*
	name.value= //val from DB;
	email.value = //val from DB
	county.value = //val from DB
	city.value = //val from DB
	street. value = //val from DB
	age.value  = //val from DB
	*/
	
}

function updatePersonalInfo(){
	
	name = document.getElementById("name").value;
	email = document.getElementById("email").value;
	country = document.getElementById("country").value;
	city = document.getElementById("city").value;
	street = document.getElementById("street").value;
	age = document.getElementById("age").value;
	
	
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("updatePersonalInfoForm");
	myDiv= document.getElementById("updatePersonalInfoDiv");
	
	if (name=="" || email=="" || country=="" || city=="" || street==""){
	
		errorText = document.createTextNode("Please fill all fields");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (country.search(/^[a-zA-Z \-]{4,56}$/)!=0){
		errorText = document.createTextNode("Please enter a valid country name");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}
	else if (isNaN(age) || age<12 || age>150 ||age==0){
		errorText = document.createTextNode("Please enter a valid age");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}

	else{
		//update user personal info to DB
		alert("Information updated successfully");
		return true;
	}
	
}


function loadAddedItems(){
	
	//get added items from DB for this user
	
	//fill items in select with ID = "required"
	
}

function getItemInfo(){
	
	list = document.getElementById("required");
	item = list.options[list.selectedIndex].value;
	
	//get item info from DB
	
	item_name = document.getElementById("itemName");
	item_img = document.getElementById("itemImg");
	item_price = document.getElementById("itemPrice");
	item_category = document.getElementById("itemCategory");
	item_quantity = document.getElementById("itemQuantity");
	item_description = document.getElementById("itemDescription");
	item_specification = document.getElementById("itemSpecification");
	
	/*
	item_name.value = item name from DB;
	item_img = item img from DB;
	item_price = item price from DB;
	item_category.options[i] = loop over categories and make the category that is the same as the DB selected;
	item_quantity.value = item quantity from DB;
	item_description.value = item description from DB;
	item_specification.value = item specs from DB;
	*/
	
	
}

function updateItemsInfo(){
	
	item_name = document.getElementById("itemName").value;
	item_img = document.getElementById("itemImg");
	item_price= document.getElementById("itemPrice").value;
	item_quantity = document.getElementById("itemQuantity").value;
	list = document.getElementById("itemCategory");
	item_category = list.options[list.selectedIndex].value;
	item_description = document.getElementById("itemDescription").value;
	item_specification = document.getElementById("itemSpecification").value;
	
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("itemsSettingsForm");
	myDiv= document.getElementById("itemsSettingsDiv");
	
	
	if (item_name==""||item_price==""||item_description==""||itemSpecification==""){
		
		errorText = document.createTextNode("Please fill all fields");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (isNaN(item_price) ||item_price<=0){
		
		errorText = document.createTextNode("Please enter a valid price");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (isNaN(item_quantity) ||item_quantity <=0){
		
		errorText = document.createTextNode("Please enter a valid quantity");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;		
		
	}
	else{
		
		//Add item to DB
		alert("Item modified successfully");
		return true;
	}
	
}

function deleteItem(){
	if (confirm("Are you sure that you want to delete the selected item ?")){
		
			current = document.getElementById("error");
		if (current!=null){
			current.parentNode.removeChild(current);
		}
		else setTimeout(deleteError,6000);
	
		error = document.createElement("DIV");
		att = document.createAttribute("class");
		id = document.createAttribute("id");
		att.value="Success ";
		att.value +="text-center";
		id.value="error";
		error.setAttributeNode(att);
		error.setAttributeNode(id);
		myForm = document.getElementById("itemsSettingsForm");
		myDiv= document.getElementById("itemsSettingsDiv");
		
		errorText = document.createTextNode("Item deleted successfully");
		error.appendChild(errorText);

		//remove item that is currently selected from DB
		// select with id required should have nothing selected and the form should be cleared
		
		myDiv.insertBefore(error,myForm);
		
	}
	
}


function updatePassword(){
	
	current_password = document.getElementById("Cpass").value;
	new_password = document.getElementById("Npass").value;
	new_password_confirmation = document.getElementById("ConfirmNPass").value;
	
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("changePasswordForm");
	myDiv= document.getElementById("changePasswordDiv");
	
	//get current pass from DB
	// if (current pass != current_password then display error
	
	if (current_password == new_password){
		
		errorText = document.createTextNode("ERROR, new passowrd can not be the same as old password, please try agian");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	
	else if(new_password != new_password_confirmation){

		errorText = document.createTextNode("ERROR, passwords do not match, please try agian");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else if (new_password.search(/^[a-zA-Z0-9_]{8,16}$/)!=0){
		errorText = document.createTextNode("New password must be between 8 and 16 characters and can contain letters, numbers and underscores");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);
		return false;
	}
	else{
		
		//update password in DB
		alert("password changed successfully");
		return true;
		
	}
}

function validatePaymentInfo(){
	
	
	cards = document.getElementsByName("card");
	card_number = document.getElementById("Cnumber").value;
	security_code = document.getElementById("sc").value;
	expiry_date = document.getElementById("expDate").value;

	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
	else setTimeout(deleteError,6000);
	
	error = document.createElement("DIV");
	att = document.createAttribute("class");
	id = document.createAttribute("id");
	att.value="Error ";
	att.value +="text-center";
	id.value="error";
	error.setAttributeNode(att);
	error.setAttributeNode(id);
	myForm = document.getElementById("paymentInfoForm");
	myDiv= document.getElementById("paymentInfoDiv");
	
		
	if ((cards[0].checked==false && cards[1].checked==false) || card_number==""|| security_code==""||expiry_date==""){ 
	
		errorText = document.createTextNode("Please fill all fields");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	
	}
	else if ((cards[0].checked==false && cards[1].checked==false)){
		
		errorText = document.createTextNode("Please select a card");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;

	}		
	else if (isNaN(card_number)){
		
		errorText = document.createTextNode("Please enter a valid card number");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
	}
	else if (isNaN(security_code) || security_code <=0 ||security_code >999){
		
		errorText = document.createTextNode("Please enter a valid security code");
		error.appendChild(errorText);
		myDiv.insertBefore(error,myForm);	
		return false;
		
	}
	else{
		
		//update DB
		//send email with items
		alert("THIS IS TEMPORARY, WE WILL SEND AN EMAIL");
		return true;

	}
	
}

function validateLogInForm(){
	
	email = document.getElementById("email").value;
	pass = document.getElementById("pass").value;
	remember = document.getElementById("remember");
	
	
	//check DB and compare email with pass
	
	
	if (remember.checked){
		
		//set cookie for one month
		
	}
	
}

function applyFilters(){
	
	list = document.getElementById("sort");
	sort_type = list.options[list.selectedIndex].value;
	price_range = document.getElementById("priceRange");
	cateory_name = document.getElementById("categoryName");
	
	//get all items in category_name
	//iterate and select items whithin price_range
	//sort items based on sort_type
	//display items (call a function if it exists -might do soon-)
	
}
	
	
/******************** END OF VALIDATATION FUNCTIONS (hopefully) ***********************/

/*
 (QUACK) -I wish I was a duck-
*/

//LOADING STUFF

function loadItems(items,container){ //items is an array than contains items' IDs, and container is the id of the parent
	
	/*
		
		for each ID in items do:
			create element DIV with class col and item
			create element A that links to the items' page
			create element img with src = picture of the item
			append img to A and A to DIV
			create element span with class item_detials and create text node that contains name and price of item seperated by a <br>
			append span to DIV
			append DIV to container
			
			//all info about an item is in DB and will be extracted using ID
	
	
	
		//html code for an item:

			<div class = "item col">
			  <a href="" class="item_link">
				<img src="Images/Item.png" alt="item"> <br>
			  </a>
			  <span class="item_details"> Name Name Name Name Name Name <br> Price Price </span><br> <br>
			  <button class="myButton"> Add To Cart </button> <br>
			</div>

	
	
	*/
	
}

function loadNewlyArrivals(){
	
	//get latest additions from DB
	container  = document.getElementById("newestArrivals");
	//loadItems(items,container)	
	
}




