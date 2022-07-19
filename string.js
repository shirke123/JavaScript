//string
let string="hello";
console.log(string);

let string1=new String("javascript");
console.log(string1);

//string method in javascript
let str1="hello good morning";
 console.log(str1.length);         //length of string
 console.log(str1.indexOf("a",11));  //find position of string return -1

 console.log(str1.lastIndexOf("g",12));  


//search string
console.log(str1.search("good"));


//slice method
console.log(str1.slice(0,9));
//substring
console.log(str1.substring(3,8));

//replace

//toUppercase  and toLowercase
console.log(str1.toUpperCase());  //upprcase string
console.log(str1.toLowerCase());  // lowercase string

//concat() method
let str4='java and javascript';
console.log(str4.concat(str4));   //joins  two or more string

//trim() method
console.log(str4.trim());   //remove white space

//split() method
console.log(str4.split());   //converted string to a array
var a='1,2,3,4,5,6,7';
console.log(a.split());


 //charAt()
let str3="welcome javascript";
console.log(str3.charAt("last"));

//charcode() method
console.log(str1.charCodeAt(2)) ;  //unicode of the characters
console.log(str1.charCodeAt);   //string in javascript
