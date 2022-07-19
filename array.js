//array

//let dept=[sci,'math',l,true];
//console.log(dept);
//console.log(dept[2]);

let months=['january','february','march','april','june','july','auguest'];
console.log(months);
console.log(months.length);   //length array

console.log(months.pop);    // reomve the last element
console.log(months);

//console.push("dec");
let c=months.push("chaitra");  //add element end of the array
console.log(months);
let abc=months.push("chaitra");
console.log(abc);

console.log(months.shift());  //remove the first element
console.log(months);
 
console.log(months.unshift("hii"));  //add the element of the start
console.log(months);


//slice indexof splice fill includes
let month=['january','february','march','april','june','july','auguest'];
console.log(month.slice(1,3));
console.log(month.join(" and "));  //join element


let year=[2020];
let year1=[2022];
console.log(month.concat(year.year1));  //marge exiting array
console.log(month.indexOf('march'));   //search the element
console.log(month.lastIndexOf('februray'));
const a=[22,23,23,24,25,23];
//console.log(a.lastindexOf(24));
console.log(month.fill("abc",1,4));
console.log(month.includes('may',6));
console.log(month.reverse());         //reverse element
//console.log(month.valuesof('march'));


let v = "array.isArray(month))";
console.log(v);
console.log(Array.isArray(month));

console.log(month.splice(11,1));
const week=['january','february','march','april','june','july','auguest'];
console.log(week.splice(2,1,'fri'));
console.log(week.splice(1,'fri'));
console.log(week);
let number=[0,1,2,3,4,5,6];
console.log("original array number:",number);
let newnumber=number.splice(3,0,7);
console.log("new array:",number);



for(i=0;i<month.length;i++)
console.log(""+month[i]);

//for in-to get index value
//for off-to get the value of array
for(let dt of month){
    console.log(dt);
}
for(let dp in month){
    console.log(dp);
}
month.forEach(function(elt,array,index){
    console.log(array+index);
    console.log(elt+index);
    console.log(elt);
    });

//slice
 //const fruits=['banana','orange','lemon','Apple','mango'];
 //const citrus=fruits.slice(1,3);
 //console.log(citrus);

