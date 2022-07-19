 //ways to javascript print statement
 console.log("hello world");
  alert("me"); 
 document.write("hello");


 //javascript console API
//  console.error("this is error");
//  console.warn("this is a warning");
 

 //javascript variables
 //variable:- stored a data value.
 var a=10;
 var b=20;
 console.log(a+b);

 //data type in javascript
 // undefined,null,number,  string,boolean,,symbol.
 //numbers
 var num1=10,num2=20.3;
 console.log(num1);

//string
 var str1="hello";
 var str2="hii";
 console.log(str2);

//objects
// booleans
 var a=true;
 var b=false;
 console.log(a,b);

 //undefined
 var und;
 console.log(und);

 //null
 var n=null;
 console.log(n);

 //operator javascript
 //arithmetic
 var a=10,b=20;
 console.log("addition:",a+b);
 console.log("substraction:",a-b);
 console.log("division:",a/b);
 console.log("multiply:",a*b);
 console.log("modulus:",a%b);


 //assignment operator
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a+=b);

//comparision operator
console.log(a==b);
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);

//logical operator
console.log(a&&b);
console.log(a||b);
//console.log(a!b);


//function in javascript

//conditional statement
 //if loop
var age=10;
if(age>18){
    console.log("age");

}else{
    console.log("not age") 
}

//if-else ladder
var age=20;
if(age>15){
    console.log("age child");
}
else if(age>23){
    console.log("age ia not");
}
else{
    console.log("invalid");
}
 

 //for loop
 var arr=[12,45,32,44,4,3];
console.log(arr);
for( var i=0;i<arr.length;i++){
    console.log(arr[i]);
}


//do-while loop
do{
    console.log(arr[i]);
    i++;
}while(i<arr.length);


//array
let myArr=['mon','tue','web','thrus','fri','sat']
//array method
console.log(myArr.length);

myArr.pop();
myArr.push("pooja");
myArr.shift();
console.log(myArr.unshift("pooja"));

//string method
  let str="good morning";
  console.log(str.length);
//   console.log(str.lastindexof(good));
//   console.log(str.indexOf(good));

//   console.log(str.slice(1,4));

  d=str.replace("good","bad");
 d=str=d.replace("good","bad");
 console.log(d,str);
 

 //date in js
 let myDate=new Date();
 console.log(myDate.getTime);
 console.log(myDate.getFullYear);
 console.log(myDate.getDay);
 console.log(myDate.getMinutes);
 console.log(myDate.getHours);

//dom manipulations

 




