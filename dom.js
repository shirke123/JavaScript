//object
//dom manipulation
//ascynous in js
//promises
//javascript events
//selecting in query
//arrow function
//settimeout and setinterval
//local storage
//JSON

function myform(){  
    var name=document("username").value;  
    var password=document("password").value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  