//sorting algorithms


// 2.Insertion Sort
// 3.Selection Sort
// 4.Bubble Sort

// let arr = [2, 4, 3, 1, 5, 7, 6];
// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

//...........................................................

//Selection  Sort  understood 
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

///OR//

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(selectionSort(arr));


//......................................................................


//Insertion Sort
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


//.............................................................


//Bubble Sort

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([...arr])); // [1, 2, 3, 4, 5, 6, 7]



// function solve(N, arr) {
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
//   console.log(arr.join(" "));
// }
// let arr=[3,2,4,6,5]
// solve(5,arr)

