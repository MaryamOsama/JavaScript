 var uniquePrevious=0,newName,newEmail,newPhone,newId=0;
 var contactList=[],allContacts=[];
 var i=0,value,j=0;
    
    /*uid = function() {
        return uniquePrevious++;
    }*/
  console.log(uniquePrevious);  

function addContact(_name,_email,_phone) 
{
	if(!( /^[0-9]{11}$/.test(_phone)))
	{
	return "Phone number must contain 11 digits";	
	}
	else{
	contact.name=_name;
	contact.email=_email;
	contact.phone=_phone;
	contact.uniqueId=newId;

	contactList[i]={
	    contacts :{
	    name :_name ,
	    email:contact.email,
	    phone:contact.phone,
	    id :contact.uniqueId
	}
	}
	
	i++
	newId=newId+1;
}
}

var contact = {
                name :newName,
                email:newEmail,
                phone:newPhone,
                uniqueId :newId 
 }

function getAllContacts()
{
	for (value in contactList)
	{
     allContacts[j]=contactList[value].contacts;
     j++;		 
	}
	return allContacts;
}

function getContact(Id)
{
 return contactList[Id];
}

function updateContact(Id,newValues)
{
 var oldValues = getContact(Id);
 var keys=Object.keys(newValues);
 for(var z=0;z<keys.length;z++)
 {
 
 if(keys[z]=='id')
 {
  oldValues.contacts[keys[z]]=oldValues.contacts[keys[z]];
}
 else
 {
 	oldValues.contacts[keys[z]]=newValues[keys[z]];
 }
 }
}

function removeContact(Id,list)
{
 var removedContact = getContact(Id);
 list.splice(Id,1);
}