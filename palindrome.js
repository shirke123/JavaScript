//palindrome

 var String;
 console.log("please enter the string");
 var len=String.length;
  var msg="It is a palindrome";
 for( var i=0;i<len/2;i++)
 if(String[i]!=String[len-1-i]){
    msg='palindrome';
 }

///palindrome string 
 function checkPalindrome(string) {

   const len = string.length;
   for (let i = 0; i < len / 2; i++) 
   {
     if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
       }
   }
   return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value); 

//



