//Qusetion 1.a

number = [1, 6, 3, 5, 9, 7, 6, 96, 35, 79];
(function(){
    for (let i = 0; i<number.length; i++){
        if(number[i] % 2 !== 0){
            console.log(number[i]);
        }
    }

    })();

    //Question 1.b
    const strArray = ["good", "guvi", "zen", "javascript"]
    const titleCase = (function(arr){
        return arr.map(function(arr1){
            return arr1.charAt(0).toUpperCase() + arr1.slice(1);
        });
    })(strArray)
    console.log(titleCase);


    // Question 1.c

    var Num = [2 , 5 , 6 , 8 , 9 , 4];
    (function (arr1) {
        var result = 0;
        for (let i = 0; i < arr1.length; i++) {
           result += arr1[i];
        }
        console.log(result);
    })(Num);

    //Question 1.d

    const number1 = [1, 2, 3, 5, 6, 4, 9, 14, 47];
(function(){
const Arr5 = function(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
};
const primes = function(array)  {
const result = []; 
for(let i = 0; i < array.length; i++){
if(Arr5(array[i])){
result.push(array[i]);
}
}
console.log(result)
};
primes(number1);
})();

   // Question 1.e
   var words = ["madam", "hello", "level", "world", "noon"];

(function(arr) {
    var palindromewords = [];

    for (let i = 0; i < arr.length; i++) {
        var word = arr[i].toLowerCase();
        var reversedWord = word.split("").reverse().join("");

        if (word === reversedWord) {
            palindromewords.push(word);
        }
    }

    const arr2 = palindromewords;
    console.log(arr2);
})(words);

//Question 1.f

const num1 = [1, 5];
const num2 = [5, 4];

const median = (function (num1, num2)  {
    const combined = [...num1, ...num2];
    combined.sort((a, b) => a - b); 

    const n = combined.length;
    const middleIndex = Math.floor(n / 2);

    if (n % 2 === 0) {

      return (combined[middleIndex - 1] + combined[middleIndex]) / 2;
    } else {
      return combined[middleIndex];
    }
  })(num1, num2);

  console.log(median); 


// Question 1.g

const orgNumbers = [1, 8, 8, 9, 2 , 5, 6, 6, 4];
const uniqueArray = (function(arr){
    return Array.from(new Set(arr));
})(orgNumbers);
console.log(uniqueArray);

// Question 1.h

const Arr2 = [1, 2 , 3, 4, 5];
k = 3;
const rotate = (function(arr , k){
const n = arr.length;
 k = k % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
})(Arr2, k)
console.log(rotate);

// Question 2.a

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); 

//Question 2.b

const strArray1 = ["good", "guvi", "zen", "javascript"]
    const titlecase = (arr) => {
        return arr.map(function(arr1){
            return arr1.charAt(0).toUpperCase() + arr1.slice(1);
        });
    }
    result = titlecase(strArray1);
    console.log(result);

// Question 2.c

var Num = [2 , 5 , 6 , 8 , 9 , 4];
const sum = (arr1) => {
        var result = 0;
        for (let i = 0; i < arr1.length; i++) {
           result += arr1[i];
        }
        console.log(result);
    }
sum(Num);

//Question 2.d

let Num2 = [10, 2, 3, 5, 6, 79, 9, 14, 47]
const Arr = (num)=>{
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false
        }
    }
    return true;
};
const prime = (array)  => {
const result = []; 
for(let i = 0; i < array.length; i++){
if(Arr(array[i])){
result.push(array[i]);
}
}
console.log(result)
};
prime(Num2);

// Question 2.e

var words = ["madam", "hello", "level", "world", "noon"];

const palindrome = (arr)=> {
    var palindromewords = [];

    for (let i = 0; i < arr.length; i++) {
        var word = arr[i].toLowerCase();
        var reversedWord = word.split("").reverse().join("");

        if (word === reversedWord) {
            palindromewords.push(word);
        }
    }

    const arr2 = palindromewords;
    console.log(arr2);
}
palindrome(words);






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






