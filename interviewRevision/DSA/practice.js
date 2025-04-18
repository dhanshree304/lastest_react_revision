// //Enter code here

// // function returnInd(k, arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //       if (arr[i] + arr[j] === k) {
// //         return i, j;
// //       } else {
// //         return -1;
// //       }
// //     }
// //   }
// // }

// // console.log(returnInd(8, [3, 4, 5, 15]));

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

// console.log(twoSum([1,3,4,5,7,9],6,8))


// //sgle ans wrong yetatyy.



//Enter code here

// function countSame(arr1,arr2){
//     let n=arr1.length
//     let m=arr2.length
//     let bag=""
//     for(let i=0;i<n;i++){
//         for(let j=0;j<m;j++){
//             if(arr1[i]===arr2[j]){
//                 bag+=arr2[j] + " "
//             }else{
//                bag+=0
//             }
//         }
//         console.log(bag)
//     }
// }
// let arr1=[1,3,2,4,5]
// let arr2=[3,5,4,7,2]
// countSame(arr1,arr2)


//Enter code here

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

function getAllSubarrays(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let subarray = [];
    for (let j = i; j < n; j++) {
      subarray.push(arr[j]);
      console.log([...subarray]); // print each subarray
    }
  }
}
getAllSubarrays([1,2,3,4,5,6])