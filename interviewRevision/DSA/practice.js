// // // function strName(n, arr) {
// // //   var bag = "";
// // //   for (var i = 0; i < n; i++) {
// // //     bag += arr[i];
// // //   }
// // //   console.log(bag);
// // // }
// // // let n = 2;
// // // let arr = ["aman", "rutwik"];
// // // strName(n, arr);

// // let mat = [
// //   [1, 2, 3, 4],
// //   [5, 6, 7, 8],
// //   [9, 10, 11, 12],
// // ];

// // let arr2 = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// // let mat3 = [
// //   [1, 2, 3],
// //   [5, 6, 7],
// //   [8, 9, 10],
// //   [11, 12, 13],
// // ];

// // function addOne(mat2) {
// //   let n = mat2.length; //row
// //   let m = mat2[0].length; //column
// // console.log(n,m)
// //   for (let i = 0; i < n; i++) {
// //     let bag = "";
// //     for (let j = 0; j < m; j++) {
// //       bag = bag + (mat3[i][j] + 1) + " ";
  
// //     }
// //    console.log(bag)
// //   }
// // }
// // addOne(mat3)

// // //.........................................
// // //difference between both????
// // //.........................................

// // // function addOne2(mat) {
// // //   let n = mat.length; //row
// // //   let m = mat[0].length; //column

// // //   let bag = "";
// // //   for (let i = 0; i < n; i++) {
// // //     for (let j = 0; j < m; j++) {
// // //       bag = bag + (mat[i][j] + 1) + " ";
// // //     }
// // //   }
// // //   console.log(bag);
// // // }
// // // addOne2(mat2);


// function strName(n, arr) {
//   var bag = "";
//   for (var i = 0; i < n; i++) {
//     bag += arr[i]+" ";
//   }
//   console.log(bag);
// }
// strName(2,["aman","rutwik"])

// function printstr(str) {
//   var bag = "";
//   for (var i = 0; i < str.length; i++) {
//     bag += str[i] ;
//   }
//   console.log(bag);
// }
// printstr("my name is ankush")




function addK(k, arr) {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + k +" " 
  }
  console.log(bag);
}
addK(2, [1, 2, 3]);