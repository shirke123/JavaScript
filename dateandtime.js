//date and time
//date get method of a javascript

var date=new Date();        //current date and time
console.log(date);
//only date
var d=new Date().toLocaleDateString();
console.log(d);
//only time
var t=new Date().toLocaleTimeString();
console.log(t);

var d=new Date().toString();
console.log(d);

console.log(Date.now());

var a= new Date().getFullYear();  //current year display
console.log(a);

var d=new Date().getDay();   //
console.log(d);

var  b=new Date().getSeconds();   //current second display
console.log(b);

var a =new Date().getMilliseconds();   //current millseconds
console.log(a);

var a= new Date().getMonth();   //current months display
console.log(a);

var d=new Date().getMinutes();  //current mintutes display
console.log(d);

var d=new Date().getDate();
console.log(d);

// var d=Date().getHours();
// console.log(d);



//set method in javascript

console.log("set method in javascript");
var a=new Date();
a.setDate(2);
console.log(a.getDate());   // current date display

//math objects
console.log(Math.PI);
//math.round()
var a=161.4379884;
console.log(a);
console.log("",Math.round(a));
//math.pow()
console.log(Math.pow(2,3));
//math squart()
var a=36;
console.log(a);
console.log(Math.sqrt(a));
//math abs()
console.log(Math.abs(-55));
console.log(Math.abs(2-9));
//math.ceil()
console.log(Math.ceil(45-90));
//math.floor()
console.log(Math.floor(34-23));
//math.min()
console.log(Math.min(23,56,1,4,12)); //min value display
//math.max()
console.log(Math.max(45,90,23,45,20)); //max value display
//math.random()
console.log(Math.random());
//math.trunc()
console.log(Math.trunc(20.67));