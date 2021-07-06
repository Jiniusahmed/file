// Array.prototype.mid = function (v) {
//   const midIndex = Math.round(this.length / 2);
//   const removedElements = this.splice(midIndex, (this.length - midIndex), v);
//   const expectedArray = this.concat(removedElements);
//   this.splice(0, this.length, ...expectedArray);
//   return v
// };

// // // Primitive Data Type
// // /*
// // 1. string type
// // 2. number type
// // 3. boolean type
// // 4. undefined
// // 5. null
// // 6. NaN
// // */

// // // Data type conversion: implicit and explicit conversion
// // //explicit conversion: In this fact, Programmer must do the conversion. e.g.
// // // + operator er kaj dui rokom. ekta hochche addition, arekta hochche concatenation
// // var num = 15
// // console.log(String(num)) // '15'
// // var string = '20'
// // var calc = Number(string) + 10 // explicit conversion
// // console.log(calc)

// // console.log(Number(true) + 15) // true = 1
// // console.log(Number(false) + 10) // false = 0
// // console.log(Boolean(0)) // undefined, null, 0, NaN, ''

// // // implicit conversion: auto conversion done by JS Engine
// // console.log('A' + 'B')
// // console.log(10 + 5) // arithmetic operation
// // console.log('10' + 5) // '10' + String(5) = '105'
// // console.log('20' - '5') // Number("20") - 5 = 15

// // // triple eual/ strict equal / double equal/ loose equal
// // console.log(false === 0)
// // console.log(false == 0) // Number(false) == 0 --> 0 == 0
// //                         // false == Boolean(0) --> false == false

// // console.log([] == 0) // Number([]) == 0 --> 0 == 0
// // console.log([20] - 13) // Number([20]) - 13 --> 20 - 13
// // console.log([20] + 13) // String([20]) + 13 --> "20" + 13

// // console.log(NaN == NaN) // false
// // console.log(Boolean(NaN) == Boolean(NaN)) // false

// // // isNaN always checks if the given data/ value is character string. if it is, isNaN will return true, otherwise false

// // var str = 'bogra'
// // //console.log(Number(str))
// // console.log(isNaN(str)) // isNaN(Number(str))
// // // isNaN --> is it character?
// // // !isNaN --> is it number?
// // if(!isNaN(str)) { // !isNaN --> is a number?
// //     //console.log('it works')
// // };

// // var value = 10
// // //console.log(typeof value) // "string", "number"

// // if(typeof value === 'string') {
// //     console.log('This is string')
// // }

// // console.log(Number(false) === 0) // Number(false) === 0
// // console.log(false == '0')
// // // lexicographical ordered operation / alphabetical order
// // // all capital letters are smaller than small letters
// // console.log('c' < 'ac')
// // console.log("69" > "59")
// // console.log(15456451351 < 'A') // always false
// // console.log('A' > '=')
// // console.log(Boolean(undefined) === Boolean(null))
// // console.log(undefined == null) // true
// // console.log(NaN === NaN)
// // console.log(undefined === undefined)
// // console.log(null === null)
// // console.log([] == 0)
// // console.log([] === [])
// // console.log({a:5} === {a:5})
// // // reference data type
// // var a = 5
// // var b = a
// // a = 10
// // console.log(b)
// // var obj = {
// //     x: 15
// // }
// // var obj1 = obj
// // obj.x = 20
// // console.log(obj1)
// // console.log('************************************')

// // /*
// // আপনাকে এমন একটি function তৈরী করতে হবে যা input হিসেবে একটি number নিবে এবং সেই number এর প্রতিটি digit কে বর্গ করে তাকে concatenate করে একটি নতুন number output হিসেবে পাঠাবে। function-টিতে অবশ্যই return statement ব্যবহার করতে হবে।
// // উদাহরণস্বরূপ, আমরা যদি function-টির মাধ্যমে 9119 input দেই তবে output হিসেবে আসবে 811181, কারণ 9^2 -> 81 এবং 1^1 -> 1
// // */
// // /*
// // 9 -> 9^2 = 81
// // 1 -> 1^ 2 = 1
// // 1 -> 1^2 = 1
// // 9 -> 9^2 = 81
// // '81' + '1' + '1' + '81' = '811181' -> 811181 <-
// // */

// // function test(num) {
// //     var string = String(num) // "9119"
// //     var result = '' // "811181"
// //     for(var i = 0; i < string.length; i++) {
// //         result = result + (string[i] * string[i]) // Math.pow(string[i], string[i])
// //     }
// //     return result
// // }

// // //console.log(test(99))

// // function test(num) {
// //    var numArray = String(num).split('') // ["9", "1", "1", "9"]
// //    var newArray = numArray.map(e => e * e) // ["81", "1", "1", "81"]
// //    return newArray.join('')
// // }

// // //console.log(test(9119))
// // ////////////////////////////////////////////////////////////////////////
// // // function findPosition(str) {
// // //     var letters = ' abcdefghijklmnopqrstuvwxyz'
// // //     var result = ''
// // //     for(var i = 0; i < str.length; i++) {
// // //         for(var j = 1; j < letters.length; j++) {
// // //             if(str[i] === letters[j]) {
// // //                 result = result + j
// // //             }
// // //         }
// // //     }
// // //     return result
// // // }
// // // console.log(findPosition('zahid')) // "261894"

// // function findPosition(str) {
// //     var letters = ' abcdefghijklmnopqrstuvwxyz'
// //     var result = ''
// //     for(var i = 0; i < str.length; i++) {
// //         result = result + letters.indexOf(str[i])
// //     }
// //     return result
// // }
// // //console.log(findPosition('zahid'))

// // function sqrt(num){
// //     var numArr = String(num).split("");
// //     var arr = []
// //     for(var i = 0; i < numArr.length ; i++){
// //         var a = numArr[i] * numArr[i];
// //         arr.push(a)
// //     }
// //     return arr.join('')
// // }
// // //console.log(sqrt(99))

// // // একটি অ্যার দেওয়া আছে,
// // // let array = ['mango', 'zahidul islam', 'tomato', 'zohurul islam'];
// // // এমন একটি ফাংশন তৈরি করতে হবে যেনো শুধু মাত্র ওই অ্যারে থেকে মানুষের নাম গুলোই বের করে। ebong ta ekti notun array-te rekhe sei array-k return korte hobe.

// // var array = ['a', 'b', 5, 'a', 'bogra', 'b', 5, 20, 10, 'a']

// // //console.log(array.indexOf(array[3]))

// // function booleanAdding(arr){
// //     var count = 0;
// //     for( var i = 0; i < arr.length; i++){
// //       if(arr[i] === 'mango') {
// //           count++
// //       }
// //     }
// //  return count
// //  }
// //  console.log(booleanAdding(["anarosh", "kola", "mango", "mango", "tomato", "lebu", "mango"]))

// //  //["anarosh", "kola", "mango", "mango", "tomato", "lebu", "mango"]

// //  // implicit conversion -- jokhon JS engine nije theke kono kichu convert kore
// //  //explicit conversion -- jokhon programmer JS engine-k diye conversion koriye ney

// //  console.log(Number(true) + 2) // explicit conversion
// //  console.log(true + 4) // implicit conversion
// //  console.log(Number(null) === Number(false))
// //  console.log(false == 0)

// //  // reference data type

// //  function largestSwap(num) {
// //     var numToStr = String(num); // "27"
// //     // var numToStr1 = num.toString();
// //     var changeNum = numToStr[1] + numToStr[0]; // "72"
// //     if(num >= Number(changeNum)){ // 27 >= 72
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }
// // //console.log(largestSwap(32)); // 23

// // /* 2. Find the Smallest and Biggest Numbers
// // Description: Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// // function minMax(arr) {
// // 	// code here
// // }
// // Examples
// // minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// // minMax([2334454, 5]) ➞ [5, 2334454]
// // minMax([1]) ➞ [1, 1] */
// // function minMax(arr) {
// //     var largest = -Infinity;
// //     var smallest = Infinity;
// //     var minMaxArr = []
// //     for(var i = 0; i < arr.length; i++) {
// //         if(largest < arr[i]) {
// //             largest = arr[i];
// //         }
// //         if(smallest > arr[i]) {
// //             smallest = arr[i]
// //         }
// //     }
// //     minMaxArr.push(largest)
// //     minMaxArr.push(smallest)
// //     return minMaxArr
// // }
// // //console.log(minMax([1, 5, 8, 100, 2, 3, 4,-5, 5]))
// // ASCII --> Americal Standard Code Information Interchange
// function findLength(string) {
//   var result = 0;
//   for (var i = 0; i < string.length; i++) {
//     if (string[0] === string[0].toUpperCase()) {
//       if (string[i] === string[i].toUpperCase()) {
//         result++;
//       }
//     }
//     if (string[0] >= "a" && string[0] <= "z") {
//       if (string[i] >= "a" && string[i] <= "z") {
//         result++;
//       }
//     }
//   }
//   return result;
// }
// //console.log(findLength("BanGladesH"));
// //console.log(findLength("jaVaScripT"));

// // Reference data type

// var a = 5;
// var b = a;
// a = 10;
// //console.log(b) // primitive type data

// var arr = [2, 6];
// var arr2 = arr;
// arr.push(10);
// //console.log(arr) // it is called reference type data
// var arr3 = [2, 6, 10];
// //console.log(arr3 === arr2)
// //console.log(arr === arr2)
// var x = [2, 3];
// var y = [2, 3];
// //console.log(x === y)

// // stack memory, heap memory
// // stack memory is resposible to store Primitive data type
// // heap memory is resposible to store reference data type

// // Primitive data type
// /*
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. NaN
// */

// // Reference data type
// /*
// 1. Array
// 2. Object
// 3. function
// */
// // sort method

// var myArray = [1, 10, 100, 20, 2000, 49, 5, 8];
// // [1, 10, 20, 100, 49, 5, 8, 2000]
// // [1, 10, 20, 49, 5, 8, 100, 2000]
// // [1, 10, 20, 5, 8, 49, 100, 2000]
// // [1. 10, 5, 8, 20, 49, 100, 2000]
// // [1, 5, 8, 10, 20, 49, 100, 2000]
// // "Zb", "za",
// var sortedArray = myArray.sort(function (a, b) {
//   return b - a;
// }); // lexicographical order
// //console.log(sortedArray)

// // sort method takes an callback function. this function has two parameters
// var names = ["zahidul", "mursalin", "minhaz", "jinius", "zahidul", "redwan"];
// // bubble sorting
// // merge sorting
// // quick sorting -- what is the concept or how it works
// // selection sorting
// var sortedNames = names.sort(function (a, b) {
//   //console.log(a < b)
//   if (a > b) {
//     return 1; // --> > 0
//   } else if (a < b) {
//     return -1; // --> < 0
//   } else {
//     return 0; // --> === 0
//   }
// }); // lexicographical order
// //console.log(sortedNames)

// /*
// টাইটেল: Array থেকে ডুপ্লিকেট এলিমেন্ট বাদ দেয়া
// এমন একটি ফাঙ্কশন বানাতে হবে যা প্যারামিটার হিসেবে নিবে একটি array  এবং আউটপুট দিবে এমন একটি array যেখানে কোনো ডুপ্লিকেট এলিমেন্ট থাকবে না।
// Examples:
// removeDuplicate (["red", "green", "blue", "red", "brown", "green", "orange", "orange", "violet", "red" ]) --> ["red", "green", "blue", "brown", "orange", "violet" ]
// removeDuplicate(["mursalin", "jinius", "minhaz", "redwan", "farjana "]) --> ["mursalin", "jinius", "minhaz", "redwan", "farjana "]
// */

// // ["red", "green", "blue", "red", "brown", "green", "orange", "orange", "violet", "red" ]

// // ["red", "green", "blue", "brown", "green", "orange", "orange", "violet"]
// // ["red", "green", "blue", "brown", "orange", "orange", "violet"]
// // ["red", "green", "blue", "brown", "orange", "violet"]

// var array = [
//   "red",
//   "green",
//   "blue",
//   "red",
//   "brown",
//   "green",
//   "orange",
//   "orange",
//   "violet",
//   "red",
// ];
// // splice method takes 3 parameters
// // first parameter is the index - starting position to delete element(s)
// // second parameter is a number- how many elements you want to delete
// // third parameter is a value - if you want to replace with
// // only index parameter is mendatory
// // splice method changes the original array
// // splice method returns array with deleted value

// array.splice(4, 1, ["a", 10]);
// //console.log(array)

// function removeDuplicate(array) {
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         array.splice(j, 1);
//       }
//     }
//   }
//   return array;
// }

// console.log(
//   removeDuplicate([
//     "red",
//     "green",
//     "blue",
//     "red",
//     "brown",
//     "green",
//     "orange",
//     "orange",
//     "violet",
//     "red",
//   ])
// );

// // function removeDuplicate(array) {

// //   var uniqueArray = [...new Set(array)]
// //   return uniqueArray
// // }

// console.log(
//   removeDuplicate([
//     "red",
//     "green",
//     "blue",
//     "red",
//     "brown",
//     "green",
//     "orange",
//     "orange",
//     "violet",
//     "red",
//   ])
// );

// var myArr = [
//   "red",
//   "green",
//   "blue",
//   "red",
//   "brown",
//   "green",
//   "orange",
//   "orange",
//   "violet",
//   "red",
// ];
// var mySet = new Set(myArr);
// mySet.add('Zahidul')
// mySet.add('bogra')
// mySet.add('sylhet')
// mySet.add('bogra')
// mySet.add('bogra')
// <...> <-- this is called spread operator
// var myAnotherSet = [...mySet];
// console.log(myAnotherSet);
// console.log(mySet.size);
// //ES6 mySet[i]
// for (var value of mySet) {
//   console.log(value);
// }

// console.log(mySet);

// /*
// 3. Check if One Array can be Nested in Another
// Description: Create a function that returns true if the first array can be nested inside the second.
// function canNest(arr1, arr2) {
// 	// code here
// }

// arr1 can be nested inside arr2 if:
// arr1's min value is greater than arr2's min value.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false
// */
// //ES6
// // function canNest(arr1, arr2) {
// // 	return Math.min(...arr1) > Math.min(...arr2)
// // }
// // a + b
// // console.log(canNest([9, 9, 8], [8, 9]))
// // Infinity is a variable attached to global object
// // positive Infinity is greater than any other number
// // negative Infinity is smaller than any other number
// // var x = 999999999999999
// // var myInfinity = x + 1
// // console.log(myInfinity > x)
// //console.log(-Infinity < -10)

// function canNest(arr1, arr2) {
//   var largeLen = arr1.length > arr2.length ? arr1.length : arr2.length;
//   var minValueOfArr1 = Infinity; // 1
//   var minValueOfArr2 = Infinity; // 0
//   for (var i = 0; i < largeLen; i++) {
//     if (arr1[i] < minValueOfArr1) {
//       minValueOfArr1 = arr1[i];
//     }
//     if (arr2[i] < minValueOfArr2) {
//       minValueOfArr2 = arr2[i];
//     }
//   }
//   return minValueOfArr1 > minValueOfArr2;
//   // if(minValueOfArr1 > minValueOfArr2) {
//   //   return true
//   // }else {
//   //   return false
// }
// //console.log(canNest([1, 2, 3, 4], [1, 5, 9, 20, 0, 6]));

//////////////////////////////////////////////////////////////
// let arr = [2, 5, 7, 9, 0, 20];
// arr.mid('hi')
// console.log(arr)

// let myArr = ['red', 'green', 'blue', 'gray', 'sky', 'orange', 'lightgreen']
// myArr.mid('pink')
// console.log(myArr)

///////////////////////////////////////////////////////////////

/*
মনে করো তোমার ক্লায়েন্ট তোমাকে বললো, "আমার অনলাইন নিউজপেপারে ডেট এবং সময় প্রকাশ হয় ইংরেজিতে। যেহেতু আমার নিউজপেপারের রিডার সবাই বাঙালি, সেহেতু আমি চাচ্ছি যে ডেট এবং সময় যেন বাংলায় দেখায়।"
এখন তোমার জন্য চ্যালেঞ্জ হয়ে দাঁড়ালো যে ইংরেজি ডিজিটকে বাংলায় কনভার্ট করা। এই প্রোগ্রামটি তৈরী করতে পারলেই, ক্লায়েন্ট যা চাচ্ছে তা তুমি করে দিতে পারবে। 
উপরের ঘটনাকে বিবেচনা করে এমন এনকি function create করো যা কিনা ইংরেজি নাম্বারকে বাংলায় রূপান্তর করবে। 
Example :
converToBanglaNumber(2021)  --> ২০২১
converToBanglaNumber(10999) --> ১০৯৯৯
নোট : Let's take this challenge and accomplish
*/

// function onverToBanglaNumber(num) {
//   var str = "০১২৩৪৫৬৭৮৯";
//   num = String(num);
//   var result = "";
//   for (var i = 0; i < num.length; i++) {
//     result = result + str[Number(num[i])]; // num[i] = 1, 2, 3, 4, 5 --> str[1] -->
//   }
//   return result;
// }
// you can't pass 0 in first place
//console.log(onverToBanglaNumber(2021));

// 2. for...of - ES6
// var a = ["orange", "banana", "apple"];
// for (var element of a) {
//   console.log(element);
// }

// 3. for...in - ES6
// var obj = {
//   name: "zahidul",
//   address: "bogra",
// };
// var myName = "name";
// console.log(obj[myName]);
// var emptyArr = [];
// for in loop is used to travers through object keys
// var xy = [5, 6];
// for (var i in xy) {
//   console.log(xy[i]);
// }
// for (var key in obj) {
//   emptyArr.push([key, obj[key]]);
// }
// console.log(emptyArr);

// 4. Object.entries - ES6
// var object = {
//   x: 5,
//   y: "zahid",
// };
// console.log(Object.entries(object));

// 5. spread operator - ES6

// ...
// var obj = {
//   a: 5,
//   b: 10,
//   name: 'zahidul'
// }
//var myArray = [[], []]
// console.log(Object.entries(obj))
// var str = '2561794'
// console.log(Math.max(...str)) // "2", "5", "6", "1", "7", "9", "4"
// var arr = ['red', 'green', 'blue']
// var arr2 = ['sky', 'lightgreen']
// var anotherArray = [...arr, 'zahidul', ...arr2]
// console.log(anotherArray)
// var numStr = '123'
// function add(x, y, z) {
//  return Number(x) + Number(y) + Number(z)
// }
// console.log(add(...numStr))

// rest operator/ rest parameter - ES6
// you have to mention the rest parameter always at the end
// function test(x, ...args) {
//   console.log(args)
// }
// test(10, 50, 'zahidul', 'red')

// 6. concat arrays
// var str = 'zahidul'
// var str2 = ' islam'
// var newStr = str.concat(str2)
// console.log(newStr)
// var newArray = arr.concat(arr2)
// console.log(newArray)
// 7. type of functions - pure/ impure
// 8. break statement within for...loop
// break statement breaks a for...loop
// 9. continue statement in for..loop
// continue skips the steps of for...loop
// 10. includes method of array
// 1. slice method
/* 
এমন একটি function তৈরী করো যা argument হিসেবে একটি string array নেবে এবং চেক করে দেখবে যে array এর element string এর সাথে কোনো নাম্বার আছে কিনা। যদি থাকে তবে সেই element গুলো আরেকটা array এর মধ্যে নিয়ে return করতে হবে। যেমন - numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"], এখানে array এর প্রথম element "1a" তে নাম্বার আছে এবং "2b" তে নাম্বার আছে। তাই রিটার্ন হয়েছে ["1a", "2b"], আরো উদাহরণ - numInStr(["abc", "abc10"]) ➞ ["abc10"], numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"], numInStr(["this is a test", "test1"]) ➞ ["test1"]
বি.দ্র: অরিজিনাল array কে change করা যাবে না।
*/

// ["abc", "ab10c", "a10bc", "bcd"]

//console.log(!isNaN(' '))

// break statement
// continue statement
// var str = 'my country is Bangladesh'
// for(var j = 0; j < str.length; j++) {
//   if(str[j] === ' ') continue; //
//   console.log(str[j])
// }

// function numInStr(arr) {
//   var result = []
//   for(var i = 0; i < arr.length; i++) {
//     for(j = 0; j < arr[i].length; j++) {
//       if(arr[i][j] === ' ') continue;
//       if(!isNaN(arr[i][j])) {
//        result.push(arr[i])
//        break;
//       }
//     }
//   }
//   return result
// }
//console.log(numInStr(['my country is Bangladesh', "abc", "ab01c", "a10bc", "b3cd25"]))

//  isAllDigitPresent (981423568910)

// includes method of array

// includes methid always returns Boolean value (true/ false)
// includes method takes a parameter value which you want to check
// parameter value is mendatory

// var arr = [0, 3, 4, 5, 7, 8, 9, 'zahidul']
// console.log(arr.includes('zahidul'))
// for(var i = 0; i < arr.length; i++) {
//   if(arr[i] === 'zahidul') {
//     console.log(true)
//   }
// }

// function isAllDigitsPresent(num) {
//   var strNum = num.toString()  // "891204356789"
//   var arrayToCompare = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // 8 === "8"
//   for(var value of strNum) {
//     if(arrayToCompare.includes(Number(value))) { // "8" --> 8
//       //arrayToCompare.splice(Number(value), 1, true) // "9" --> 9
//       delete arrayToCompare[Number(value)]
//     }
//   }
//   console.log(arrayToCompare)
//   // var newArray = arrayToCompare.filter(function(value) { // this is called callback function
//   //   return typeof value === 'number'
//   // })
//   var newArray = []
//   for(var value of arrayToCompare) {
//     if(typeof value === 'number') {
//       newArray.push(value)
//     }
//   }
//   console.log(newArray)
//   return newArray.length === 0 ? true : false
// }
// console.log(isAllDigitsPresent (8912435607891))

/////////////////////////////////////////////////////

// var colors = ['red', 'green', 'blue']

// for(var color of colors) {

//   console.log(color)
// }
// colors.splice(1, 1, true)

// console.log(colors)

// filter function
// filter method takes a function as argument and that function takes
// filter method always returns an arrau
// var mixed = [2, 5, 'red', 'zahidul', true, 4, false]
// var filteredArray = mixed.filter(function (value, index, array) {
//   return index > 2
// })
// console.log(filteredArray)

// // function expression

// var x = function () {
//   console.log('function x is called')
// }

// x()

// function randomWord(str){
//   var randomNum = Math.floor(Math.random() * 5)
//   var getRandomWord = str[randomNum];
//   return getRandomWord
// }
// console.log(randomWord(["red", "green", "blue", " teal", "oranged"]))

// reverse method of array

// var arr = [1,2,3,4]
// console.log(arr.join('')) // "1,2,3,4"

// function reverseString(str) {
//   //return str.split('').reverse().join('')
//   var result = ''
//   for(var i = 0; i < str.length; i++) {
//     result = str[i] + result
//   }
//   return result
// }
// console.log(reverseString('bangladesh'))

// function findLongestWord(str) {
//   var strArray = str.split(' ')
//   //console.log(strArray)
//   var longestWord = '' // "activity
//   for(var i = 0; i < strArray.length; i++) {
//     if(strArray[i].length > longestWord.length) {
//       longestWord = strArray[i]
//     }
//     //console.log(strArray[i].length)
//   }
//   return longestWord
// }
// console.log(findLongestWord('we have to be genius by our activity'))

// function findLongestWord(str) {
//   var strArray = str.split(' ')
//   var longestWord = strArray.sort(function(a, b) {
//     return b.length - a.length
//   })
//   return longestWord[0]
// }
// console.log(findLongestWord('we have to be genius by our activity'))

//create a function that takes an argument as string and returns the character which appears the most.

// [["b", 1], ["a", 1], ["n", 1]....]
// ["b", 1], ["a", 1], ["n", 1]....

// function mostAppearingChar(str) {
//   var obj = {} // {"t": 2, "i": 1, "k": 2, "o": 1}
//   for(var i = 0; i < str.length; i++) {
//     if(obj[str[i]]) {
//       obj[str[i]] = obj[str[i]] + 1
//     }else {
//       obj[str[i]] = 1
//     }
//   }
//   // to get max value
//   var maxValue = -Infinity
//   var targetedKey = ''
//   for(var key in obj) {
//     if(obj[key] > maxValue) {
//       maxValue = obj[key]
//       targetedKey = key
//     }
//   }
//   return `${targetedKey} appears ${maxValue} times`
// }
//console.log(mostAppearingChar('bangladesh')) // --> "a appears 2 times"
//console.log(mostAppearingChar('beautiful')) // --> "u appears 2 times"
//console.log(mostAppearingChar('tiktok')) // --> "t appears 2 times"

// slice method
// slice method takes two parameter values
// first parameter value is the array index which is starting point to slice
// the end point where we want to stop slicing is the next index of that end point index
// slice method does not change the original array
// parameter value is not mendatory
// var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
// //               0               3
// var slicedArray = alphabets.slice(0, 3)
// console.log(slicedArray)
// console.log(alphabets)
// splice method
// splice method removes array of element(s)
// splice method changes the original array
// splice method takes three parameter values
// first parameter value is the index where we want to start removing
// second parameter value (number) is how many element(s) we want to remove
// third parameter value is any type of value (it can be string, number, array, object etc) which we want to replace with the removed element(s). We can push multiple values as well.
// first parameter value is mendatory
// splice method returns array with removed element(s)
// var colors = ['red', 'green', 'yellow', 'pink']
// var splicedArray = colors.splice(1, 2, [10, 25], 'zahidul', {a: 5})
// console.log(splicedArray)
// console.log(colors)
// delete method
// delete method removes element but keeps that index of removed element with undefined value
// var countries = ['Bangladesh', 'India', 'Pakistan', 'Srilanka']

// delete countries[1]
// delete countries[3]
// console.log(countries)

//The slice() method
// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

//splice() method
//The splice() method adds/removes items to/from an array, and returns the removed item(s).

//delete method
// The delete keyword deletes both the value of the property and the property itself. After deletion, the property cannot be used before it is added back again.

/* 
getString([
  [1, 3, 2, 'a', 7, 9, 4, 6, 8],
  [4, 9, 8, 2, 6, 1, 'b', 7, 5],
  ['c', 'h', 6, 3, 8, 4, 2, 1, 9],
  [6, 4, 3, 1, 'd', 8, 7, 9, 2],
  [5, 2, 'e', 7, 9, 3, 8, 4, 6],
  [9, 8, 7, 4, 2, 'f', 5, 3, 1],
  [2, 1, 4, 9, 3, 5, 6, 8, 'g'],
  [3, 'h', 5, 8, 1, 7, 9, 2, 4],
  [8, 7, 9, 6, 4, 2, 1, 'i', 3]
])
function doneOrNot(board) {
  //your code goes here
}
Tomader kaj hochche array gulo theke shudhu matro string gulo niye notun ekti array return korte hobe.
result should be like this ----> ["a", "b", "c", " h", "d", "e", "f", "g", "h", "i"]
বি.দ্রঃ splice method ব্যবহার করা বাধ্যতামূলক।
*/
// Jinius, Minhaz, Redwan, Mursalin, Farjana-- all elements we will get inside temp array
//

// includes method always returns Boolean value
// var cities = ['Dhaka', 'Chittagong', 'Bogra', 'Dhaka', 'Sylhet', 'Kushtia', 'Faridpur', 'Bogra', 'Chittagong', 'Dinajpur', 'Faridpur']
// // ['Dhaka', 'Chittagong', 'Bogra', 'Sylhet', 'Kushtia', 'Faridpur', 'Dinajpur']
// // ['Chittagong', 'Sylhet', 'Faridpur']
// var temp = [] // [Dinajpur']
// var city
// var uniqueArray = [] // ["Dhaka", "Chittagong", "Bogra", "Sylhet", "Kushtia", "Faridpur", "Dinajpur"]
// for(var i = 0; i < cities.length; i++) {
//   if(uniqueArray.includes(cities[i])) {
//     console.log(cities[i])
//   }else {
//     uniqueArray.push(cities[i])
//   }
//   //temp = cities.splice(i, 1, true)
//   //temp = [...temp, ...cities.splice(i, 1)] // temp = [Dinajpur']
//   //temp = temp.concat(cities.splice(i, 1, true))
// }
// console.log(uniqueArray)
// console.log(city)
// console.log(cities)
// console.log(temp)

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])

// [5, 27, 39, 1001]

// var a = [1, 2, 3]
// var b = [4, 5, 6]
// a = a.concat(b)
// console.log(a)

// function spliceMethod(array) {
//   var newArray = []
//   for(var i = 0; i < array.length; i++) {
//     newArray = newArray.concat(array.splice(i, 1))
//     i = i - 1
//   }
//   return newArray
// }

//console.log(spliceMethod(['Farjana', 'Mursalin', 'Jinius', 'Minhaz', 'Redwan', 'Zahidul']))

// var string = 'zahidul'
// console.log(string.split('l'))
// var arr = ['red', 'green', '']
// console.log(arr[arr.length - 1] === '')

// function endingCheck(str, target) {
//   str = str.split(target) // ["He has to give me a new ", ""]
//   console.log(str)

//   if(str[str.length - 1] === '') {
//     return true
//   }else {
//     return false
//   }
// }

// console.log(endingCheck("Bastain", "an"));
//console.log(endingCheck("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
//console.log(endingCheck("He has to give me a new name", "name"))
//console.log(endingCheck("Open sesame", "sage"))
//console.log(endingCheck("Open sesame", "game"))

// function confirmEnding(str, target) {
//   if(str.lastIndexOf(target) == (str.length-target.length)){
//     return true;
//   } else {
//     return false;
//   }
// }

//console.log(confirmEnding("Open sesame", "same"));
// consecutive = ধারাবাহিক  --> 1, 2. 3
// 2, 5, 6, 7, 8, 10

// function check(first, second) {
//   var array = []
//     for(var i = 0; i < first.length; i++) {
//       console.log(first[i], i)
//       for(var j = 0; j < second.length; j++) {
//         if(second.length === 1 && first[i] === second[j]) {
//           return true
//         }
//         if(first[i] === second[j]) {
//           array.push(i)
//         }
//       }
//     }
//     for(var i = 0; i < array.length; i++) {
//     }
//     for(var j = array.length - 1; j >= 0; j--) {
//       console.log(array[j])
//     }
// }
// console.log(check('bangladesh', 'glas')) // expected result = true
// 1, 3, 4, 5, 8
// 8, 5, 4, 3, 1
//---------------
// 9, 8, 8, 8, 9
// if a function receives another function as argument, that (another function) is called callback function.
// who receives a callback function is called higher order function

// function a(callback) {
//   return callback()
// }

// function c() {
//   return 'I am Zahidul'
// }

// var b = a(c)

// console.log(b)

//map, filter, sort, forEach, reduce, every, some, find, findIndex
// all the above methods use callback function as their parameter value

// var arr = [1, 2, 3]
// arr.map(function(value) {
//   console.log(value)
// })

// var obj = {
//   a: 5,
//   b: function() {
//     console.log('I am a method of object (obj)')
//   }
// }

// obj.b()

// timing function
// there are two timing functions in JS, they are:- 1) setTimeout, 2) setInterval
// concept of synchronization and asynchronization

// 1) setTimeout function calls itself within a certain time.
// setTimeout function takes two parameter values. first parameter is a function and second parameter is millisecond
// setTimeout function calls itself only one time
// 1000 millisecond = 1 second
// setInterval function calls itself continuously based on delay time
// every setInterval or setTimeout function returns an ID. this ID is used to stop the timing function.
// to stop a timing function, clearInterval or clearTimeout is used
// DOM - Document Object Module

// how to get html element(s)
// In JS every element of html is called node
//var h1Tag = document.getElementsByTagName('h1')
//var jsTag = document.getElementById('js')
//var h1Tag = document.getElementsByClassName('demo')
//var h1Tag = document.querySelector('.demo')

// var h1Tag = document.querySelector('.demo')
// h1Tag.innerHTML = 'Zahidul'
// //text.style.color = 'red'

// // how to add class or remove class by JS

// h1Tag.style.backgroundColor = 'red'

// //var id = setInterval(timing, 1000);

// var i = 1 // 1

// function timing() {
//     console.log(i) // 1, 2, 3, 4, 5, 1
//     i = i % 5 // i = 0
//     i++ // i = 1
// }

// function nestedArray(array, num){
//   var result = []
//   var x = 0
//   for(var i = 0; i < array.length; i = i + (array.length / num)) {
//     result[x] = array.slice(i, i + (array.length / num))
//     x++
//   }
//   return result
// }
// console.log(nestedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6))

// var numArray = []

// numArray[0] = 1
// numArray[2] = 2
// numArray[4] = 3

// console.log(numArray)

// function replaceInAlphabeticalOrder(str) {
//   let arr = str.split(''); // [c, b, d]
//   let temp = '';
//   for (let i = 0; i < str.length; i++){ // arr[i] = c
//     for (let j = i + 1; j < str.length; j++){ //  arr[j] = b
//       if (arr[i] > arr[j]) { // arr = [b, c, d]
//         temp = arr[i] // temp = c
//         arr[i] = arr[j]; // arr[i] = b
//         arr[j] = temp; // arr[j] = c
//       }
//     }
//     console.log(arr)
//   }
//   return arr.join('');
// }

//console.log(replaceInAlphabeticalOrder('zahidul')); // adhiluz

//var myArray = [5, 10]
// var temp
// if(myArray[0] > myArray[1]) {
//   temp = myArray[0]
//   myArray[0] = myArray[1]
//   myArray[1] = temp
// }

//console.log(myArray)

// function replaceInAlphabeticalOrder(str) {
//   // code here
//   var myStr = ''
//   var mainStr = 'abcdefghijklmnopqrstuvwxyz'
//   for (var i = 0; i < mainStr.length; i++) {
//       if (str.includes(mainStr[i])) {
//           myStr = myStr + mainStr[i]
//       }
//   }
//   return myStr
// }
//console.log(replaceInAlphabeticalOrder('zahidul'))

///////////////////////////////////////////////////////////

// function titleCase(str) {
//   str = str.toLowerCase()
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
// 		if(i === 0) {
//     	newStr = str[i].toUpperCase()
//     }
//     if(i > 0) {
//       if(str[i] === ' ') {
//         newStr = newStr + ' ' + str[i + 1].toUpperCase()
//         i = i + 1
//       }else {
//         newStr = newStr + str[i]
//       }
//     }
//   }
//   return newStr;
// }

//console.log(titleCase("I'm a little tea pot"))
//console.log(titleCase("sHoRt AnD sToUt"))

////////////////////////////////////////////////////////////////////

//let result = []

// function printArray(arr) {
//   for (var i = 0; i < arr.length; i++)
//     if (Array.isArray(arr[i])) {
//       printArray(arr[i])
//     }else {
//       result.push(arr[i])
//     }
//   return result
// }

// var numAray = [
//   [1, 5, [11, 22, [33, 44]], ['a', 'b'] ],
//   [[[[7, 4]]]]
// ];
// console.log(printArray(numAray))

// function printArray1(arr) {
//   let result = []
//   for (var i = 0; i < arr.length; i++) {
//     for(var j = 0; j < arr[i].length; j++) {
//         if (Array.isArray(arr[i][j])) {
//           arr[i] = arr[i][j]
//           j = -1
//         }else {
//           result.push(arr[i][j])
//         }
//     }
//   }
//   return result
// }
// console.log(printArray1(numAray))

// function myFun(str) {
//   var newStr = str.toLowerCase()
//   var result = "";
//   for (var i = 0; i < newStr.length; i++) {
//     if (i === 0) {
//       result = newStr[i].toUpperCase()
//     }
//     if (i > 0) {
//       if (newStr[i] === ' ' && newStr[i + 1] < 'A' || newStr[i + 1] > 'z') {
//         result = result + ' ' + '' + newStr[i + 2].toUpperCase()
//         i = i + 2
//       } else if (newStr[i] !== '.' && newStr[i] < 'A' || newStr[i] > 'z') {
//         result = result + ' ' + newStr[i + 1].toUpperCase()
//         i = i + 1;
//       } else {
//         result = result + newStr[i]
//       }
//     }
//   }
//   return result;
// }
// console.log(myFun("bangladeSH is a~beauTiful Country./WE*love {our$COUNTRY"))

// ASCII -> American Standard Code for Information & Interchange

// ACII code usees 7 bits numbers
// ASCII code produce always string

// (48 - 57) -> ("0" - "9")
// (65 - 90) -> ("A" - "Z")
// (97 - 122) -> ("a" - "z")

// var str = 'zahid'
//  console.log(str.charAt(3))

// "gap" -> what is the binary Number

// "g" -> 103 -> 1100111
// 64 + 32 + 4 + 2 + 1 = 103

//  64 32 16 8  4  2  1 --> 64 + 32 + 4 + 2 + 1 = 103
//  1  1  0  0  1  1  1

// "a" -> 97
// "p" -> 112

// 64  32  16  8   4   2   1 --> 64 + 16 + 4 + 2 = 86 --> "V" (Capital)
// "V" (Capital) --> 1010110
// 1   0   1   0   1   1   0 -> example-1 of a 7 bits binary number

// 1111111 -> example-2 of a 7 bits binary number
// 0000000 -> example-3 of a 7 bits binary number

// Lower-case G

//console.log("g".charCodeAt())

// function myFun(str) {
//   var newStr = str.toLowerCase()
//   var result = "";
//   for (var i = 0; i < newStr.length; i++) {
//     if (i === 0) {
//       result = newStr[i].toUpperCase()
//     }
//     if (i > 0) {
//       if (newStr[i] === ' ' && newStr[i + 1] < 'A' || newStr[i + 1] > 'z') {
//         result = result + ' ' + '' + newStr[i + 2].toUpperCase()
//         i = i + 2
//       } else if (newStr[i] !== '.' && newStr[i] < 'A' || newStr[i] > 'z') {
//         result = result + ' ' + newStr[i + 1].toUpperCase()
//         i = i + 1;
//       } else {
//         result = result + newStr[i]
//       }
//     }
//   }
//   return result;
// }
// console.log(myFun("bangladeSH is a~beauTiful Country./WE*love {our$COUNTRY"))

// function frankenSplice(arr1, arr2, n) {

// }

//frankenSplice([1, 2, 3], ['red', 'green', 'yellow', 'pink'], 2);

// the condition is:- you have to return a new array. arr1 and arr2 must not be changed

// [4, 1, 2, 3, 5, 6]
// [4, 5, 6, 1, 2, 3]

// ['red', 'green', 1, 2, 3, 'yellow', 'pink']

// var, let, const

// function frankenSplice(arr1, arr2, num) {
//   var result = arr2.slice()

//   var temp = result.splice(num)
//   console.log(result)
//   console.log(temp)
//   result = result.concat(arr1, temp)
//   return result
// }
//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 0))
//console.log(frankenSplice([1, 2, 3],
//['red', 'green', 'yellow', 'pink'], 2))

// function frankenSplice(arr1, arr2, n) {
//   var x = arr1.slice()
//   console.log(x) // "1,2,3"
//   x.splice(n, 0, ...arr1)
//   console.log(x)
// }
// //frankenSplice([1, 2, 3], ['red', 'green', 'yellow', 'pink'], 2)

// function frankenSplice(arr1, arr2, n) {
//   var result = [...arr2]
//   result.splice(n, 0, ...arr1)
//   console.log(result)
// }
// frankenSplice([1, 2, 3], ['red', 'green', 'yellow', 'pink'], 2)

// var elements = document.getElementsByClassName('demo')
// var h2 = document.querySelector('#h2')

//elements[1].style.color = 'green'

//h2.classList.add('zahidul')
// var x = 0
// var id = setInterval(myFunc, 1000)

// h2.classList.add('zahid')
// console.log(h2.classList.contains('zahid'))

// function myFunc() {
//   x++
//   if(h2.classList.contains('zahid')) {
//     h2.classList.remove('zahid')
//   }else {
//     h2.classList.add('zahid')
//   }
//   // if(x >= 10) {
//   //   clearInterval(id)
//   // }
// }

// var, let, const

// var <-- keyword
// let <-- keyword
// const <-- keyword

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//   let greeting = "say hello";
// }

// let num1 = 10;
// const num = 10;
// console.log(greeting);

// function findLCM(arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   let maxValue = Math.max(arr[0], arr[1]);
//   let minValue = Math.min(arr[0], arr[1]);

//   let i;
//   for (i = maxValue; i % minValue !== 0; i = i + maxValue) {}

//   if (arr.length > 2) {
//     arr.splice(0, 2)
//     arr.push(i) // arr = [5, 6]
//     return findLCM(arr)
//   }
//   return i;
// }
// console.log(findLCM([24, 36, 54, 72, 96]));

// for of loop
// for of loop is to use to avoid traditional for...loop
// let colors = ['red', 'green', 'blue']

// for(let color of colors) {
//   console.log(color)
// }

// for(let index in colors) {
//   console.log(colors[index])
// }

// let obj = {
//   color: 'blue',
//   age: 21,
//   address: 'Bangladesh',
//   age: 15
// }

// for(let key in obj) {
//   let values = obj[key]

//   console.log(key)
//   console.log(values)
// }

// for (let i = 0; i < Object.entries(obj).length; i++) {
//   let keys = Object.entries(obj)[i][0]
//   let values = Object.entries(obj)[i][1]

//   console.log(keys)
//   console.log(values)
// }


// for in loop
// if we try to traverse the keys of an Object, we will use for in loop

// 1, 20 othoba 3, 12 :- duita number-er ekta jodi 1 hoy othoba  duita number-er borotake jodi chotota diye nisheshe bivajjo hoy tobe GCF hobe choto number-ti.

function getGCF(a, b) {
  let ln = a > b ? a : b
  let sn = ln === a ? b : a
  let gcf
  let remainder = ln % sn // remainder = 10

  if(remainder === 0) {
    gcf = sn
  }else {
    for(let i = 0; i < Infinity; i++) {
      ln = sn
      sn = remainder
      remainder = ln % sn
      if(remainder === 0) {
        gcf = sn
        break;
      }
    }
  }
  return gcf
}
console.log(getGCF(8, 30))

function gcd_two_numbers(x, y) {
  while (y) { // 6
    var i = y; // i = 2
    y = x % y; // y = 0
    x = i; // x = 2
  }
  return x;
}
console.log(gcd_two_numbers(8, 30));

//////////////////////////////////////////////////

function findLCM(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  let maxValue = arr[0] > arr[1] ? arr[0] : arr[1]
  let minValue = maxValue === arr[0] ? arr[1] : arr[0]

  let GCF
  let remainder = maxValue % minValue
  if (remainder === 0) {
    GCF = minValue
  } else {
    for (let i = 0; i < Infinity; i++) {
      if (maxValue % minValue !== 0) {
        maxValue = minValue
        minValue = remainder
        remainder = maxValue % minValue
        if (remainder === 0) {
          GCF = minValue
          break;
        }
      }
    }
  }
  var LCM = (arr[0] * arr[1]) / GCF

  if (arr.length > 2) {
    arr.splice(0, 2)
    arr.push(LCM)
    return findLCM(arr)
  }
  return LCM;
}
console.log(findLCM([2, 3, 4, 5, 6]))








