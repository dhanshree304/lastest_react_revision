// //spiral matrix row traversal first

// function spiralTraversal(matrix) {
//   let top = 0;
//   let bottom = matrix.length - 1;
//   let left = 0;
//   let right = matrix[0].length - 1;
//   let bag = "";

//   while (top <= bottom && left <= right) {
//     // Top row (left to right)
//     for (let i = left; i <= right; i++) {
//       bag += matrix[top][i] + " ";
//     }
//     top++;

//     // Right column (top to bottom)
//     for (let i = top; i <= bottom; i++) {
//       bag += matrix[i][right] + " ";
//     }
//     right--;

//     // Bottom row (right to left)
//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         bag += matrix[bottom][i] + " ";
//       }
//       bottom--;
//     }

//     // Left column (bottom to top)
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         bag += matrix[i][left] + " ";
//       }
//       left++;
//     }
//   }

//   console.log(bag.trim());
// }

// spiralTraversal([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]);


//................................................

//spiral matrix colum traversal first

// function spiralTraversal(N, M, arr) {
//   //write code here
//   var top = 0;
//   var bottom = N - 1;
//   var left = 0;
//   var right = M - 1;
//   var bag = "";
//   var count = 0;

//   while (count < N * M) {
//     for (var i = top; i <= bottom; i++) {
//       if (count < N * M) {
//         bag += arr[i][left] + " ";
//         count++;
//       }
//     }
//     left++;
//     for (var i = left; i <= right; i++) {
//       if (count < N * M) {
//         bag += arr[bottom][i] + " ";
//         count++;
//       }
//     }
//     bottom--;
//     for (var i = bottom; i >= top; i--) {
//       if (count < N * M) {
//         bag += arr[i][right] + " ";
//         count++;
//       }
//     }
//     right--;
//     for (var i = right; i >= left; i--) {
//       if (count < N * M) {
//         bag += arr[top][i] + " ";
//         count++;
//       }
//     }
//     top++;
//   }
//   console.log(bag);
// }

// spiralTraversal([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]);

//ORRRRRRRRRRRRRRRRRRRRRRR...............................................

// function customSpiralTraversal(matrix) {
//   let rows = matrix.length;
//   let cols = matrix[0].length;

//   let bag = "";

//   // 1. Top column (first column, top to bottom)
//   for (let i = 0; i < rows; i++) {
//     bag += matrix[i][0] + " ";
//   }

//   // 2. Last row (left to right)
//   for (let j = 1; j < cols; j++) {
//     bag += matrix[rows - 1][j] + " ";
//   }

//   // 3. Last column (bottom to top)
//   for (let i = rows - 2; i >= 0; i--) {
//     bag += matrix[i][cols - 1] + " ";
//   }

//   // 4. First row (right to left)
//   for (let j = cols - 2; j > 0; j--) {
//     bag += matrix[0][j] + " ";
//   }

//   console.log(bag.trim());
// }

// customSpiralTraversal([[1,2,3,4],
// [5,6,7,8],
// [9,10,11,12]])


//.............................................

//Z-traversal for N*M matrix


function zTraversal(matrix) {
  let N = matrix.length; // Rows
  let M = matrix[0].length; // Columns
  let result = "";

  // Step 1: First row
  for (let j = 0; j < M; j++) {
    result += matrix[0][j] + " ";
  }

  // Step 2: Diagonal from top-right to bottom-left (excluding first & last row)
  let i = 1;
  let j = M - 2;
  while (i < N - 1 && j > 0) {
    result += matrix[i][j] + " ";
    i++;
    j--;
  }

  // Step 3: Last row
  if (N > 1) {
    for (let j = 0; j < M; j++) {
      result += matrix[N - 1][j] + " ";
    }
  }

  console.log(result.trim());
}
zTraversal([[1,2,3,4],
 [5,6,7,8],
 [9,10,11,12]])


 //z-traversal for N*N maytrix

 function zTraversal(N, arr) {
   //write code here
   var bag = "";
   for (var i = 0; i < N; i++) {
     bag += arr[0][i] + " ";
   }
   for (var j = 1; j < N; j++) {
     bag += arr[j][N - j - 1] + " ";
   }
   for (var k = 1; k < N; k++) {
     bag += arr[N - 1][k] + " ";
   }
   console.log(bag);
 }
 zTraversal([
   [1, 2, 3],
   [5, 6, 7],
   [9, 10, 11],
 ]);

 //............................................................


 function nTraversal(matrix) {
   var n = matrix.length;
   var bag = "";
   for (var i = n - 1; i >= 0; i--) {
     bag += matrix[i][0] + " ";
   }
   for (var j = 1; j < n; j++) {
     bag += matrix[j][j] + " ";
   }
   for (var k = n - 2; k >= 0; k--) {
     bag += matrix[k][n - 1] + " ";
   }
   console.log(bag);
 }

 nTraversal([
   [1, 2, 3],
   [5, 6, 7],
   [9, 10, 11]
 ]);