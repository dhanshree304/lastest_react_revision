// sorting algorithms


// 2.Insertion Sort
// 3.Selection Sort
// 4.Bubble Sort

// let arr = [2, 43, 32, 17, 51, 70, 6].sort()
// // arr.sort((a, b) => {
// //   return a - b;
// // });
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

// ...........................................................

// Selection  Sort  

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) minIndex = j;
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }

// console.log(selectionSort([...arr])); // [1, 2, 3, 4, 5, 6, 7]




// ......................................................................


// Insertion Sort


// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = key;
//   }
//   return arr;
// }

// console.log(insertionSort([...arr])); // [1, 2, 3, 4, 5, 6, 7]


// .............................................................


// Bubble Sort

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = i+1; j < n - 1 - i; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }
// let arr =[3,5,4,1,7,9]

//  console.log(bubbleSort([...arr])); 




// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n ; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }
// let arr = [3, 5, 4, 1, 7, 9];

// console.log(bubbleSort([...arr]));



// function bubbleSortt(N, arr) {
//   //write code here
//   for (var i = 0; i < N; i++) {
//     for (var j = 0; j < N - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];


//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// let arr1=[3,2,4,6,5]
// bubbleSortt(5, arr1);

