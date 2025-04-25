// //two pointer on sorted array

// // function returnInd(arr, k) {
// //   let left = 0;
// //   let right = arr.length-1;
// //   while (left < right) {
// //     let sum = arr[left] + arr[right];
// //     if (sum = k) {
// //       return `${left} ${right}`;
// //     } else if (sum > k) {
// //       right--;
// //     } else {
// //       left++;
// //     }
// // }
// // return -1

// // }

// // console.log(returnInd([3, 4, 5, 15],8));

// function twoSum(arr, n, k) {
//   var right = n - 1;
//   var left = 0;
//   while (left < right) {
//     var sum = arr[left] + arr[right];
//     if (sum == k) {
//       //  ans = {left,right};
//       return `${left} ${right}`;
//     } else if (sum > k) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return `${-1} ${-1}`;
// }

// console.log(twoSum([1,3,4,5,7,9,6,8],8,4))

// function diffK(arr,k){
//     let n=arr.length
//     let first=0
//     let second =0

//     while(first<n && second<n){
//         let temp = arr[second]-arr[first]
//         if(temp==k && first!=second){
//             return "YES"
//         }else if(temp<k){
//             second++
//         }else{
//             first++
//         }

//     }
//     return "NO"
// }

// let arr=[1,2,3,4,5]
// let k=2

// console.log(diffK(arr,k))

//subarray
// function getAllSubarrays(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let subarray = [];
//     for (let j = i; j < n; j++) {
//       subarray.push(arr[j]);
//       console.log([...subarray]); // print each subarray
//     }
//   }
// }
// getAllSubarrays([1,2,3,4,5,6])

//............................................................................

// let str1 ="amit"

// let str2 ="mita"

// function isPermutation(str1,str2){
//     let sorted1=str1.split("").sort().join("")
//         let sorted2 = str2.split("").sort().join("");
//          if(sorted1==sorted2){
//             return "yes"
//          }else{
//             return "no"
//          }
// }

// console.log(isPermutation(str1,str2))

//is permutation means sort string and just checek length of the 2 string is equal.

//......................................................................

// function countNames(N, arr) {
//   let obj = {};
//   for (let i = 0; i < N; i++) {
//     if (obj[arr[i]] === undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] += 1;
//     }
//   }

//   for (let key in obj) {
//     console.log(key, obj[key]);
// }

//   }
// countNames(3, ["masai", "school", "masai"]);

//.................................................................

// function mergedarr(arr1,arr2){
//     let arr3=[...arr1,...arr2]
//     console.log(arr3)

//     for(let i=0;i<arr3.length;i++){
//         for(let j=i+1;j<arr3.length-1;j++){
//             if(arr3[j]<arr3[i]){
//                 [arr3[i],arr3[j]]=[arr3[j],arr3[i]]
//             }
//         }
//     }
//     return arr3
// }

// console.log(mergedarr([2,3,1,4],[5,4,6,8]))

//...................................................

// function palindrome(str) {
//   let obj = {};
//   let count = 0;
//   if (str.length === 1) {
//     return "Palindrome";
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       if (obj[str[i]] === undefined) {
//         obj[str[i]] = 1;
//       } else {
//         obj[str[i]] += 1;
//       }
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] % 2 != 0) {
//       count++;
//     }
//   }

//   if (count > 1) {
//     return "Not Palindrome";
//   }else{
//     return "Palindrome";
//   }
// }
// console.log(palindrome("abbb"));

//....................................................

//hard problem
// function keepDistinct(str) {
//   let arr =str.split("")
//   console.log(arr)

//   let bag = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         continue;
//       } else {
//         bag += arr[i];
//       }
//     }
//   }
//   console.log(bag);
// }

// keepDistinct("iloveprogramming");

//.............................................

//hard problem dry run it for [2, 2, 2, 1, 1,5] 5 ke liye i+1 kon hoga
// function foo(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] !== sortedArr[i + 1]) {
//       sum += sortedArr[i] ;
//     }
//   }
//   console.log(sum);
// }
// foo([2, 2, 2, 1, 1,5]);

//...........................................................................

//anagram means chcek each and every elem(elem check karav lagta) is same and length also of a str
// function dectetAna(str1, str2) {
//   let arr1 = str1.split("").sort();
//   let arr2 = str2.split("").sort();

// for(let i=0;i<arr1.length;i++){
//   if(arr1[i]===arr2[i] && arr1.length===str2.length){
//     return "Anagram"
//   }else{
//     return "Not Anagram"
//   }

// }

// }

// console.log(dectetAna("abcwd","dcab"))

//......................................................................

// function anagram(arr) {
//   //1 sort arr[i[i]]
// let sortedArr=[]
//   for (let i = 0; i < arr.length; i++) {
//     let sortedElem = arr[i].split("").sort().join("");

//     sortedArr.push(sortedElem)
//   }
//   return sortedArr;
// }
// console.log(anagram(["eat", "tea", "uio"]));

//......................................
//form a wave bt odd no ELEM in arr ks karaych 
// function swap(arr) {
//   let sorted = arr.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length; i += 2) {
//     for (let j = i + 1; j<= i + 1; j++) {
//       if (i % 2 == 0) {
//         [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
//       }
//     }
//   }
//   console.log(sorted);
// }

// swap([9, 8, 6, 5, 4, 7, 2, 1, 3,10]);


//.......................................

//dry run it 

// function getAllSubstrings(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       temp += str[j]; // build substring character by character
//       result.push(temp);
//     }
//   }

//   return result;
// }

// let str = "abbc";
// console.log(getAllSubstrings(str));

//..............................................................

// function getDistinctLength2Substrings(str) {
//   let substrSet = {};
//   let count = 0;

//   for (let i = 0; i < str.length - 1; i++) {
//     let temp = str[i] + str[i + 1]; // manually form substr of length 2

//     if (substrSet[temp] === undefined) {
//       substrSet[temp] = true;
//       count++;
//     }
//   }

//   // Convert object keys to array
//   let distinctSubstrings = [];
//   for (let key in substrSet) {
//     distinctSubstrings.push(key);
//   }

//   return {
//     count,
//     substrings: distinctSubstrings,
//   };
// }

// let str = "abbbc";
// let result = getDistinctLength2Substrings(str);
// console.log("Total distinct substrings of length 2:", result.count);
// console.log("Substrings:", result.substrings);


//.................................................................

//Enter code here

// function substr(str){
//     let obj={}
//     let count=0
    
//     for(let i=0;i<str.length-1;i++){
//         let temp=str[i]+str[i+1]//length 2 substring
//     if(obj[temp]===undefined){
//         obj[temp]=true
//         count++
//     }
//     }
//     let arr2=[]
//     for(let key in obj){
//         arr2.push(key)
//     }
    
//     console.log(arr2,count)
// }
// substr("abbbc")

//.........................................

//all substrings
// function getAllSubstrings(str) {
//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       temp += str[j]; // build substring character by character
//       result.push(temp);
//     }
//   }

//   return result;
// }

// let str = "zoomsessionmooz";
// console.log(getAllSubstrings(str));


//.........................................



// function removeD(str){
//     let bag=""
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==str[i+1]){
//             bag+=str[i]
//         }
//     }
//     console.log(bag)
// }

// removeD("aaabccddd")

//..................................................



// function removeD(str){
//    let obj={}
//    for(let i=0;i<str.length;i++){
//        if(obj[str[i]]==undefined){
//            obj[str[i]]=1
//        }else{
//             obj[str[i]]+=1
//        }
//    }
//    console.log(obj)
//    let bag=""
   
//    for(let key in obj){
//        if(obj[key]%2==1){
//            bag+=key
//        }
//    }
//    console.log(bag)
// }

// removeD("aaabccddd");

//...............................................

//Enter code here

// function prod(arr){
//   let arr2=[]
//   for(let i=0;i<arr.length;i++){
//     let prod=1
//     for(let j=0;j<arr.length;j++){
//             if(j==i){
//                 continue
//             }else{
//                 prod*=arr[j]
//               }
//             }
//             arr2.push(prod)
       
        
        
//     }
//     console.log(arr2)
// }

// prod([2,3,4,5,6])

//.......................................................

// function stacks(str) {
//   let st = [];

//   for (let i = 0; i<str.length; i++) {
//     if (str[i] == "#") {
//       st.pop();
//     } else {
//       st.push(str[i]);
//     }
//   }

//   console.log(st.join(""));
// }
// stacks("ab#c")
//..................................................................




//for loop chy aat define klei aani access klei tr matrix chya format mde print hot 
//nhitr string chya form mde  

// function addOne(mat) {
//   let n = mat.length; //row
//   let m = mat[0].length; //col

//   for (let i = 0; i < n; i++) {
//     let bag = "";
//     for (let j = 0; j < m; j++) {
//       bag = bag+(mat[i][j] + 1)+" "
//     }
//     console.log(bag);
//   }
// }

// addOne([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);


//.....................................................................

//Enter code here

// function rectMat(mat){
//     let n=mat.length
//     let m=mat[0].length
//     for(let i=0;i<n;i++){
//     let bag= ""
//         for(let j=0;j<m;j++){
//             bag=bag+(mat[i][j]+1)+" "
//         }
        
//     console.log(bag)
//     }
// }
// rectMat([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])

//.........................................................

//Enter code here


// function addK(mat,k){
//     let n=mat.length
//     let m=mat[0].length
//     for(let i=0;i<n;i++){
//         let bag=""
//         for(let j=0;j<m;j++){
//             bag+=(mat[i][j]+k)+" "
//         }
//         console.log(bag)
//     }
// }
// addK([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ],3)

//......................................................



// function giveInd(arr, k) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left != right) {
//     if (arr[left] + arr[right] == k) {
     
//       return `${left} ${right}`;
//     } else if (arr[left] + arr[right] > k) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return `${-1} ${- 1}`;
// }

// console.log(giveInd([2, 7, 11, 15], 14));

//..................................................................

//Enter code here


// function findMazSum(arr,k){
//    let sorted= arr.sort((a,b)=>a-b)
//    let maxSum=0
//    let count=0
//    console.log(sorted)
//    for(let i=sorted.length-1;i>=0 && count<k; i--){
//        maxSum+=arr[i]
//        count++
//    }
//    console.log(maxSum)
// }

// let arr=[-1,-1,-2,-1,-2,4,1,9,2,9]
// let k=3

// findMazSum(arr,k)


// function pair(arr,k){
    
//   let maxSum=0
//     for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]<k && maxSum<arr[i]+arr[j]){
//                 maxSum=arr[i]+arr[j]
//             }
//         }
//       }
//       console.log(maxSum)
// }

// pair([1,2,3,4,5],10)

//...................................................

//Enter code here

// function missInt(arr){
//     let sum =0
//     for(let i=1;i<=arr.length+1;i++){
//         sum+=i
//     }
//     console.log(sum)
//     let sum2=0
//     for(let j=0;j<arr.length;j++){
//         sum2+=arr[j]
//     }
//     console.log(sum2)
//     let requireEle=sum-sum2
//     console.log(requireEle);
// }

// missInt([2,3,1,5])
//...........................................................
// function threeMaxThreeMin(N, arr) {
//   //write code here

//   let sorted = arr.sort((a, b) => a - b);
//  let fir3= sorted.slice(0, 3);

// let last3 = sorted.slice(-3);
  
      
  

//   console.log(fir3, last3);
// }
// threeMaxThreeMin(6,[2,5,4,2,1,6])

//..........................................................


// function foo(arr, k) {
//   var count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == k) {
//         count++;
//       }
//     }
//   }

//   if (count => 1) {
//     return 1;
//   } else {
//     return -1;
//   }
// }
// console.log(foo([3,2,1,4],3))


//................................................................
// function solve(N, arr) {
//   //write code here

//   for (let i = 0; i < N; i++) {
//     for (let j = i + 1; j < N; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }
// console.log(solve(5, [3, 5, 0, 9, 8]));

//.................................................................



//Enter code here

// function foo(arr,k){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]%k >arr[j]%k){
//                 [arr[i],arr[j]]= [arr[j],arr[i]]
//             }
//         }
//     }
//     console.log(arr)
// }
// foo([12, 18, 17, 65, 46], 6);

//....................................................

//Enter code here


// function PrintRank(arr){
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]=="India"){
//             console.log(i+1)
//             break;
//         }
//     }
// }
// PrintRank(["Russia","USA","India","China","India"])

//.........................................................
//kuch smj nhi aaya kuch bhi nh
// function winnerTeam(n, arr) {
//   var obj = [];
//   for (var i = 0; i < n; i++) {
//     if (obj[arr[i]] === undefined) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     }
//   }
//   var x = -Infinity;
//   for (var j = 0; j < n; j++) {
//     if (x < obj[arr[j]]) {
//       x = obj[arr[j]];
//       var y = arr[j];
//     }
//   }
//   console.log(y);
// }
// winnerTeam(5,["A","A","ABA","A","ABA"])

//..............................................
//Enter code here

// function goingFor(arr,k){
   
//     let count=0
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>=arr[k]){
//             count++
//         }
        
        
//     }
//     console.log(count)
// }

// goingFor([10,9,8,7,7,7,5,5],5)


///...............................................

// function foo(arr,k){
//     let count=0
//     let skips=0
//     for(let i=0;i<arr.length;i++){
        
//         if(arr[i]<=k){
//             count++
//         }
//         if(arr[i]>k){
//             skips++
//         }
//         if(skips===2){
//             break
//         }
//       }
//       console.log(count)
// }

// foo([4,3,7,6,7,2,2],6)

//............................................
// function alanFrequency(N, str) {
//   //write code here
//   let obj = {};
//   for (let i = 0; i < N; i++) {
//     if (obj[str[i]] === undefined) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]] += 1;
//     }
//   }
//   for (let key in obj) {
//     console.log(key,"-", obj[key]);
//   }
// }
// alanFrequency(4,"aman")

//............................................



// function foo(str){
 
//     for(let i=0;i<str.length;i++){
//        console.log(str[i])
//     }
    
// }

// foo("ankush")

//..................................................



// function foo(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
   
//     }
//   }
// }
// foo([1, 2, 3, 4, 5]);

//..............................................




// function detectPalII(N, string) {
//   //write code here

//   let obj = {};
//   for (let i = 0; i < N; i++) {
//     if (obj[string[i]] === undefined) {
//       obj[string[i]] = 1;
//     } else {
//       obj[string[i]] += 1;
//     }
//   }
//   let count = 0;
//   for (let key in obj) {
//     if (obj[key] % 2 != 0) {
//       count++;
//     }
//   }

//   if (count <= 1) {
//     console.log("Pal");
//   } else {
//     console.log("Not Pal");
//   }
// }
// detectPalII(6,"aaabcc")

//....................................................
//Enter code here


// function stacks(str){
//     let st=[]
    
//     for(let i=0;i<str.length;i++){
//         if(st[st.length-1]==str[i]){
//             st.pop()
//         }else{
//             st.push(str[i])
//         }
//     }
    
//     console.log(st.join(""))
    
// }
// stacks("aaabccddd")

//................................................

//Enter code here

//Enter code here

//Enter code here

function foo(arr1,arr2){
    let arr3=[...arr1,...arr2].sort((a,b)=>a-b)
    console.log(arr3)
    
    let bag=""
    for(let i=0;i<arr3.length;i++){
        if(arr3[i]==arr3[i+1]){
            continue
        }else{
            bag+=arr3[i]+ " "
        }
    }
    console.log(bag.split(" "))
}
foo([1,2,3,4,5],[3,4,5,6])