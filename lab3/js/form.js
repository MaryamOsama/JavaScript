function CheckForm(){

     //Validate password
     var passw=  /^[A-Za-z]\w{7,14}$/; 
     var pass = document.getElementById("element_3");
     var para = document.getElementById("length");
     var validPasswd
     if(!pass.value.match(passw))   
     {   
      validPasswd = false;
      para.textContent = "Minimum password length 8 letters"; 
     }  
     else  
      {   
       validPasswd = true ;
      }  
          
    


    //Validate e-mail
    var validEmail = false 
    var x = document.forms["myForm"]["element_2"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var para2 = document.getElementById("Email");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        //alert("Not a valid e-mail address");
        para2.textContent = "Not a valid e-mail address";
        //return validEmail;
    }
    else 
    {
    	validEmail = true;
    }
	
 

    //Validate at least two boxes are checked
	var checked=false;
	var count = 0;
	var elements = document.getElementsByClassName("element checkbox");
	var para3 = document.getElementById("checkBox");

	for(var i=0; i < elements.length; i++){
		if(elements[i].checked) {
           count++;
        if(count==2)
   		{
   		 checked=true;
   		}
   		
   		
	}
}
    if(count<2)
   		{
   		 para3.textContent = "Please select at least two sports";
   		//alert('Please select at least two sports');
		checked = false;
   		}
	//return checked;
    
    if(!checked || !validEmail || !validPasswd)
    {
    	return false;
    }
    else 
    {
    	return true;
    }
}
