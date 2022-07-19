//filter
const school=[10,20,30,40];
for(var i=0;i<=school.length;i++){
    school[i]*=2;
}
let  newArray=school.filter((school)=>{
    return school<34;
})
console.log(newArray);

//map function
