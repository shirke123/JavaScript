// let arr=['mon','tue','web','fri'];
// console.log(arr.length); //array length

// console.log(arr.pop);  //   remove last element
// console.log(arr);

// // arr.push("hello");
// // console.log(arr);

// let c=arr.push("hello1");   // add element 
// console.log(arr);

// console.log(arr.shift());   //remove the first element
// console.log(arr);

// console.log(arr.unshift());
// console.log(arr);
// arr.unshift("work"); /// add element of the start(first)
// console.log(arr);

// console.log(arr.indexOf("hello1")); // search the element ofthe array
// console.log(arr);


// //slice
// console.log(arr.slice(3));
// console.log(arr.join("add")); //join element
// console.log(arr.includes('fri',3));  //check the array contain 
// console.log(arr.fill('may',3)); //fill the element


// //function  button
// function validateform(){  
//     var name=document.myform.name.value;  
//     var password=document.myform.password.value;  
      
//     if (name==null || name==""){  
//       alert("Name can't be blank");  
//       return false;  
//     }else if(password.length<6){  
//       alert("Password must be at least 6 characters long.");  
//       return false;  
//       }  
//     }


// console.log("hello");
// alert("hello good");
//varibles
// var name="pooja";
// var address;
// console.log(name);

//dom change in js
// var age=prompt("age");
// document.getElementById('sametext').innerHTML=age;

//function
//create the function
//call the function
// function fun(){
//   alert("hello");
// }
//call
// fun();

// function greeting(){
//   var name=prompt("what is your name");
//   var result='hello';
// }

// //string
// let fruit='apple';
// let fruit1='mango';
// console.log(fruit.length);
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit[2]);
// console.log(fruit.slice(3,4));
// console.log(fruit.indexOf);
// console.log(fruit.charAt(2));

//validation button



// function onclick(){
//   document.getElementById("b");

// function myfrom(){

//   var username=document.getElementById("name");
//   var password=document.getElementById("password");

//   if(username.value==""){
//     alert("plaese enter the same value");
//   }

//   if(!(isNaN(username.value))){
  
//     alert("enter the text value in name")

//    }
//  else if(!(isNaN(password.value))){
//     alert("enter the password atleast 6 character")
    
//   }
// }
// myfrom();

// function myfrom(){
// if(password.value.length<9){
//   password.styleborder="1px solid red";
//   pass-error
// }
// }


console.log("welcome to javascript");
var name="raj";
console.log(name);
console.log(typeof(name));
//naming conversion
var _name="pooja";
console.log(_name);
var $name="veer";
console.log($name);
var name="hi";
console.log("hii");
//data type
//operator
var a=20,b=10;
console.log("addition:",a+b);
console.log("substraction:",a-b);
console.log("division:",a/b);
console.log("multiply:",a*b);
console.log("modulus:",a%b);

//swap numbers with temp variable
var a=20;
var b=30;
console.log("",a);
console.log("",b);

var c=a;
a=b;
b=c;
console.log("",a);
console.log("",b);

//without temp variable
var a=67;
var b=50;
a=a+b;
b=a-b;
a=a-b;
console.log("",a);
console.log("",b);

//contriol statements
// if loop
var age=30;
if(age=30){
    console.log("age valid");
}else{
    console.log("age not valid");
}

//leap year or not
var year=2022;
if(year%4==0){
    console.log("leap year");
}else{
    console.log("not leap year");
}

if(a==4){
    console.log("yes");
}else{
    console.log("no");
}

//switch
//function
//anonymous functions

//array
let days=['mon','tue','wed','tue','fri','sat','sun'];
console.log(days);
console.log("second element of the array:",days[2]);
console.log("length of the array:",days.length);  //length of the array
console.log("",days.indexOf());  //-1


//if loop
var age=20;
if(age<17){
    console.log("age not valid");
}else{
    console.log("age valid");
}
//if loop leap year or not
var year=2022;
if(year%4==0){
    console.log("leap year ");
     }
    else{
        console.log("leap yearor not");
    }

//switch
var area;
switch(area){
    case 1: console.log("the area of square");
    break;

    case 2: console.log("Area of the square");
    break;

    case 3: console.log("Area of the square");
    break;

    default:
    console.log("no Invalid");
}
//while loop
var a=20;
while(a<=20){
    console.log(a);
    a++;
}
//do while loop
// var b=12;
// do{
//     console.log(b);
// }while(b<=20);


console.log("Hello  javascript");
var  name="raj";
console.log(name);
// alert(4+8);
function fun(){
    document.getElementById("demo1").innerHTML='hello';
    document.getElementById("demo2").innerHTML='pass';
}

 var firstname;
 let lastname;

 let num=10; //number
 let str="hello"; //string
 let x;
 x=20;
 x="pooja";

 let arr=['mon','fri','sat'];
 console.log(arr.length);//length array
 console.log(arr);//print array
 console.log(arr[2]);
 console.log(arr.length-1);

//   const arr1=new Array("mon","tue");
 
var  date=new Date();   //current date and time
console.log(date);

var d=new Date().getTime();
console.log(d);

var d=new Date().getFullYear();  //current year display+
console.log(d);

var d=new Date().getMonth();  //current month display
console.log(d);

var d=new Date().getDate();
console.log(d);

// var d=new date().getHours();
// console.log(d);

var d=new Date().getMinutes();     //current mintues display
console.log(d);

var d=new Date().getSeconds();    //current second display
console.log(d);

var d=new Date().getMilliseconds();
console.log(d);

var d=new Date().getDay();
console.log(d);


//dom  practise
// function displayDate(){
//     document.getElementById("demo1").innerHTML=Date();
// }


// // document.getElementById("demo").addEventListener("click",fun());
// function fun(){
//     alert("valid your name");
// }



function myfrom(){
    if (!inpObj.checkValidity()) {
        document.getElementById.innerHTML=inobj.Invalid;
    }else{
        document.getElementById.innerHTML="valid";o
    }
    }

