console.log("Pandiaraj");
//functios
// verb
function funname() {
    console.log("karthi");
    console.log("surya");
    console.log("nithin");
    console.log("dinesh");
    console.log("mathan");
}
funname ();
 //for the javascript is the functions are the first citizens
 //Memory Allowcation & Exicution call type of Hosity and functions but there are difference in hoisty and functions
 // functions declaration 

 function funname () {
console.log("Pandiaraj");
 }
 funname ();

 //first class function
 // parameters and arguments
 //for example
 //your =name(parameter)
 function yourage(age){
    console.log(`Hi ${age} ,your age is young.....`);
 }

 yourage("24");
 //Its a argument
 // we can use it a common data type in function
 // functin can be retrun any thing types of datas in function

 function greetme (name) {
    return(`Hi ${name},welcome to Guvi...`);
 }
 greetme("Pandi");

 function executefunc(fn ,args) {
    console.log(fn(args));

 }
executefunc(greetme, "Pandi");
//Arrow function => this is dicrectly calling functions
//No return statement
var arrowResult = (num1,num2) => num1+num2;
var value = arrowResult(10 ,15);
console.log(value);
// Multi lines also with return to use the arrwow function 
// It statement are single line method 

//Anonymous Function
//IIFE
//()()
//"function bracket",("call bracket")
// anounymous is a immediate calling function

//Anonymous Function
//Print odd numbers in an array
const argArr = [1, 2, 3, 4, 5, 6, 7];

function printOdd(arr) {
  //
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
}  
printOdd(argArr);

//IIFE function=> Immediatly invoced function
(function(){
   console.log("I am Pandiaraj");
})();
((arr)=> {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        console.log(arr[i]); 
}
}
})(argArr);

//Convert all the strings to title caps in a string array

const myName = "Pandi";

function printName(name) {
  console.log(name);
}
printName(myName);

var task = "sir";
const reversable = task.split("").reverse().join("");
console.log(task === reversable);
//Higher Order Function

function TopLayerFunc(value1) {
   return function (value2) {
     return value1 * value2;
   };
 }
 
 const returnStore = TopLayerFunc(15); // function
 const result = returnStore(12);
 console.log(result);






