

//page-8 pb- odd even both
function foo(n){
        if(n[0]%2==0&&n[1]%2==0){
            console.log("Even");
        }
         else if(n[0]%2!=0&&n[1]%2!=0){
            console.log("Odd");
        }
        else{
            console.log("Even-Odd");
        }
}


foo(3,4)

//...............................................................

function detectPalII(N, string) {
  //palindrome means nyn 1 ch odd elem hava bs 2 astil tr no pal

  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] += 1;
    }
  }
  let count = 0;
  for (let key in obj) {
    if (obj[key] % 2 != 0) {
      count++;
    }
  }

  if (count <= 1) {
    console.log("Pal");
  } else {
    console.log("Not Pal");
  }
}
detectPalII(6, "aaabcc");

//..............................................
function dayOfTheWeek(day, N) {
  //write code here
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var x = N % 7;
  for (var i = 0; i < days.length; i++) {
    if (days[i] == day) {
      if (i + x >= days.length) {
        console.log(days[(i + x) % 7]);
      } else {
        console.log(days[i + x]);
      }
    }
  }
}


//..................................................



function maximumOccuringElement(A, N) {
  //why the key needs to store in aanskey variable
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (obj[A[i]] === undefined) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]] += 1;
    }
  }
  let max = 0;
  let ansKey;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      ansKey = key;
    }
  }
  console.log(ansKey);
}
maximumOccuringElement([0, 2, 0, 6, 9], 5);

//....................................................

// closure problem  inner fun has access to outer variables
var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};
var store = sum(2, 3, 4); //calling
console.log(store.getSumTwo());//5
console.log(store.getSumThree());//9



///.....................................................

//fun currying 
function a(A="hello"){
  return function b(B){
    return function c(C){
      return function d(D){
        return A+B+C+D;
      }
    }
  }
  }
  console.log(a()(3)(4)(5))//str is adding with numbers hence o/p is str hello345
   console.log(a(2)(3)(4)(5)); //only numbers o/p is 14 (A="hello"==parameter which has value  is 2 (argument))




   //................................................................



const users = [
  { firstName: "dhanu", lastName: "Upadhye", age: 23 },
  { firstName: "dipeeka", lastName: "Padukon", age: 35 },
  { firstName: "anushka", lastName: "sharma", age: 30 },
  { firstName: "prineeti", lastName: "chopra", age: 35 },
];

//find how many people have perticular age {26:2,75:1...}
//we have to use reduce here..

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    //we are checking in 1st iteration  if 26 is there or not in 2nd iteration 75 is there or not
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

//not understanding
//OR

const output1 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    //we are checking in 1st iteration  if 26 is there or not in 2nd iteration 75 is there or not
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output1);

