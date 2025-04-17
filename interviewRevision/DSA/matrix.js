// // //spiral matrix
// // // top
// // // 00 01 02 03 04 right
// // // 10 11 12 13 14
// // // 20 21 22 23 24
// // // 30 31 32 33 34
// // // 40 41 42 43 44 left
// // // bottom

// // top = 0;
// // bottom = 4;
// // left = 4;
// // right = 0;
// // size = N * N;
// // count = 0;
// // let bag = "";

// // if (count < size) {
// //   for (let i = top; i <= right; i++) {
// //     bag += mat[top][i];
// //     count++;
// //   }
// //   right++;
// // }
// // //right = 1

// // if (count < size) {
// //   for (let i = right; i <= left; i++) {
// //     bag += mat[i][left];
// //     count++;
// //   }
// //   left--;
// // }
// // //left=3

// // if (count < size) {
// //   for (let i = left; i <= top; i--) {
// //     bag += mat[bottom][i];
// //     count++;
// //   }
// //   bottom--;
// // }
// // //bottom=3

// // if (count < size) {
// //   for (let i = bottom; i <= right; i--) {
// //     bag += mat[i][top];
// //     count++;
// //   }
// //   top++;
// // }
// // //top=1

// // top = 1;
// // bottom = 3;
// // left = 3;
// // right = 1;


// //................................................


// //spiral matrix
// // top
// // 00 01 02 03 04 right
// // 10 11 12 13 14
// // 20 21 22 23 24
// // 30 31 32 33 34
// // 40 41 42 43 44 left
// // bottom

// top = 0;
// bottom = 0;
// left = 4;
// right = 4;
// size = N * N;
// count = 0;
// let bag = "";

// if (count < size) {
//   for (let i = top; i <= bottom; i++) {
//     bag += mat[i][top];
//     count++;
//   }
//   bottom++;
// }
// //bottom= 1

// if (count < size) {
//   for (let i = bottom; i <= left; i++) {
//     bag += mat[left][i];
//     count++;
//   }
//   left--;
// }
// //left=3

// if (count < size) {
//   for (let i = left; i <= top; i--) {
//     bag += mat[i][right];
//     count++;
//   }
//   right--;
// }
// //right=3

// if (count < size) {
//   for (let i = right; i <= bottom; i--) {
//     bag += mat[top][i];
//     count++;
//   }
//   top++;
// }
// //top=1

// top = 1;
// bottom = 1;
// left = 3;
// right = 3;


//............................................................