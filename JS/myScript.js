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
	else return true;
	
}

function deleteError(){
	current = document.getElementById("error");
	if (current!=null){
		current.parentNode.removeChild(current);
	}
}
