

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