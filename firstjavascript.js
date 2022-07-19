console.log("welcome to javascript");
console(2+5);
alert("helllo Everyone");

var myname="pooja";
console.log(myname);
console.log(typeof(myname));

//naming conversion

 var _myname="pooja";
 console.log("my name is:_myname"); //print string
 var _myname="pooja";
 console.log("my name is:_myname");
 var _myname="pooja";
 console.log("my name is:_myname");

 var hi;
 console.log(hi);
 var hi=true;
 console.log(typeof(hi));
  var hi=1234;
  console.log(typeof(hi));
  var hi="pooja";
  console.log(typeof(hi));

  
  console.log("10+'20':",10+"20"); //1020
  console.log("9-'5':",9-"5"); //4
  console.log("java+script:","java+script"); //javasript
  console.log(""+""); //blank
  console.log(""+40); 
  console.log("pooja"+"shirke"); //non -not a number
  console.log("true+true:",true+true); //2
  console.log("true+false:",true+false); //1
  console.log("false+true:",false+true); //1
  console.log("false+false:",false+false); //0
  console.log("false-true:",false-true); //-1
  

//Assignment operator
var b=45;
var c=45;
console.log("hello",b==c);

y=10;
z=15;
console.log("y==z");

//Arithmatic operator

var a=29,b=20;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

// prefix and postfix

var n1=30,n2=n1++;
console.log(n1);                 //n1=31
console.log("new variable:",n2); //n2=30

var n1=30,n2=++n1;
console.log(n1);              //n1=31
console.log("new variable:",n2); //n2=31

//comparison operator
var a=15,b=20;
console.log("value of a and b:",a,b);
console.log("a==b",a==b);    //false
console.log("a!=b",a!=b);    // true
console.log("a>b",a>b);      // false
console.log("a<b",a<b);      //true
console.log("a>=b",a>=b);    //false
console.log("a<=b",a<=b);    //true
console.log("a===b",a===b);  //false

var a=15,b=15;
console.log("a==b:",a==b);   //true
console.log("a==b",a===b);   //true

//logical operator

var a=30,b=45;
console.log("a&&b",a&&b); //45